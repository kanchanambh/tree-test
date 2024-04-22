import React, { useEffect, useState } from 'react';
import { useParams, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Footer } from '../components';
import { ICareer } from '../interfaces';
import Loading from '../components/reusable/Loading';

const careers: ICareer[] = [
  // {
  //   id: '1',
  //   title: 'Software Engineer',
  //   description: 'Develop and maintain software solutions.',
  //   company: 'Tech Innovations Inc.',
  //   location: 'New York, NY',
  //   department: 'Engineering',
  //   employmentType: 'Full-time',
  //   startingAt: '2024-04-01',
  //   compensationType: 'Salary',
  //   requirements: [
  //     "Bachelor's degree in Computer Science or related field",
  //     '3+ years of software development experience',
  //   ],
  //   qualifications: ['Proficient in JavaScript and Python', 'Experience with React and Node.js'],
  //   benefits: ['Health, dental, and vision insurance', '401(k) plan with company match', 'Unlimited paid time off'],
  //   schedule: ['Monday to Friday', '9am to 5pm'],
  //   status: 'Open',
  //   applicantCount: 25,
  //   createdAt: '2024-01-15',
  //   updatedAt: '2024-01-20',
  // },
];

const getTimePassed = (dateString: string): string => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));

  if (hoursAgo < 24) {
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else {
    const daysAgo = Math.floor(hoursAgo / 24);
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  }
};

