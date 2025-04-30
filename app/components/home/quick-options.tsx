import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import { div } from 'motion/react-client';
import { options } from '~/assets/data/quick-options';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger each child animation
      ease: 'easeInOut', // Smooth easing for the stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 }, // Start further down for a more noticeable effect
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Smooth duration
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier easing
    },
  },
};

export default function QuickOptions() {
  return (
    <div className='mb-20 mt-16'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-robotoLight text-4xl text-gray-600 text-center'>
          Quick Links
        </h1>
        <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
      </div>
      <Link to='/' className='flex justify-center items-center px-10'>
        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5'
          variants={containerVariants}
          initial='hidden'
          whileInView='show' // Trigger the animation when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the element is in view
        >
          {options.map((option, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-center bg-white p-4 rounded-lg shadow-lg max-w-[20rem]'
              variants={itemVariants} // Apply the item animation
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
            </motion.div>
          ))}
        </motion.div>
      </Link>
    </div>
  );
}
