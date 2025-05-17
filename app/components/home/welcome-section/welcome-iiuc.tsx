import { useEffect, useState } from 'react';
import LibraryImg from '../../../assets/images/library.jpg';
import { welcome_description } from '~/assets/data/messages';
import { Modal } from '@mantine/core';

export default function WelcomeIiuc() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const truncateMessage = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
    }
  }, []);

  return (
    <div className='mt-4 sm:mt-10'>
      <section className='py-4 sm:py-8'>
        <div className='container mx-auto px-2 sm:px-4'>
          <div className='bg-white rounded-lg shadow-md p-3 sm:p-6'>
            <h2 className='text-lg xs:text-xl sm:text-2xl md:text-4xl text-gray-600 mb-3 sm:mb-4 text-center font-robotoLight'>
              Welcome To IIUC
            </h2>

            <hr className='h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 sm:mb-6' />

            <div className='space-y-4'>
              <div className='flex flex-col md:flex-row gap-4 sm:gap-6'>
                <div className='w-full md:w-1/2'>
                  <iframe
                    className='w-full aspect-video'
                    src='https://www.youtube.com/embed/QHDfe7rdtJg?si=IAz2y79avP1rDXTw&autoplay=1&mute=1&rel=0'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    referrerPolicy='strict-origin-when-cross-origin'
                    allowFullScreen
                  />
                </div>

                <div className='w-full md:w-1/2 space-y-3 sm:space-y-4'>
                  <p className='text-xs xs:text-sm sm:text-base text-justify'>
                    {truncateMessage(welcome_description, 1500)}
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className='w-full sm:w-auto text-xs xs:text-sm sm:text-base text-black-600 hover:text-white transition-all duration-300 bg-gray-300 hover:bg-primaryBlue py-2 px-4 rounded-xl'
                  >
                    Read More About IIUC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          opened={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={
            <span className='text-sm xs:text-lg sm:text-2xl text-blue-700 font-bold'>
              History of International Islamic University Chittagong
            </span>
          }
          centered
          size='xl'
        >
          <hr className='h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4 sm:mb-6' />
          <p className='text-xs xs:text-sm sm:text-base text-gray-700 p-2 sm:p-4'>
            {welcome_description}
          </p>
        </Modal>
      </section>
    </div>
  );
}
