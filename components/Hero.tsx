'use client';
import Image from 'next/image';
import CustomButton from './CustomButton';

export default function Hero() {
  function handleScroll() {}

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Find, Book or rent a car — quickly and easily
        </h1>

        <p className='hero__subtitle'>
          Streamline your car rental experience with our booking process.
        </p>

        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            src='/hero.webp'
            alt='hero'
            fill
            className='object-contain transform scale-x-[-1]'
          />
          <div className='hero__image-overlay'> </div>
        </div>
      </div>
    </div>
  );
}
