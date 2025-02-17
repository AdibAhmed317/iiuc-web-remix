import { VipCard } from './vip-card';
import { MessageCard } from './message-card';
import chairman from '~/assets/images/vip-message/shamsul.jpg';
import vc from '~/assets/images/vip-message/vc.jpg';
import treasurer from '~/assets/images/vip-message/treasurer.jpg';
import avatar from '~/assets/images/vip-message/avatar.png';
import {
  vc_message,
  provc_message,
  treasurer_message,
} from '~/assets/data/messages';
import { motion } from 'framer-motion';

export default function Message() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center space-y-10 p-4'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-robotoLight text-4xl text-gray-600 text-center'>
          Messages
        </h1>
        <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 items-center'>
        <motion.div
          initial={{ x: -200, opacity: 0 }} // Start from the left off-screen
          whileInView={{ x: 0, opacity: 1 }} // Animate to normal position when in view
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger animation only once when entering the viewport
        >
          <VipCard
            name='A.N.M Shamsul Islam'
            designation='Chairman'
            imgSrc={chairman}
            isChairman={true}
            message=''
          />
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }} // Start from the right off-screen
          whileInView={{ x: 0, opacity: 1 }} // Animate to normal position when in view
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger animation only once when entering the viewport
        >
          <MessageCard />
        </motion.div>
      </div>
      <div className='flex flex-wrap justify-center md:justify-start gap-4'>
        <motion.div
          className='flex-1'
          initial={{ y: 100, opacity: 0 }} // Start from below the screen
          whileInView={{ y: 0, opacity: 1 }} // Animate to normal position when in view
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger animation only once when entering the viewport
        >
          <VipCard
            name='Prof. Dr. Mohammad Ali Azadi'
            designation='Vice Chancellor'
            imgSrc={vc}
            isChairman={false}
            message={vc_message}
          />
        </motion.div>
        <motion.div
          className='flex-1'
          initial={{ y: 100, opacity: 0 }} // Start from below the screen
          whileInView={{ y: 0, opacity: 1 }} // Animate to normal position when in view
          transition={{ duration: 1, delay: 0.3 }} // Add a slight delay for Pro VC
          viewport={{ once: true }} // Trigger animation only once when entering the viewport
        >
          <VipCard
            name='Demo Pro VC Name'
            designation='Pro Vice Chancellor'
            imgSrc={avatar}
            isChairman={false}
            message={provc_message}
          />
        </motion.div>
        <motion.div
          className='flex-1'
          initial={{ y: 100, opacity: 0 }} // Start from below the screen
          whileInView={{ y: 0, opacity: 1 }} // Animate to normal position when in view
          transition={{ duration: 1, delay: 0.6 }} // Add a further delay for Treasurer (in-charge)
          viewport={{ once: true }} // Trigger animation only once when entering the viewport
        >
          <VipCard
            name='Prof. Dr. Muhammad Mahbubur Rahman'
            designation='Treasurer (in-charge)'
            imgSrc={treasurer}
            isChairman={false}
            message={treasurer_message}
          />
        </motion.div>
      </div>
    </div>
  );
}
