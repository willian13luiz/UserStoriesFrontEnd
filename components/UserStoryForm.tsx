import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import axios from 'axios';
import { FaSync, FaSpinner, FaPaperPlane } from 'react-icons/fa';

interface Field {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  height?: string;
}

interface UserStoryFormProps {
  endpoint: string;
  fields: Field[];
  setResponse: (response: string) => void;
  setError: (error: string) => void;
}

interface ApiResponse {
  message: string;
  success?: string;
  error?: string;
  details?: string;
}

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

const UserStoryForm: React.FC<UserStoryFormProps> = ({
  endpoint,
  fields,
  setResponse,
  setError,
}) => {
  const initialState = fields.reduce<Record<string, string>>((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  const [formData, setFormData] =
    useState<Record<string, string>>(initialState);
  const [loading, setLoading] = useState<boolean>(false);

  // Função para ajustar dinamicamente a altura do textarea
  const adjustTextareaHeight = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Reseta a altura
    textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta para a altura do conteúdo
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.tagName === 'TEXTAREA') {
      adjustTextareaHeight(e as ChangeEvent<HTMLTextAreaElement>);
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse('');
    setError('');

    try {
      const res = await axios.post<ApiResponse>(
        `${BACKEND_URL}${endpoint}`,
        formData
      );
      setResponse(res.data.message);
    } catch (e: unknown) {
      setError('Erro ao gerar a história de usuário.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setResponse('');
    setError('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-4'
    >
      {fields.map(field => (
        <div key={field.name}>
          <label className='block text-gray-700'>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded mt-1 placeholder-opacity-75 placeholder-normal-case align-top'
              required={field.required}
              placeholder={field.placeholder}
              style={{
                height: 'auto', // Define a altura inicial como automática
                resize: 'none', // Impede o redimensionamento manual
                overflowY: 'hidden', // Remove a barra de rolagem
              }}
            />
          ) : (
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded mt-1'
              required={field.required}
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}
      <div className='flex space-x-4'>
        <button
          type='submit'
          className='flex items-center bg-[#1059F9] text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50'
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className='animate-spin mr-2' />
          ) : (
            <FaPaperPlane className='mr-2' />
          )}
          Gerar História de Usuário
        </button>
        <button
          type='button'
          onClick={handleReset}
          className='flex items-center bg-[#9E9E9E] text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50'
          disabled={loading}
        >
          <FaSync className='mr-2' />
          Recomeçar Prompt
        </button>
      </div>
    </form>
  );
};

export default UserStoryForm;
