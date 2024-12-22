import { Tabs } from '@mantine/core';

const notices = [
  {
    title: 'Holiday Notice',
    date: 'December 20, 2024',
    content:
      'The office will remain closed on December 25, 2024, in observance of the Christmas holiday.',
  },
  {
    title: 'New Year Schedule',
    date: 'December 18, 2024',
    content:
      'The office will have adjusted working hours on January 1, 2025. Please plan accordingly.',
  },
  {
    title: 'Staff Meeting Notice',
    date: 'December 15, 2024',
    content:
      'A staff meeting will be held on December 22, 2024, at 10:00 AM in the conference room.',
  },
];

export default function GeneralNotice() {
  return (
    <div className='min-h-[50vh] md:min-h-[70vh] w-full flex flex-col p-4'>
      <div className='shadow-xl rounded-xl min-h-[50vh] md:min-h-[70vh] py-5 bg-white'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-robotoRegular text-4xl text-primaryBlue text-center'>
            Notice
          </h1>
          <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
        </div>
        <Tabs
          color='indigo'
          radius='md'
          defaultValue='general-notice'
          className='px-10'
        >
          <Tabs.List>
            <Tabs.Tab value='general-notice'>General Notice</Tabs.Tab>
            <Tabs.Tab value='tender-notice'>Tender Notice</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value='general-notice'>
            <div className='space-y-4 my-4'>
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'
                >
                  <h3 className='font-semibold text-xl text-primaryBlue'>
                    {notice.title}
                  </h3>
                  <p className='text-sm text-gray-500'>{notice.date}</p>
                  <p className='mt-2 text-gray-700'>{notice.content}</p>
                </div>
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value='tender-notice'>
            <div className='space-y-4 my-4'>
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className='bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300'
                >
                  <h3 className='font-semibold text-xl text-primaryBlue'>
                    {notice.title}
                  </h3>
                  <p className='text-sm text-gray-500'>{notice.date}</p>
                  <p className='mt-2 text-gray-700'>{notice.content}</p>
                </div>
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
