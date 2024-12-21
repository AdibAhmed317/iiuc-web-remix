import { useEffect, useState } from 'react';
import counterBg from '~/assets/images/counter-bg.png';

export default function NumberSection() {
  const [foreignStudents, setForeignStudents] = useState(0);
  const [degreesOffered, setDegreesOffered] = useState(0);
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);
  const [regularFaculty, setRegularFaculty] = useState(0);

  const animateCount = (
    target: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let start = 0;
    const duration = 2000; // 2 seconds for animation
    const increment = (target / duration) * 1000; // calculate increment per frame

    const updateCount = () => {
      start += increment;
      if (start >= target) {
        setter(target);
        return;
      }
      setter(Math.floor(start));
      requestAnimationFrame(updateCount);
    };

    updateCount();
  };

  useEffect(() => {
    animateCount(3000, setForeignStudents);
    animateCount(13, setDegreesOffered);
    animateCount(60000, setStudentsEnrolled);
    animateCount(317, setRegularFaculty);
  }, []);

  return (
    <div
      className='bg-black/85 mt-10 flex justify-center items-center'
      style={{
        backgroundImage: `url(${counterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
      }}
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-16'>
        {/* First Column */}
        <div className='flex flex-col justify-center items-center space-y-4'>
          <section className='text-2xl sm:text-3xl font-bold text-white'>
            {foreignStudents}+
          </section>
          <section className='text-sm sm:text-lg text-white'>
            FOREIGN STUDENTS
          </section>
        </div>

        {/* Second Column */}
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white'>
            {degreesOffered}+
          </h1>
          <h1 className='text-sm sm:text-lg text-white'>DEGREES OFFERED</h1>
        </div>

        {/* Third Column */}
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white'>
            {studentsEnrolled}+
          </h1>
          <h1 className='text-sm sm:text-lg text-white'>STUDENTS ENROLLED</h1>
        </div>

        {/* Fourth Column */}
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white'>
            {regularFaculty}+
          </h1>
          <h1 className='text-sm sm:text-lg text-white'>REGULAR FACULTY</h1>
        </div>
      </div>
    </div>
  );
}
