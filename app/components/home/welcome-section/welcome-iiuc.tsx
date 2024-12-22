import { useState } from 'react';
import LibraryImg from '../../../assets/images/library.jpg'
import { welcome_description } from '~/assets/data/messages';   
import { Modal } from '@mantine/core';

export default function WelcomeIiuc(){
 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const truncateMessage = (text: string, limit: number) =>
        text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <div className="bg-gray-100">  
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-gray-600 mb-4">Welcome To IIUC</h2>

            <hr className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6" />
            
            <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-6">
                    
                    <iframe 
                        className='flex-1'
                        width="560" 
                        height="auto" 
                        src="https://www.youtube.com/embed/QHDfe7rdtJg?si=IAz2y79avP1rDXTw&autoplay=1&mute=1" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        >
                    </iframe>

                    <div className="flex-1 space-y-4">
                        <p className="text-justify">
                            {truncateMessage(welcome_description, 1500)}
                        </p>
                        <button 
                         onClick={() => setIsModalOpen(true)}
                        className='text-black-600 hover:text-white transition-all duration-300 bg-gray-300 hover:bg-primaryBlue py-2 px-4 rounded-xl'
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
                <span style={{ fontSize: '24px', color: '#1d4ed8', fontWeight: 'bold' }}>
                 History of International Islamic University Chittagong
                </span>
                }
             centered
             size='xl'
            >
            <hr className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6" /> 
            <p className='text-sm md:text-base text-gray-700 p-4'>{welcome_description}</p>
        </Modal>
      </section>
    </div>
  );
};

