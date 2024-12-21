// import { useState } from 'react';

// export const MessageCard = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const message = `
//     It is with great pride and a profound sense of responsibility that I
//     extend my heartfelt greetings to all visitors to the official website of
//     the International Islamic University Chittagong (IIUC). Since its
//     inception, IIUC has been steadfast in its mission to impart quality
//     education imbued with moral and ethical values, rooted in the principles
//     of Islam. Our vision is to nurture a generation of graduates who are not
//     only academically excellent but also socially responsible and globally
//     competent, embodying the ideals of knowledge, wisdom, and character. At
//     IIUC, we strive to create an environment that fosters innovation, critical
//     thinking, and lifelong learning. We take pride in our dedicated faculty,
//     state-of-the-art facilities, and vibrant student community, which together
//     form the cornerstone of our academic excellence. Our commitment to
//     research and development further underscores our determination to
//     contribute meaningfully to the advancement of society and the betterment
//     of humanity. As Chairman of the Board of Trustees, I am deeply committed
//     to steering IIUC towards new horizons of success and excellence. I invite
//     you to explore our website to learn more about our programs, achievements,
//     and the dynamic opportunities we offer. May Allah (SWT) guide us in our
//     endeavors and bless IIUC to continue its journey as a beacon of knowledge
//     and enlightenment.
//   `;

//   const truncateMessage = (text: string, limit: number) =>
//     text.length > limit ? `${text.slice(0, limit)}...` : text;

//   return (
//     <div className='max-w-full md:max-w-[70vh] shadow-2xl p-6 rounded-lg bg-white'>
//       <h2 className='text-lg md:text-xl font-bold mb-4 text-blue-900'>
//         Message from the Chairman
//       </h2>
//       <p className='text-sm md:text-base text-gray-700'>
//         {isExpanded ? message : truncateMessage(message, 800)}
//       </p>
//       <div className='mt-4 flex justify-between items-center'>
//         {!isExpanded && (
//           <button
//             onClick={() => setIsExpanded(true)}
//             className='text-blue-600 hover:text-blue-800'
//           >
//             Read More
//           </button>
//         )}
//         {isExpanded && (
//           <button
//             onClick={() => setIsExpanded(false)}
//             className='text-blue-600 hover:text-blue-800'
//           >
//             Show Less
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

import { useState } from 'react';
import { Modal, Button } from '@mantine/core';

export const MessageCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const message = `
    It is with great pride and a profound sense of responsibility that I
    extend my heartfelt greetings to all visitors to the official website of
    the International Islamic University Chittagong (IIUC). Since its
    inception, IIUC has been steadfast in its mission to impart quality
    education imbued with moral and ethical values, rooted in the principles
    of Islam. Our vision is to nurture a generation of graduates who are not
    only academically excellent but also socially responsible and globally
    competent, embodying the ideals of knowledge, wisdom, and character. At
    IIUC, we strive to create an environment that fosters innovation, critical
    thinking, and lifelong learning. We take pride in our dedicated faculty,
    state-of-the-art facilities, and vibrant student community, which together
    form the cornerstone of our academic excellence. Our commitment to
    research and development further underscores our determination to
    contribute meaningfully to the advancement of society and the betterment
    of humanity. As Chairman of the Board of Trustees, I am deeply committed
    to steering IIUC towards new horizons of success and excellence. I invite
    you to explore our website to learn more about our programs, achievements,
    and the dynamic opportunities we offer. May Allah (SWT) guide us in our
    endeavors and bless IIUC to continue its journey as a beacon of knowledge
    and enlightenment.
  `;

  const truncateMessage = (text: string, limit: number) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

  return (
    <div className='max-w-full md:max-w-[70vh] shadow-2xl p-6 rounded-lg bg-white'>
      <h2 className='text-lg md:text-xl font-bold mb-4 text-blue-900'>
        Message from the Chairman
      </h2>
      <p className='text-sm md:text-base text-gray-700'>
        {truncateMessage(message, 800)}
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
        title='Message from the Chairman'
        centered
        size='lg'
        overlayProps={{
          className: 'bg-black bg-opacity-50 backdrop-blur-sm',
        }}
        classNames={{
          root: 'rounded-lg shadow-lg', // Root container
          overlay: 'bg-gray-700 bg-opacity-60', // Overlay styles
          inner: 'p-4', // Inner wrapper
          content: 'bg-gray-50 rounded-lg p-6 shadow-xl', // Modal content styles
          header: 'border-b border-gray-200 pb-2', // Header styles
          title: 'text-xl font-bold text-blue-900', // Title styles
          body: 'text-gray-700', // Body text styles
          close: 'text-red-500 hover:bg-red-100 rounded-full', // Close button styles
        }}
      >
        <p className='text-sm md:text-base text-gray-700'>{message}</p>
      </Modal>
    </div>
  );
};
