import { Tabs } from '@mantine/core';
import { FaCalendarAlt, FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function AdmissionNotice() {
  return (
    <div className='w-full flex flex-col p-4'>
      <div className='shadow-xl rounded-xl min-h-[50vh] md:min-h-[70vh] py-5 bg-[#C8D9E6]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-robotoRegular text-2xl md:text-4xl text-primaryBlue text-center'>
            Admission News
          </h1>
          <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
        </div>
        <Tabs
          color='indigo'
          radius='md'
          defaultValue='admission-menu'
          className='px-10'
        >
          <Tabs.List>
            <Tabs.Tab value='admission-menu' className='hover:bg-bg-[#F5EFEB]'>
              Admission Menu
            </Tabs.Tab>
            <Tabs.Tab
              value='admission-guideline'
              className='hover:bg-bg-[#F5EFEB]'
            >
              Admission Guideline
            </Tabs.Tab>
            <Tabs.Tab
              value='admission-contact'
              className='hover:bg-bg-[#F5EFEB]'
            >
              Admission Contact
            </Tabs.Tab>
            <Tabs.Tab value='admission-faq' className='hover:bg-bg-[#F5EFEB]'>
              Admission FAQ
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='admission-menu'>
            <h2 className='text-xl sm:text-2xl font-semibold my-4'>
              Admission Menu
            </h2>
            <div className='flex flex-wrap gap-4'>
              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Apply Online
              </button>
              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Admission Advertisement
              </button>
              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Instruction for Admission
              </button>
              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Print Admit Card
              </button>
              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Print Admission Form
              </button>
              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Print Offer Letter
              </button>

              <button className='flex justify-center items-center bg-[#F5EFEB] border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl text-sm p-2 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                Admission Result
              </button>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value='admission-guideline'>
            <h2 className='text-xl sm:text-2xl font-semibold my-4'>
              Video Instruction
            </h2>
            <div className='flex justify-start items-center'>
              <iframe
                src='https://www.youtube.com/embed/LhvJYG3DUz8?ecver=2'
                // width='480'
                // height='300'
                allowFullScreen
                allow='autoplay; encrypted-media'
                className='w-[380px] h-[250px]'
              ></iframe>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value='admission-contact'>
            <h2 className='text-2xl font-semibold my-4'>Contact Information</h2>
            <div className='space-y-6'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='space-y-2'>
                  <h3 className='text-lg font-semibold'>University Address</h3>
                  <p>International Islamic University Chittagong</p>
                  <p>Kumira, Chittagong-4318, Bangladesh</p>
                </div>

                <div className='space-y-2'>
                  <h3 className='text-lg font-semibold'>General Contact</h3>
                  <p className='flex items-center gap-2'>
                    <FaCalendarAlt className='h-4 w-4' />
                    IP Tel: +8809613230505
                  </p>
                  <p className='flex items-center gap-2'>
                    <FaClock className='h-4 w-4' />
                    Tel: +8802334461900-7
                  </p>
                  <p className='flex items-center gap-2'>
                    <FaEnvelope className='h-4 w-4' />
                    Fax: +8802334461930
                  </p>
                  <p className='flex items-center gap-2'>
                    <FaPhoneAlt className='h-4 w-4' />
                    Email: info@iiuc.ac.bd
                  </p>
                </div>
              </div>

              <div className='border-t pt-4'>
                <h3 className='text-xl font-semibold mb-3'>
                  For Admission Related Query
                </h3>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <p className='flex items-center gap-2'>
                      <FaCalendarAlt className='h-4 w-4' />
                      Tel: +8802334461900-7 Ext. 317, 390
                    </p>
                    <p className='flex items-center gap-2'>
                      <FaClock className='h-4 w-4' />
                      Mobile No: 01720478621, 01844072000
                    </p>
                    <p className='flex items-center gap-2'>
                      <FaEnvelope className='h-4 w-4' />
                      MBA/MBM: 01817356400
                    </p>
                  </div>
                  <div className='space-y-2'>
                    <p className='flex items-center gap-2'>
                      <FaPhoneAlt className='h-4 w-4' />
                      Office hours: 08:30 AM to 04:00 PM
                    </p>
                    <p className='flex items-center gap-2'>
                      <FaCalendarAlt className='h-4 w-4' />
                      Weekly Holiday: Thursday & Friday
                    </p>
                    <p className='flex items-center gap-2'>
                      <FaEnvelope className='h-4 w-4' />
                      Email Address: acad@iiuc.ac.bd
                    </p>
                  </div>
                </div>
              </div>

              <p className='text-sm text-gray-500 italic'>
                Note: Mobile numbers remain open during office hours only.
              </p>
            </div>
          </Tabs.Panel>
          <Tabs.Panel value='admission-faq'>faq tab content</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}

//                 <h2 className='text-2xl font-semibold mb-4'>
//                   Frequently Asked Questions
//                 </h2>
//                 <div className='space-y-4'>
//                   <Accordion type='single' collapsible className='w-full'>
//                     <AccordionItem value='item-1'>
//                       <AccordionTrigger>
//                         Is there any option for direct admission without sitting
//                         an exam?
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         No. There is no option for admission without a sitting
//                         exam. For admission, you need to submit an application
//                         and sit an exam. If you pass the exam and are selected
//                         in the shortlist, then you can be admitted to this
//                         University.
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value='item-2'>
//                       <AccordionTrigger>
//                         What type of exam will be held? Written or Viva?
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         Exams will be held on Written as well as Viva.
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value='item-3'>
//                       <AccordionTrigger>
//                         What is the syllabus for the admission exam?
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         The syllabus covers your SSC and HSC topics. Generally,
//                         it includes Bangla, English, Group Subject, and General
//                         Knowledge.
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value='item-4'>
//                       <AccordionTrigger>
//                         Is it possible to transfer credits from other
//                         Universities?
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         Yes. It is possible to be admitted by Credit Transfer
//                         from other Universities. Courses which have a grade
//                         greater than B or equivalent will be accepted by the
//                         course equivalency committee.
//                       </AccordionContent>
//                     </AccordionItem>
//                     <AccordionItem value='item-5'>
//                       <AccordionTrigger>
//                         How much does it cost to submit an application?
//                       </AccordionTrigger>
//                       <AccordionContent>
//                         The application fee for Bachelor and Master Programs is
//                         520 Tk by bKash. The PGDLIS Application Fee is 320 Tk.
//                       </AccordionContent>
//                     </AccordionItem>
//                   </Accordion>
