'use client';

import { PaginationProps } from '@/types';
import CustomButton from './CustomButton';

const ShowMore = ({ pageNumber, isNext, setLimit }: PaginationProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 8;

    console.log(newLimit);
    setLimit(newLimit);
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
