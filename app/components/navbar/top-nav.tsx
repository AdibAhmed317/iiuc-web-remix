import { Link } from '@remix-run/react';

export default function TopNav() {
  return (
    <nav className='min-h-10 bg-primaryBlue text-yellow-600 flex justify-center items-center px-20 py-3 space-x-5 md:space-x-10'>
      <Link
        to='https://www.iiuc.ac.bd/login'
        target='_blank'
        className='bg-yellow-600 p-2 text-black hover:scale-110 transition-all h-8 sm:h-10 w-28 flex justify-center items-center text-xs sm:text-sm rounded-md font-robotoBlack'
      >
        Login
      </Link>
      <Link
        to='https://hrd.iiuc.ac.bd/login'
        target='_blank'
        className='bg-yellow-600 p-2 text-black hover:scale-110 transition-all h-8 sm:h-10 w-28 flex justify-center items-center text-xs sm:text-sm rounded-md font-robotoBlack'
      >
        HR Login
      </Link>
      <Link
        to=''
        className='bg-yellow-600 p-2 text-black hover:scale-110 transition-all h-8 sm:h-10 w-28 flex justify-center items-center text-xs sm:text-sm rounded-md font-robotoBlack'
      >
        Transport
      </Link>
    </nav>
  );
}
