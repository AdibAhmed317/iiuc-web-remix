import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import '@mantine/carousel/styles.css'; // Ensure this import is present

import c1 from '~/assets/images/carousel/c1.jpeg';
import c2 from '~/assets/images/carousel/c2.jpeg';
import c3 from '~/assets/images/carousel/c3.jpeg';
import c4 from '~/assets/images/carousel/c4.jpeg';
import c5 from '~/assets/images/carousel/c5.jpeg';
import c6 from '~/assets/images/carousel/c6.jpeg';
import c7 from '~/assets/images/carousel/c7.jpeg';
import c8 from '~/assets/images/carousel/c8.jpeg';
import c9 from '~/assets/images/carousel/c9.jpeg';

export default function CarouselPlugin() {
  const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      withControls
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
      slideSize='100%'
      slideGap='xs'
      controlsOffset='xl'
      controlSize={50}
      nextControlIcon={
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '50%',
          }}
        >
          &gt;
        </div>
      }
      previousControlIcon={
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px',
            borderRadius: '50%',
          }}
        >
          &lt;
        </div>
      }
      classNames={{
        control: 'custom-carousel-control',
        controls: 'custom-carousel-controls',
        indicator: 'custom-carousel-indicator',
        indicators: 'custom-carousel-indicators',
      }}
      styles={{
        control: {
          backgroundColor: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: '2px solid white',
          opacity: 1,
          visibility: 'visible',
          position: 'absolute',
          zIndex: 10,
        },
        indicators: {
          bottom: '10px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
        },
        
        indicator: {
          width: '35px',
          height: '6px',
          backgroundColor: '#c3cacd',
          border: 'none',
          opacity: 1,
          borderRadius: '10px',


        },
      }}
    >
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className='w-full h-full object-cover sm:h-56 md:h-64 lg:h-[80vh]'
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
