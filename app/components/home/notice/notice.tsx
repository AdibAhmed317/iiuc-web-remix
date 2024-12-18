import React from 'react';
import AdmissionNotice from './admission-notice';
import GeneralNotice from './general-notice';

export default function Notice() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center my-0 md:my-20'>
      <div className='flex-1'>
        <AdmissionNotice />
      </div>
      <div className='flex-1'>
        <GeneralNotice />
      </div>
    </div>
  );
}
