// import { VipCardProps } from 'lib/types';

// export const VipCard: React.FC<VipCardProps> = ({
//   name,
//   designation,
//   imgSrc,
// }) => {
//   return (
//     <div className='h-96 w-80 flex flex-col justify-center items-center shadow-2xl hover:shadow-xl transition-all rounded-md'>
//       <img src={imgSrc} alt={`${name}'s photo`} className='px-10' />
//       <h1 className='text-sm font-serif my-2'>{name}</h1>
//       <h1 className='text-sm font-robotoBlack'>{designation}</h1>
//     </div>
//   );
// };

import { VipCardProps } from 'lib/types';

export const VipCard: React.FC<VipCardProps> = ({
  name,
  designation,
  imgSrc,
}) => {
  return (
    <div className='h-96 w-full sm:w-80 flex flex-col justify-center items-center shadow-2xl hover:shadow-xl transition-all rounded-md bg-white p-4'>
      <img
        src={imgSrc}
        alt={`${name}'s photo`}
        className='w-32 h-32 rounded-full object-cover'
      />
      <h1 className='text-sm font-serif my-2 text-center'>{name}</h1>
      <h1 className='text-sm font-robotoBlack text-center'>{designation}</h1>
    </div>
  );
};
