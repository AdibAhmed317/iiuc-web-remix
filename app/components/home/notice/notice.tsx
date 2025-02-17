import { motion } from 'framer-motion';
import AdmissionNotice from './admission-notice';
import GeneralNotice from './general-notice';

export default function Notice() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-0 md:my-20 px-5 md:px-40'>
      <motion.div
        className='flex-1'
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <AdmissionNotice />
      </motion.div>
      <motion.div
        className='flex-1'
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <GeneralNotice />
      </motion.div>
    </div>
  );
}
