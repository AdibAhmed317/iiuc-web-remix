import { Tabs } from '@mantine/core';

export default function GeneralNotice() {
  return (
    <div className='min-h-[70vh] w-full flex flex-col p-4'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-robotoRegular text-4xl text-primaryBlue text-center'>
          Notice
        </h1>
        <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
      </div>
      <Tabs
        color='indigo'
        radius='md'
        defaultValue='admission-menu'
        className='px-10'
      >
        <Tabs.List className='space-x-10'>
          <Tabs.Tab value='admission-menu'>General Notice</Tabs.Tab>
          <Tabs.Tab value='admission-guideline'>Tender Notice</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='admission-menu'>menu tab content</Tabs.Panel>
        <Tabs.Panel value='admission-guideline'>
          guideline tab content
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
