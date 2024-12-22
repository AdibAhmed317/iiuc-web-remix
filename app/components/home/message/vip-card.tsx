import { VipCardProps } from 'lib/types';
import { Modal } from '@mantine/core';
import { useState } from 'react';

export const VipCard: React.FC<VipCardProps> = ({
  name,
  designation,
  imgSrc,
  isChairman,
  message,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='h-96 w-full sm:w-80 flex flex-col justify-center items-center shadow-2xl hover:shadow-xl transition-all rounded-md bg-white p-4'>
      <img
        src={imgSrc}
        alt={`${name}'s photo`}
        className='w-32 h-32 rounded-full object-cover'
      />
      <h1 className='text-sm font-serif my-2 text-center'>{name}</h1>
      <h1 className='text-sm font-robotoBlack text-center'>{designation}</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${
          isChairman ? 'hidden' : 'block'
        } mt-4 p-2 bg-primaryBlue text-white text-sm font-robotoRegular rounded-lg hover:bg-blue-900`}
      >
        Message
      </button>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Message from the Chairman'
        centered
        size='xl'
      >
        <p className='text-sm md:text-base text-gray-700'>{message}</p>
      </Modal>
    </div>
  );
};
