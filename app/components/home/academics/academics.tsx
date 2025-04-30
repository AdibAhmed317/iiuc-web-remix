import ug from '~/assets/images/academics/ug.jpg';
import grr from '~/assets/images/academics/grr.jpg';
import int from '~/assets/images/academics/int.jpg';
import dep from '~/assets/images/academics/dep.jpg';
export default function AcademicsSection() {
  const researchItems = [
    {
      title: 'Undergraduate Studies',
      subtitle:
        'The university offers undergraduate programs in 16 disciplines tailored to the needs of the modern world',
      image: ug,
      link: '/research/faculty',
    },
    {
      title: 'Graduate Studies',
      subtitle:
        'The university offers several postgraduate academic degrees tailored to address emerging issues and future challenges.',
      image: grr,
      link: '/research/highlights',
    },
    {
      title: 'International Students',
      subtitle:
        'We encourage diversity, irrespective of race, gender, and ethnicity, and welcome international students to live here and to experience IIUC life.',
      image: int,
      link: '/research/crp',
    },
    {
      title: 'Faculties and Departments',
      subtitle:
        'Research areas are focused to lead the fourth industrial revolution and address the challenges of the 21st century',
      image: dep,
      link: '/research/areas',
    },
  ];

  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col justify-center items-center mb-5'>
          <h1 className='font-robotoLight text-4xl text-gray-600 text-center'>
            Academics
          </h1>
          <p className='mt-4 text-xl text-gray-500'>
            World-class faculties. Top-quality academic programs. Wide range of
            disciplines.
          </p>
          <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {researchItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              <div className='relative h-64'>
                <img
                  className='w-full h-full object-cover'
                  src={item.image}
                  alt={item.title}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent' />
              </div>

              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <h3 className='text-xl font-bold text-white mb-1'>
                  {item.title}
                </h3>
                <p className='text-gray-200 text-sm'>{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
