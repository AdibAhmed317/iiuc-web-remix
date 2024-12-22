import { useState } from 'react';
import LibraryImg from '../../../assets/images/library.jpg'
import { library_description } from '~/assets/data/messages'; 
import { Modal } from '@mantine/core';

export default function LibrarySection(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const truncateMessage = (text: string, limit: number) =>
        text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <div className="bg-gray-100">  
      <section className="py-8">
        <div className="container mx-auto px-4 ">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-gray-600 mb-4">IIUC Central Library</h2>

            <hr className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6" />
            
            <div className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-6">
                    
                    <img 
                        src={LibraryImg}
                        alt="IIUC Central Library"
                        className="w-full lg:w-2/5 rounded-lg object-cover h-fit"
                        />
                    <div className="flex-1 space-y-4">
                        <p className="text-justify">
                            {truncateMessage(library_description, 1500)}
                        </p>
                        <button
                        onClick={() => setIsModalOpen(true)}
                        className='text-black-600 hover:text-white transition-all duration-300 bg-gray-300 hover:bg-primaryBlue py-2 px-4 rounded-xl'
                        >
                        Read More
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
                      IIUC Central Library
                    </span>
                  }
                centered
                size='xl'
              >
                <hr className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6" /> 
                <p className='text-sm md:text-base text-gray-700 p-4'>{library_description}</p>
        </Modal>
      </section>
    </div>
  );
};

