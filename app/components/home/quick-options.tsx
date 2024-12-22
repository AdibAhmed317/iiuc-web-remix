import { Link } from '@remix-run/react';
import { div } from 'motion/react-client';
import { options } from '~/assets/data/quick-options';

export default function QuickOptions() {
  return (
    <Link to='/' className='flex justify-center items-center px-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5'>
        {options.map((option, index) => (
          <div
            key={index}
            className='flex flex-col items-center bg-white p-4 rounded-lg shadow-lg max-w-[20rem]'
          >
            {/* If imgUrl is available, display the image */}
            {option.imgUrl && (
              <img
                src={option.imgUrl}
                alt={option.title || ''} // Ensure alt is always a string (use an empty string if title is not defined)
                className='w-full h-24 object-contain rounded-lg mb-4'
              />
            )}
            <h3 className='text-lg font-semibold text-gray-800'>
              {option.title}
            </h3>
          </div>
        ))}
      </div>
    </Link>
  );
}
