import { motion } from 'framer-motion';
import AdmissionNotice from './admission-notice';
import GeneralNotice from './general-notice';

export default function Notice() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-0 md:my-20'>
      <motion.div
        className='flex-1'
        initial={{ x: -300, opacity: 0 }} // Start from the left off-screen
        whileInView={{ x: 0, opacity: 1 }} // Animate to normal position when in view
        transition={{ duration: 1 }}
        viewport={{ once: true }} // This ensures the animation triggers only once when entering the viewport
      >
        <AdmissionNotice />
      </motion.div>
      <motion.div
        className='flex-1'
        initial={{ x: 300, opacity: 0 }} // Start from the right off-screen
        whileInView={{ x: 0, opacity: 1 }} // Animate to normal position when in view
        transition={{ duration: 1 }}
        viewport={{ once: true }} // This ensures the animation triggers only once when entering the viewport
      >
        <GeneralNotice />
      </motion.div>
    </div>
  );
}
