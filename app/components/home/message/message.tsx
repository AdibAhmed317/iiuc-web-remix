import { VipCard } from './vip-card';
import { MessageCard } from './message-card';
import chairman from '~/assets/images/vip-message/shamsul.jpg';
import treasurer from '~/assets/images/vip-message/treasurer.jpg';
import {
  vc_message,
  provc_message,
  treasurer_message,
} from '~/assets/data/messages';

export default function Message() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center space-y-10 p-4'>
      <div className='flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 items-center'>
        <VipCard
          name='A.N.M Shamsul Islam'
          designation='Chairman'
          imgSrc={chairman}
          isChairman={true}
          message=''
        />
        <MessageCard />
      </div>
      <div className='flex flex-wrap justify-center md:justify-start gap-4'>
        <VipCard
          name='Demo VC Name'
          designation='Vice Chancellor'
          imgSrc={chairman}
          isChairman={false}
          message={vc_message}
        />
        <VipCard
          name='Demo Pro VC Name'
          designation='Pro Vice Chancellor'
          imgSrc={chairman}
          isChairman={false}
          message={provc_message}
        />
        <VipCard
          name='Prof. Dr. Muhammad Mahbubur Rahman'
          designation='Treasurer (in-charge)'
          imgSrc={treasurer}
          isChairman={false}
          message={treasurer_message}
        />
      </div>
    </div>
  );
}
