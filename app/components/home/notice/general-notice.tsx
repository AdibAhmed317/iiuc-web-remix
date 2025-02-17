export default function GeneralNotice() {
  return (
    <div className='w-full flex flex-col p-4'>
      <div className='shadow-xl rounded-xl min-h-[50vh] md:min-h-[70vh] py-5 bg-[#E8F5E9]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-robotoRegular text-xl sm:text-2xl md:text-4xl text-green-700 text-center'>
            General Notices
          </h1>
          <span className='bg-green-700 w-10 h-[3px] my-3 sm:my-5'></span>
        </div>
        <div className='p-4 sm:p-6 space-y-3 sm:space-y-4'>
          {[
            'Class schedules for Spring 2025 have been updated.',
            'New library books available for research students.',
            'Application deadline for scholarships extended to March 15.',
            'Annual university fest registrations are open.',
            'Hostel allocation results will be published soon.',
          ].map((notice, index) => (
            <div
              key={index}
              className='p-3 sm:p-4 bg-white rounded-lg shadow-md border-l-4 border-green-700'
            >
              <p className='text-sm sm:text-lg font-semibold'>{notice}</p>
              <p className='text-xs sm:text-sm text-gray-600'>
                Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
