import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';
import n1 from '~/assets/images/news/n1.jpeg';
import n2 from '~/assets/images/news/n2.jpeg';
import n3 from '~/assets/images/news/n3.jpeg';
import n4 from '~/assets/images/news/n4.jpeg';
import n5 from '~/assets/images/news/n5.jpeg';
import n6 from '~/assets/images/news/n6.jpeg';

export default function NewsSection() {
  // Animation variants for the main section
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  // Array of articles
  const articles = [
    {
      imageUrl: n1,
      title: 'প্রাক্তন ছাত্র অ্যাডভোকেট সাইফুলকে খুনের ঘটনায় আইআইইউসির নিন্দা',
      description:
        'This article covers the international seminar held at IIUC, focusing on sustainable development practices in education and society.',
    },
    {
      imageUrl: n2,
      title:
        'আইআইইউসি&apos;র প্রাক্তন ছাত্র এডভোকেট সাইফুলের নৃশংস মৃত্যুতে ভিসি ট্রাস্ট সদস্যদের শোক প্রকাশ',
      description: '',
    },
    {
      imageUrl: n3,
      title: 'গুণগত শিক্ষার সাথে প্রকৌশলীদের নৈতিকতার জ্ঞানার্জন করতে হবে',
      description: '',
    },
    {
      imageUrl: n4,
      title: 'দৈনিক পূর্বকোণ আইআইইউসি এর সিএসই স্পোর্টস উইক সম্পন্ন',
      description: '',
    },
    {
      imageUrl: n4,
      title: 'দৈনিক পূর্বকোণ আইআইইউসি এর সিএসই স্পোর্টস উইক সম্পন্ন',
      description: '',
    },
    {
      imageUrl: n5,
      title: 'দৈনিক আজাদী - আইআইইউসি এর সিএসই স্পোর্টস উইক সম্পন্ন',
      description: '',
    },
    {
      imageUrl: n6,
      title: 'আইআইইউসি বিজনেস ক্লাবের দক্ষতা উন্নয়ন কর্মশালা।',
      description: '',
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-robotoLight text-4xl text-gray-600 text-center'>
          Latest News & Events
        </h1>
        <span className='bg-primaryBlue w-10 h-[3px] my-5'></span>
      </div>
      <Link
        className='ml-auto inline-block text-blue-600 hover:text-blue-800'
        to='/'
      >
        View All News
      </Link>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-12 gap-5 mt-10'
        initial='hidden'
        whileInView='visible'
        variants={fadeInVariants}
        viewport={{ once: true }}
      >
        {/* First slightly smaller big article */}
        <div className='sm:col-span-5 lg:col-span-5 border-[#C8D9E6] border-[0.5px] rounded-lg overflow-hidden p-5 bg-white'>
          {articles.slice(0, 1).map((item, index) => (
            <motion.div
              key={index}
              className='relative'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }} // This ensures the animation triggers only once when entering the viewport
            >
              <a href='#'>
                <div
                  className='h-64 bg-cover text-center overflow-hidden'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '256px', // Slightly reduced height for the big article
                  }}
                  title='Article Image'
                ></div>
              </a>
              <a
                href='#'
                className='text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out'
              >
                {item.title}
              </a>
              <p className='text-lg text-gray-600'>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Other smaller articles in 3 columns */}
        <div className='sm:col-span-8 lg:col-span-6 grid grid-cols-3 gap-5 '>
          {articles.slice(1).map((item, index) => (
            <motion.div
              key={index}
              className='relative border-[#C8D9E6] border-[0.5px] rounded-lg p-2 overflow-hidden bg-white'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
              viewport={{ once: true }} // This ensures the animation triggers only once when entering the viewport
            >
              <a href='#'>
                <div
                  className='h-40 bg-cover text-center'
                  style={{
                    backgroundImage: `url(${item.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '160px',
                  }}
                  title='Article Image'
                ></div>
              </a>
              <a
                href='#'
                className='text-gray-900 inline-block font-semibold text-sm my-2 hover:text-indigo-600 transition duration-500 ease-in-out'
              >
                {item.title}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
