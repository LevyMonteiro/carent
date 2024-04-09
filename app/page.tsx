'use client';
import {
  CarCard,
  CustomFilter,
  Hero,
  SearchBar,
  ShowLess,
  ShowMore,
} from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from './constants';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  //  search states
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  // filter states
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2023);

  // pagination states
  const [limit, setLimit] = useState(8);

  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year,
        fuel: fuel || '',
        limit: limit || 8,
        model: model || '',
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, manufacturer, model, limit]);

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className='home__filter-container'>
            <CustomFilter options={fuels} setFilter={setFuel} />
            <CustomFilter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car: CarProps) => (
                <CarCard
                  car={car}
                  key={
                    car.model +
                    car.city_mpg +
                    car.displacement +
                    car.cylinders +
                    car.year +
                    car.highway_mpg +
                    car.combination_mpg
                  }
                />
              ))}
            </div>
            {loading && (
              <div className='mt-16 w-full felx-center'>
                <Image
                  src='/loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 8}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />

            <ShowLess
              pageNumber={limit / 8}
              isNext={limit <= 8}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}
      </div>
    </main>
  );
}
