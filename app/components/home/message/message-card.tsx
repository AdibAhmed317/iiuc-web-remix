import { useState } from 'react';
import { Modal } from '@mantine/core';
import { chairman_message } from '~/assets/data/messages';

export const MessageCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateMessage = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <div className='w-full max-w-full md:max-w-[70vh] shadow-2xl p-6 rounded-lg bg-white'>
      <h2 className='text-lg md:text-xl font-bold mb-4 text-blue-900'>
        Message from the Chairman
      </h2>
      <p className='text-sm md:text-base text-gray-700'>
        {truncateMessage(chairman_message, 800)}
      </p>
      <div className='mt-4 flex justify-between items-center'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='text-blue-600 hover:text-blue-800'
        >
          Read More
        </button>
      </div>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          <span
            style={{ fontSize: '24px', color: '#1d4ed8', fontWeight: 'bold' }}
          >
            Message from the Chairman
          </span>
        }
        centered
        size='xl'
      >
        <hr className='h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6' />
        <p className='text-sm md:text-base text-gray-700'>{chairman_message}</p>
      </Modal>
    </div>
  );
};
