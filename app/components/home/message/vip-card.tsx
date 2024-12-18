import { VipCardProps } from '@/lib/types';
import Image from 'next/image';

export const VipCard: React.FC<VipCardProps> = ({
  name,
  designation,
  imgSrc,
}) => {
  return (
    <div className='h-96 w-80 flex flex-col justify-center items-center shadow-2xl hover:shadow-xl transition-all rounded-md'>
      <Image src={imgSrc} alt={`${name}'s photo`} className='px-10' />
      <h1 className='text-sm font-serif my-2'>{name}</h1>
      <h1 className='text-sm font-robotoBlack'>{designation}</h1>
    </div>
  );
};
