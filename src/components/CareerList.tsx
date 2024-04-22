import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './reusable/Loading';
import { ICareer } from '../interfaces';

type Props = {
  careerListings: ICareer[];
};

const CareerList = (props: Props) => {
  const [dataReady, setDataReady] = useState(false);
  const [locationFilter, setLocationFilter] = useState<'All' | 'On Site' | 'Remote' | 'Hybrid'>('All');

  const [typeFilter, setTypeFilter] = useState<'All' | 'Full Time' | 'Part Time' | 'Contract' | 'Internship'>('All');

  const [filteredCareers, setFilteredCareers] = useState<ICareer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    let filteredData = props.careerListings;

    if (locationFilter !== 'All') {
      filteredData = filteredData.filter((career) => career.location === locationFilter);
    }

    if (typeFilter !== 'All') {
      filteredData = filteredData.filter((career) => career.employmentType === typeFilter);
    }

    setTimeout(() => {
      setFilteredCareers(filteredData);
      setLoading(false);
      setDataReady(true);
    }, 500);
  }, [locationFilter, typeFilter, props.careerListings]);

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as 'All' | 'On Site' | 'Remote' | 'Hybrid';
    setLocationFilter(value);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as 'All' | 'Full Time' | 'Part Time' | 'Contract' | 'Internship';
    setTypeFilter(value);
  };

  const renderCareers = () => {
    if (loading) {
      return <Loading />;
    } else if (!loading && dataReady && filteredCareers.length === 0) {
      return (
        <div className='mt-8 w-full text-center'>
          <div className='text-3xl font-semibold text-gray-600'>No Openings Found 😞</div>
          <p className='mt-4 text-lg text-gray-500'>
            We couldn't find any job openings matching your criteria. Please try adjusting your filters or check back
            later.
          </p>
        </div>
      );
    } else if (!loading && dataReady && filteredCareers.length > 0) {
      return (
        <div className='flex w-full flex-col'>
          {filteredCareers.map((career, index) => (
            <div
              key={index}
              className='flex flex-col border-b-2 border-gray-200 py-4 md:flex-row md:items-center'>
              <div className='flex-grow'>
                <Link
                  to={`/careers/` + career.id}
                  className='mb-4 text-lg font-semibold hover:underline md:mb-0 md:text-xl'>
                  {career.title}
                </Link>
              </div>
              <div className='flex w-full items-center justify-between md:w-auto'>
                <div className='mt-2 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
                  <div className='inline-flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                      />
                    </svg>

                    <span className='ml-2 font-medium capitalize text-gray-400'>
                      {career.location.replace(/-/g, ' ')}
                    </span>
                  </div>
                  <div className='inline-flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>

                    <span className='ml-2 font-medium capitalize text-gray-400'>
                      {career.employmentType.replace(/-/g, ' ')}
                    </span>
                  </div>
                </div>
                <Link
                  className='rounded border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white md:ml-4'
                  to={`/careers/` + career.id}>
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className='bg-white mt-16'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Career Openings</h2>
          <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>
            Explore opportunities to become part of our dynamic team.
          </p>
        </div>
        <div className='mx-auto'>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='mb-4 w-full md:mb-8 md:w-1/3 md:pr-2'>
              <div className='relative rounded border border-gray-200 bg-white shadow'>
                <svg
                  className='absolute right-0 top-1/2 mr-5 -translate-y-1/2 transform'
                  width='12'
                  height='8'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>

                <select
                  className='w-full appearance-none rounded border-0 bg-transparent px-4 py-2 leading-6 text-gray-500 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
                  value={locationFilter}
                  onChange={handleLocationChange}>
                  <option value='All'>Location</option>
                  <option value='On Site'>On Site</option>
                  <option value='Remote'>Remote</option>
                  <option value='Hybrid'>Hybrid</option>
                </select>
              </div>
            </div>
            <div className='mb-0 w-full md:mb-8 md:w-1/3 md:pl-2'>
              <div className='relative rounded border border-gray-200 bg-white shadow'>
                <svg
                  className='absolute right-0 top-1/2 mr-5 -translate-y-1/2 transform'
                  width='12'
                  height='8'
                  viewBox='0 0 12 8'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                  />
                </svg>
                <select
                  className='w-full appearance-none rounded border-0 bg-transparent px-4 py-2 leading-6 text-gray-500 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
                  value={typeFilter}
                  onChange={handleTypeChange}>
                  <option value='All'>Type</option>
                  <option value='Full Time'>Full Time</option>
                  <option value='Part Time'>Part Time</option>
                  <option value='Internship'>Internship</option>
                </select>
              </div>
            </div>
            {renderCareers()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerList;
