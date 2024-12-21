// import React from 'react';
// import { VipCard } from './vip-card';
// import { MessageCard } from './message-card';
// import chairman from '~/assets/images/vip-message/shamsul.jpg';

// export default function Message() {
//   return (
//     <div className='h-full w-full flex flex-col justify-center items-center space-y-10'>
//       <div className='flex flex-col md:flex-row space-x-0 sm:space-x-10'>
//         <VipCard
//           name='A.N.M Shamsul Islam'
//           designation='Chairman'
//           imgSrc={chairman}
//         />
//         <MessageCard />
//       </div>
//       <div className='flex flex-col md:flex-row space-x-0 md:space-x-8'>
//         <VipCard
//           name='Demo VC Name'
//           designation='Vice Chancellor'
//           imgSrc={chairman}
//         />
//         <VipCard
//           name='Demo Pro VC Name'
//           designation='Pro Vice Chancellor'
//           imgSrc={chairman}
//         />
//         <VipCard
//           name='Demo Treasurer Name'
//           designation='Treasurer'
//           imgSrc={chairman}
//         />
//       </div>
//     </div>
//   );
// }

import { VipCard } from './vip-card';
import { MessageCard } from './message-card';
import chairman from '~/assets/images/vip-message/shamsul.jpg';

export default function Message() {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center space-y-10 p-4'>
      <div className='flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 items-center'>
        <VipCard
          name='A.N.M Shamsul Islam'
          designation='Chairman'
          imgSrc={chairman}
        />
        <MessageCard />
      </div>
      <div className='flex flex-wrap justify-center md:justify-start gap-4'>
        <VipCard
          name='Demo VC Name'
          designation='Vice Chancellor'
          imgSrc={chairman}
        />
        <VipCard
          name='Demo Pro VC Name'
          designation='Pro Vice Chancellor'
          imgSrc={chairman}
        />
        <VipCard
          name='Demo Treasurer Name'
          designation='Treasurer'
          imgSrc={chairman}
        />
      </div>
    </div>
  );
}
