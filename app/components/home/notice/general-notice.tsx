import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

export default function GeneralNotice() {
  return (
    <div className='min-h-[70vh] w-full flex flex-col items-center sm:items-center justify-center p-4'>
      <h1 className='font-robotoRegular text-4xl text-primaryBlue'>Notice</h1>
      <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
      <Card className='w-full max-w-4xl shadow-lg'>
        <CardContent className='p-6'>
          <Tabs defaultValue='general-notice' className='w-full'>
            <TabsList className='flex flex-wrap justify-start gap-2 mb-6 bg-transparent'>
              <TabsTrigger
                value='general-notice'
                className='px-3 py-2 text-sm sm:text-base whitespace-nowrap hover:bg-primaryGray/60 data-[state=active]:bg-black/10'
              >
                General Notice
              </TabsTrigger>
              <TabsTrigger
                value='tenders'
                className='px-3 py-2 text-sm sm:text-base whitespace-nowrap hover:bg-primaryGray/60 data-[state=active]:bg-black/10'
              >
                Tenders
              </TabsTrigger>
            </TabsList>

            <div className='bg-white rounded-lg p-4 mt-24 md:mt-0'>
              <TabsContent
                value='general-notice'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
                  Admission Menu
                </h2>
                <div className='space-y-4'>
                  <p className='text-gray-600'>
                    Make changes to your account here. This section contains
                    important information about the admission process.
                  </p>
                  {/* Add more content here */}
                </div>
              </TabsContent>

              <TabsContent
                value='tenders'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
                  Contact Information
                </h2>
                <div className='space-y-4'>
                  <p className='text-gray-600'>
                    Get in touch with our admission office for any queries or
                    concerns.
                  </p>
                  {/* Add more content here */}
                </div>
              </TabsContent>

              <TabsContent
                value='admission-faq'
                className='min-h-[300px] sm:min-h-[400px] p-4 animate-in fade-in-50'
              >
                <h2 className='text-xl sm:text-2xl font-semibold mb-4'>
                  Frequently Asked Questions
                </h2>
                <div className='space-y-4'>
                  <p className='text-gray-600'>
                    Find answers to commonly asked questions about our admission
                    process.
                  </p>
                  {/* Add more content here */}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
