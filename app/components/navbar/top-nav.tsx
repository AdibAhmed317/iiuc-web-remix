import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

export default function TopNav() {
  return (
    <nav className='min-h-10 bg-primaryBlue text-yellow-600 flex justify-center items-center px-20 py-3 space-x-5 md:space-x-10'>
      <motion.div
        initial={{ y: -20, opacity: 0 }} // Start from above the screen
        whileInView={{ y: 0, opacity: 1 }} // Animate to normal position when in view
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Trigger animation only once when entering the viewport
      >
        <Link
          to='https://www.iiuc.ac.bd/login'
          target='_blank'
          className='bg-yellow-600 p-2 text-black hover:scale-110 transition-all h-8 sm:h-10 w-28 flex justify-center items-center text-xs sm:text-sm rounded-md font-robotoBlack'
        >
          Login
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }} // Start from above the screen
        whileInView={{ y: 0, opacity: 1 }} // Animate to normal position when in view
        transition={{ duration: 1, delay: 0.3 }} // Add delay for the next link
        viewport={{ once: true }} // Trigger animation only once when entering the viewport
      >
        <Link
          to='https://hrd.iiuc.ac.bd/login'
          target='_blank'
          className='bg-yellow-600 p-2 text-black hover:scale-110 transition-all h-8 sm:h-10 w-28 flex justify-center items-center text-xs sm:text-sm rounded-md font-robotoBlack'
        >
          HR Login
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }} // Start from above the screen
        whileInView={{ y: 0, opacity: 1 }} // Animate to normal position when in view
        transition={{ duration: 1, delay: 0.6 }} // Add further delay for the next link
        viewport={{ once: true }} // Trigger animation only once when entering the viewport
      >
        <Link
          to=''
          className='bg-yellow-600 p-2 text-black hover:scale-110 transition-all h-8 sm:h-10 w-28 flex justify-center items-center text-xs sm:text-sm rounded-md font-robotoBlack'
        >
          Transport
        </Link>
      </motion.div>
    </nav>
  );
}
