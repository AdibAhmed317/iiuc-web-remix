import { useEffect, useState, useRef } from 'react';
import { animate, motion } from 'framer-motion';
import counterBg from '~/assets/images/counter-bg.png';

interface AnimatedNumberProps {
  from: number;
  to: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  from,
  to,
  duration = 2,
}) => {
  const [currentValue, setCurrentValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (value) => setCurrentValue(Math.round(value)),
    });
    return () => controls.stop();
  }, [from, to, duration]);

  return (
    <motion.span
      style={{ fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
    >
      {currentValue.toLocaleString()}
    </motion.span>
  );
};

export default function NumberSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: isInView ? 1 : 0 }} // Fade in when in view
      transition={{ duration: 1 }}
      className='bg-black/85 mt-10 flex justify-center items-center'
      style={{
        backgroundImage: `url(${counterBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
      }}
    >
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* First Column */}
        <div className='flex flex-col justify-center items-center'>
          <section className='text-2xl sm:text-3xl font-bold text-white text-center'>
            {isInView && <AnimatedNumber from={0} to={3000} />}+
          </section>
          <section className='text-sm sm:text-lg text-white text-center'>
            FOREIGN STUDENTS
          </section>
        </div>

        {/* Second Column */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white text-center'>
            {isInView && <AnimatedNumber from={0} to={13} />}+
          </h1>
          <h1 className='text-sm sm:text-lg text-white text-center'>
            DEGREES OFFERED
          </h1>
        </div>

        {/* Third Column */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white text-center'>
            {isInView && <AnimatedNumber from={0} to={60000} />}+
          </h1>
          <h1 className='text-sm sm:text-lg text-white text-center'>
            STUDENTS ENROLLED
          </h1>
        </div>

        {/* Fourth Column */}
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white text-center'>
            {isInView && <AnimatedNumber from={0} to={317} />}+
          </h1>
          <h1 className='text-sm sm:text-lg text-white text-center'>
            REGULAR FACULTY
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
