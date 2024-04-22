import { Link } from 'react-router-dom';

const BlogGrid = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Latest Updates</h2>
          <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>Catch up on our latest news and insights.</p>
        </div>
        <div className='grid gap-8 lg:grid-cols-2'>
          <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
            <div className='flex justify-between items-center mb-5 text-gray-500'>
              <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                Update
              </span>
              <span className='text-sm'>14 days ago</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
              <Link to='/bulletin/1'>Trends and Innovations Shaping Our Industry</Link>
            </h2>
            <p className='mb-5 font-light text-gray-500'>
              Explore the cutting-edge trends and technological innovations driving the future of CNC machining, from
              automation to advanced materials.
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <img
                  className='w-7 h-7 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                  alt='Jese Leos avatar'
                />
                <span className='font-medium'>Sam Medwid</span>
              </div>
              <Link
                to='/bulletin/1'
                className='inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'>
                Read more
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </Link>
            </div>
          </article>
          <article className='p-6 bg-white rounded-lg border border-gray-200 shadow-md'>
            <div className='flex justify-between items-center mb-5 text-gray-500'>
              <span className='bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800'>
                <svg
                  className='mr-1 w-3 h-3'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z'
                    clipRule='evenodd'></path>
                  <path d='M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z'></path>
                </svg>
                Article
              </span>
              <span className='text-sm'>14 days ago</span>
            </div>
            <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
              <Link to='/bulletin/1'>Maximizing Efficiency: Tips for Streamlining Your CNC Machining Process</Link>
            </h2>
            <p className='mb-5 font-light text-gray-500'>
              Discover practical tips and strategies to enhance your CNC machining process, improving efficiency and
              reducing waste without compromising quality.
            </p>
            <div className='flex justify-between items-center'>
              <div className='flex items-center space-x-4'>
                <img
                  className='w-7 h-7 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
                  alt='Bonnie Green avatar'
                />
                <span className='font-medium'>Dave Husk</span>
              </div>
              <Link
                to='/bulletin/1'
                className='inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline'>
                Read more
                <svg
                  className='ml-2 w-4 h-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
