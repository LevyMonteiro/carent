'use client';

import { PaginationProps } from '@/types';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';

const ShowMore = ({ pageNumber, isNext }: PaginationProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 2) * 10;
    const newPathName = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathName);
  };

  return (
    <div className='w-full flex-center gap-5 mt-10 inline'>
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
