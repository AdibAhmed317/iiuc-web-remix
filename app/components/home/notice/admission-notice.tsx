import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, ClockIcon, MailIcon, PhoneIcon } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AdmissionNotice() {
  return (
    <div className='min-h-[70vh] w-full flex flex-col items-center sm:items-center justify-center p-4'>
      <h1 className='font-robotoRegular text-4xl text-primaryBlue'>
        Admission News
      </h1>
      <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
      <Card className='w-full max-w-4xl shadow-lg'>
        <CardContent className='p-6'>
          <Tabs defaultValue='admission-menu' className='w-full'>
            <TabsList className='flex flex-wrap justify-start gap-2 mb-6 bg-transparent'>
              <TabsTrigger
                value='admission-menu'
                className='px-3 py-2 text-sm sm:text-base whitespace-nowrap hover:bg-primaryGray/60 data-[state=active]:bg-black/10'
              >
                Admission Menu
              </TabsTrigger>
              <TabsTrigger
                value='admission-guideline'
                className='px-3 py-2 text-sm sm:text-base whitespace-nowrap hover:bg-primaryGray/60 data-[state=active]:bg-black/10'
              >
                Admission Guideline
              </TabsTrigger>
              <TabsTrigger
                value='admission-contact'
                className='px-3 py-2 text-sm sm:text-base whitespace-nowrap hover:bg-primaryGray/60 data-[state=active]:bg-black/10'
              >
                Admission Contact
              </TabsTrigger>
              <TabsTrigger
                value='admission-faq'
                className='px-3 py-2 text-sm sm:text-base whitespace-nowrap hover:bg-primaryGray/60 data-[state=active]:bg-black/10'
              >
                Admission FAQ
              </TabsTrigger>
            </TabsList>

            <div className='bg-white rounded-lg p-4 mt-24 md:mt-0'>
              <TabsContent
                value='admission-menu'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
                  Admission Menu
                </h2>
                <div className='flex flex-wrap gap-4'>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Apply Online
                  </button>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Admission Advertisement
                  </button>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Instruction for Admission
                  </button>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Print Admit Card
                  </button>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Print Admission Form
                  </button>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Print Offer Letter
                  </button>
                  <button className='flex justify-center items-center bg-primaryGray border text-primaryBlue hover:text-white border-black/[0.1] rounded-xl px-5 py-3 hover:bg-primaryBlue font-robotoLight hover:scale-110 transition-all duration-500 ease-in-out'>
                    Admission Result
                  </button>
                  {/* Add more content here */}
                </div>
              </TabsContent>

              <TabsContent
                value='admission-guideline'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-xl text-center sm:text-2xl font-semibold mb-4'>
                  Video Instruction
                </h2>
                <div className='flex justify-center items-center'>
                  <iframe
                    src='https://www.youtube.com/embed/LhvJYG3DUz8?ecver=2'
                    width='480'
                    height='300'
                    allowFullScreen
                    allow='autoplay; encrypted-media'
                  ></iframe>
                </div>
              </TabsContent>

              <TabsContent
                value='admission-contact'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-2xl font-semibold mb-4'>
                  Contact Information
                </h2>
                <div className='space-y-6'>
                  <div className='grid gap-4 md:grid-cols-2'>
                    <div className='space-y-2'>
                      <h3 className='text-lg font-semibold'>
                        University Address
                      </h3>
                      <p>International Islamic University Chittagong</p>
                      <p>Kumira, Chittagong-4318, Bangladesh</p>
                    </div>

                    <div className='space-y-2'>
                      <h3 className='text-lg font-semibold'>General Contact</h3>
                      <p className='flex items-center gap-2'>
                        <PhoneIcon className='h-4 w-4' />
                        IP Tel: +8809613230505
                      </p>
                      <p className='flex items-center gap-2'>
                        <PhoneIcon className='h-4 w-4' />
                        Tel: +8802334461900-7
                      </p>
                      <p className='flex items-center gap-2'>
                        <PhoneIcon className='h-4 w-4' />
                        Fax: +8802334461930
                      </p>
                      <p className='flex items-center gap-2'>
                        <MailIcon className='h-4 w-4' />
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
                          <PhoneIcon className='h-4 w-4' />
                          Tel: +8802334461900-7 Ext. 317, 390
                        </p>
                        <p className='flex items-center gap-2'>
                          <PhoneIcon className='h-4 w-4' />
                          Mobile No: 01720478621, 01844072000
                        </p>
                        <p className='flex items-center gap-2'>
                          <PhoneIcon className='h-4 w-4' />
                          MBA/MBM: 01817356400
                        </p>
                      </div>
                      <div className='space-y-2'>
                        <p className='flex items-center gap-2'>
                          <ClockIcon className='h-4 w-4' />
                          Office hours: 08:30 AM to 04:00 PM
                        </p>
                        <p className='flex items-center gap-2'>
                          <CalendarIcon className='h-4 w-4' />
                          Weekly Holiday: Thursday & Friday
                        </p>
                        <p className='flex items-center gap-2'>
                          <MailIcon className='h-4 w-4' />
                          Email Address: acad@iiuc.ac.bd
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className='text-sm text-gray-500 italic'>
                    Note: Mobile numbers remain open during office hours only.
                  </p>
                </div>
              </TabsContent>

              <TabsContent
                value='admission-faq'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-2xl font-semibold mb-4'>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-4'>
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value='item-1'>
                      <AccordionTrigger>
                        Is there any option for direct admission without sitting
                        an exam?
                      </AccordionTrigger>
                      <AccordionContent>
                        No. There is no option for admission without a sitting
                        exam. For admission, you need to submit an application
                        and sit an exam. If you pass the exam and are selected
                        in the shortlist, then you can be admitted to this
                        University.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-2'>
                      <AccordionTrigger>
                        What type of exam will be held? Written or Viva?
                      </AccordionTrigger>
                      <AccordionContent>
                        Exams will be held on Written as well as Viva.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-3'>
                      <AccordionTrigger>
                        What is the syllabus for the admission exam?
                      </AccordionTrigger>
                      <AccordionContent>
                        The syllabus covers your SSC and HSC topics. Generally,
                        it includes Bangla, English, Group Subject, and General
                        Knowledge.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-4'>
                      <AccordionTrigger>
                        Is it possible to transfer credits from other
                        Universities?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes. It is possible to be admitted by Credit Transfer
                        from other Universities. Courses which have a grade
                        greater than B or equivalent will be accepted by the
                        course equivalency committee.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value='item-5'>
                      <AccordionTrigger>
                        How much does it cost to submit an application?
                      </AccordionTrigger>
                      <AccordionContent>
                        The application fee for Bachelor and Master Programs is
                        520 Tk by bKash. The PGDLIS Application Fee is 320 Tk.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
