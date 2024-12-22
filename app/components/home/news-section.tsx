import { Link } from '@remix-run/react';
import { motion } from 'framer-motion';

export default function NewsSection() {
  // Animation variants for the main section
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  // Array of articles
  const articles = [
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: 'Trump Steps Back Into Coronavirus Spotlight',
      description:
        'In this article, we explore how President Trump’s approach to the coronavirus pandemic is impacting his re-election campaign.',
    },
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: "How Trump's Mistakes Became Biden's Big Breaks",
      description: '',
    },
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: "Survey: Many Americans 'Dissatisfied' With U.S.",
      description: '',
    },
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: "How Trump's Mistakes Became Biden's Big Breaks",
      description: '',
    },
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/07/American-Flag.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: "Survey: Many Americans 'Dissatisfied' With U.S.",
      description: '',
    },
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: 'Trump Steps Back Into Coronavirus Spotlight',
      description: '',
    },
    {
      imageUrl:
        'https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&amp;w=364&amp;h=204&amp;crop=1',
      title: 'Trump Steps Back Into Coronavirus Spotlight',
      description: '',
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-robotoRegular text-2xl md:text-4xl text-primaryBlue text-center'>
          Latest News
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
        <div className='sm:col-span-5 lg:col-span-5'>
          {articles.slice(0, 1).map((item, index) => (
            <motion.div
              key={index}
              className='relative'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
        <div className='sm:col-span-8 lg:col-span-6 grid grid-cols-3 gap-5'>
          {articles.slice(1).map((item, index) => (
            <motion.div
              key={index}
              className='relative'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.2 }}
            >
              <a href='#'>
                <div
                  className='h-40 bg-cover text-center overflow-hidden'
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
                className='text-gray-900 inline-block font-semibold text-md my-2 hover:text-indigo-600 transition duration-500 ease-in-out'
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
