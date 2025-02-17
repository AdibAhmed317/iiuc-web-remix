import { Tabs } from '@mantine/core';
import { FaCalendarAlt, FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function AdmissionNotice() {
  return (
    <div className='w-full flex flex-col p-4'>
      <div className='shadow-xl rounded-xl min-h-[50vh] md:min-h-[70vh] py-5 bg-[#C8D9E6]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-robotoRegular text-xl sm:text-2xl md:text-4xl text-primaryBlue text-center'>
            Admission News
          </h1>
          <span className='bg-primaryBlue w-10 h-[3px] my-3 sm:my-5'></span>
        </div>
        <Tabs
          color='indigo'
          radius='md'
          defaultValue='admission-menu'
          className='px-5 sm:px-10'
        >
          <Tabs.List>
            <Tabs.Tab value='admission-menu' className='text-xs sm:text-sm'>
              Admission Menu
            </Tabs.Tab>
            <Tabs.Tab
              value='admission-guideline'
              className='text-xs sm:text-sm'
            >
              Guideline
            </Tabs.Tab>
            <Tabs.Tab value='admission-contact' className='text-xs sm:text-sm'>
              Contact
            </Tabs.Tab>
            <Tabs.Tab value='admission-faq' className='text-xs sm:text-sm'>
              FAQ
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='admission-menu'>
            <h2 className='text-lg sm:text-xl md:text-2xl font-semibold my-3 sm:my-4'>
              Admission Menu
            </h2>
            <div className='flex flex-wrap gap-3 sm:gap-4'>
              {[
                'Apply Online',
                'Admission Advertisement',
                'Instruction for Admission',
                'Print Admit Card',
                'Print Admission Form',
                'Print Offer Letter',
                'Admission Result',
              ].map((text) => (
                <button
                  key={text}
                  className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-xs sm:text-sm p-1 sm:p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'
                >
                  {text}
                </button>
              ))}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value='admission-guideline'>
            <h2 className='text-lg sm:text-xl font-semibold my-3 sm:my-4'>
              Video Instruction
            </h2>
            <div className='flex justify-start items-center'>
              <iframe
                src='https://www.youtube.com/embed/LhvJYG3DUz8?ecver=2'
                allowFullScreen
                allow='autoplay; encrypted-media'
                className='w-[300px] sm:w-[380px] h-[180px] sm:h-[250px]'
              ></iframe>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value='admission-contact'>
            <h2 className='text-lg sm:text-xl font-semibold my-3 sm:my-4'>
              Contact Information
            </h2>
            <div className='space-y-4 sm:space-y-6 text-sm sm:text-base'>
              <div className='grid gap-3 sm:gap-4 md:grid-cols-2'>
                <div>
                  <h3 className='text-base sm:text-lg font-semibold'>
                    University Address
                  </h3>
                  <p>International Islamic University Chittagong</p>
                  <p>Kumira, Chittagong-4318, Bangladesh</p>
                </div>
                <div>
                  <h3 className='text-base sm:text-lg font-semibold'>
                    General Contact
                  </h3>
                  {[
                    { icon: FaCalendarAlt, text: 'IP Tel: +8809613230505' },
                    { icon: FaClock, text: 'Tel: +8802334461900-7' },
                    { icon: FaEnvelope, text: 'Fax: +8802334461930' },
                    { icon: FaPhoneAlt, text: 'Email: info@iiuc.ac.bd' },
                  ].map(({ icon: Icon, text }, i) => (
                    <p key={i} className='flex items-center gap-2'>
                      <Icon className='h-4 w-4' />
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value='admission-faq'>
            <h2 className='text-lg sm:text-xl font-semibold my-3 sm:my-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-sm sm:text-base'>Coming soon...</p>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