const CareerList = () => {
  const [locationFilter, setLocationFilter] = useState<'All' | 'On Site' | 'Remote' | 'Hybrid'>('All');
  const [typeFilter, setTypeFilter] = useState<'All' | 'Full Time' | 'Part Time' | 'Contract' | 'Internship'>('All');
  const [filteredCareers, setFilteredCareers] = useState<ICareer[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataReady, setDataReady] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [resume, setResume] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      const allowedExtensions = ['.pdf', '.doc', '.docx'];
      const fileExtension = selectedFile.name.toLowerCase().slice(-4);

      if (allowedExtensions.includes(fileExtension)) {
        setResume(selectedFile);
      } else {
        console.error('Invalid file extension. Please select a PDF or DOC file.');
        setResume(null);
      }
    } else {
      setResume(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted');
  };

  useEffect(() => {
    setLoading(true);

    let filteredData = careers;

    if (locationFilter !== 'All') {
      filteredData = filteredData.filter((career) => career.location.includes(locationFilter));
    }

    if (typeFilter !== 'All') {
      filteredData = filteredData.filter((career) => career.employmentType === typeFilter);
    }

    setTimeout(() => {
      setFilteredCareers(filteredData);
      setLoading(false);
      setDataReady(true);
    }, 500);
  }, [locationFilter, typeFilter]);

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
      return (
        <div className='w-full mt-8 min-h-[124px] sm:min-h-[112px] flex items-center justify-center'>
          <Loading />;
        </div>
      );
    } else if (!loading && dataReady && filteredCareers.length === 0) {
      return (
        <div className='mt-8 w-full text-center items-center flex flex-col'>
          <div className='mb-4 text-3xl text-gray-900 sm:text-4xl font-bebas tracking-wider'>No Current Listings</div>
          <p className='font-light text-gray-500 sm:text-xl max-w-screen-lg'>
            No listings on our site at this moment. We invite you to check our{' '}
            <a
              href='https://www.indeed.com/cmp/Three-M-Tool-&-Machine'
              target='blank'
              className='text-primary hover:underline font-bold'>
              Indeed page
            </a>{' '}
            or submit your resume directly for future opportunities.
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
                  to={`/careers/${career.id}`}
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
                  className='rounded-md border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-500 hover:bg-primary hover:text-white md:ml-4'
                  to={`/careers/${career.id}`}>
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
    <>
      <section className='bg-white mt-16'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
          <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
            <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Career Openings</h2>
            <p className='font-light text-gray-500 sm:text-xl'>
              Explore opportunities to become part of our dynamic team.
            </p>
          </div>
          <div className='mx-auto'>
            <div className='flex flex-wrap items-center justify-center'>
              <div className='mb-4 w-full md:mb-8 md:w-1/3 md:pr-2'>
                <div className='relative rounded-md border border-gray-200 bg-white shadow'>
                  <select
                    className='w-full appearance-none rounded-md border-0 bg-transparent px-4 py-2 leading-6 text-gray-500 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
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
                <div className='relative rounded-md border border-gray-200 bg-white shadow'>
                  <select
                    className='w-full appearance-none rounded-md border-0 bg-transparent px-4 py-2 leading-6 text-gray-500 outline-none hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50'
                    value={typeFilter}
                    onChange={handleTypeChange}>
                    <option value='All'>Type</option>
                    <option value='Full Time'>Full Time</option>
                    <option value='Part Time'>Part Time</option>
                    <option value='Contract'>Contract</option>
                    <option value='Internship'>Internship</option>
                  </select>
                </div>
              </div>
              {renderCareers()}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Submission */}
      <section className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 lg:px-6 py-8 md:py-16'>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div className='flex flex-col items-center justify-center px-4 lg:col-span-2'>
              <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>
                Don't see a position that fits?
              </h2>
              <p className='font-light text-gray-500 sm:text-xl max-w-screen-lg'>
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </div>

            <div className='rounded-md bg-primary lg:col-span-3'>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col p-4'>
                <h2 className='text-3xl text-white sm:text-4xl font-bebas tracking-wider text-center'>Upload Resume</h2>

                <div className='flex flex-col sm:flex-row w-full gap-4'>
                  <div className='mb-2 w-full'>
                    <label className='font-light text-white sm:text-lg mb-2'>First Name</label>
                    <input
                      className='text-md w-full rounded-md border-gray-200 px-4 py-2 focus:outline-none'
                      placeholder='First Name'
                      type='text'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>

                  <div className='mb-2 w-full'>
                    <label className='font-light text-white sm:text-lg mb-2'>Last Name</label>
                    <input
                      className='text-md w-full rounded-md border-gray-200 px-4 py-2 focus:outline-none'
                      placeholder='Last Name'
                      type='text'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='mb-4 flex-col sm:flex-row flex w-full gap-4'>
                  <div className='w-full'>
                    <label className='font-light text-white sm:text-lg mb-2'>Email</label>
                    <input
                      className='text-md w-full rounded-md border-gray-200 px-4 py-2 focus:outline-none'
                      placeholder='Email Address'
                      type='email'
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                    />
                  </div>

                  <div className='w-full'>
                    <label className='font-light text-white sm:text-lg mb-2'>Phone</label>
                    <input
                      className='text-md w-full rounded-md border-gray-200 px-4 py-2 focus:outline-none'
                      placeholder='Phone Number'
                      type='tel'
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className='flex w-full flex-col justify-end gap-4 md:flex-row'>
                  <label className='sr-only'>Resume</label>
                  <input
                    className='hidden w-full border-gray-200 text-sm text-white'
                    id='upload-file'
                    type='file'
                    accept='.pdf,.doc,.docx'
                    onChange={handleFileChange}
                  />
                  <div className='flex flex-col-reverse gap-4 sm:flex-row'>
                    {resume !== null && (
                      <div className='flex w-full items-center justify-center sm:justify-start'>
                        <p className='text-white'>{resume.name}</p>
                      </div>
                    )}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        document.getElementById('upload-file')?.click();
                      }}
                      className='whitespace-nowrap rounded-md border-2 border-white px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-primary'>
                      Select File
                    </button>
                  </div>

                  <button
                    type='submit'
                    className='rounded-md border-2 border-white px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-500 hover:bg-white hover:text-primary'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CareerContent = () => {
  const { careerId } = useParams();
  const career = careers.find((c) => c.id === careerId);

  return career ? (
    <section className='bg-white py-8 md:py-16'>
      <div className='mx-auto grid max-w-screen-xl grid-cols-10 gap-4 px-4'>
        <div className='col-span-10 flex flex-col md:col-span-7'>
          <div className='flex w-full flex-col-reverse justify-between md:flex-row md:items-center'>
            <h1 className='text-2xl font-bold'>{career.title}</h1>
            <div className='mb-2 flex gap-2 md:mb-0'>
              <Link
                to={`/careers/${career.id}/apply`}
                className='rounded-md border-2 border-primary px-4 py-2 text-sm font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white'>
                Apply Now
              </Link>
              {/* <div className='relative'>
                <button
                  onClick={() => handleCopyToClipboard(pageUrl)}
                  className='rounded-md border-2 border-primary p-2 text-sm font-bold uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-white'
                  data-tip={copied ? 'Copied' : 'Copy URL'}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
                    />
                  </svg>
                </button>
                {copied && (
                  <div className='fixed bottom-4 right-4 flex-1 rounded-md bg-blue-500 px-4 py-2 text-sm text-white'>
                    Copied to clipboard!
                  </div>
                )}
              </div> */}
            </div>
          </div>
          <div className='mb-6 flex gap-2'>
            <div className='flex flex-col justify-between'>
              <p className='flex flex-col md:mb-1 md:flex-row md:items-center md:gap-2'>
                <span className='text-lg font-bold text-blue-500'>{career.company}</span>
                <span className='mb-1 flex items-center gap-2 md:mb-0'>{career.location}</span>
              </p>
              <div className='flex gap-2'>
                <span className='rounded-md bg-blue-200 px-2 py-1 text-xs tracking-wider text-primary'>
                  {career.employmentType}
                </span>
                <span className='rounded-md bg-blue-200 px-2 py-1 text-xs tracking-wider text-primary'>
                  {career.location}
                </span>
              </div>
            </div>
          </div>
          <div className='mb-6'>
            <label className='mb-2 block font-bold text-gray-800'>Job Description</label>
            <p className='text-gray-600'>{career.description}</p>
          </div>
          <div className='mb-6'>
            <label className='mb-2 block font-bold text-gray-800'>Benefits</label>
            <ul className='ml-6 list-disc text-gray-600'>
              {career.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className='mb-6'>
            <label className='mb-2 block font-bold text-gray-800'>Responsibilities</label>
            <ul className='ml-6 list-disc text-gray-600'>
              {career.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div>
            <label className='mb-2 block font-bold text-gray-800'>Qualifications</label>
            <ul className='ml-6 list-disc text-gray-600'>
              {career.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-span-10 flex flex-col md:col-span-3'>
          <label className='mb-2 block w-max text-lg font-bold text-gray-800'>Additional Positions</label>
          <div className='flex h-full w-full flex-col gap-2 overflow-auto'>
            {careers.map((career, index) => (
              <Link
                to={`/careers/${career.id}`}
                key={index}
                className='h-content w-full rounded-md border-2 border-gray-200 px-4 py-2'>
                <div className='mb-1'>
                  <h2 className='truncate text-lg font-bold text-gray-800'>{career.title}</h2>
                  <p className='font-bold text-gray-800'>{career.company}</p>
                </div>
                <div className='mb-1 flex gap-2'>
                  <span className='rounded-md bg-blue-200 px-2 py-1 text-xs tracking-wider text-primary'>
                    {career.employmentType}
                  </span>
                  <span className='rounded-md bg-blue-200 px-2 py-1 text-xs tracking-wider text-primary'>
                    {career.location}
                  </span>
                </div>
                <p className='upper text-sm text-gray-600'>{getTimePassed(career.createdAt)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

const CareerApplication = () => (
  <section className='bg-white mt-16'>
    <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
      <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
        <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Application</h2>
        <p className='font-light text-gray-500 sm:text-xl'>Explore opportunities to become part of our dynamic team.</p>
      </div>
    </div>
    <div>
      {careers.map((career) => (
        <div key={career.id}>
          <h2>{career.title}</h2>
          <p>{career.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className='mt-16'>
        <Routes>
          <Route
            path='/'
            element={<CareerList />}
          />
          <Route
            path='/:careerId'
            element={<CareerContent />}
          />
          <Route
            path='/:careerId/apply'
            element={<CareerApplication />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Careers;
