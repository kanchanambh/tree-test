const Team = () => {
  return (
    <section className='bg-white'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
        <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
          <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Our Team</h2>
          <p className='font-light text-gray-500 sm:text-xl'>
            Get to know the dedicated professionals driving our success.
          </p>
        </div>
        <div className='grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded object-cover shadow-lg'
              src='https://suebehaviouraldesign.com/wp-content/uploads/2019/11/Jeff_bezos.jpg'
              alt='Bonnie Avatar'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <a href='#'>Sam Medwid</a>
            </h3>
            <p>CEO</p>
          </div>

          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded object-cover shadow-lg'
              src='https://suebehaviouraldesign.com/wp-content/uploads/2019/11/Jeff_bezos.jpg'
              alt='Helene Avatar'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <a href='#'>Jamie Headley</a>
            </h3>
            <p>Integrator</p>
          </div>

          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded object-cover shadow-lg'
              src='https://suebehaviouraldesign.com/wp-content/uploads/2019/11/Jeff_bezos.jpg'
              alt='Jese Avatar'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <a href='#'>Dan O'connell</a>
            </h3>
            <p>Operations Manager</p>
          </div>

          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded object-cover shadow-lg'
              src='https://suebehaviouraldesign.com/wp-content/uploads/2019/11/Jeff_bezos.jpg'
              alt='Joseph Avatar'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <a href='#'>Erika Miu</a>
            </h3>
            <p>Finance Manager</p>
          </div>

          <div></div>

          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded object-cover shadow-lg'
              src='https://suebehaviouraldesign.com/wp-content/uploads/2019/11/Jeff_bezos.jpg'
              alt='Sofia Avatar'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <a href='#'>Christine Brimer</a>
            </h3>
            <p>Sales & Marketing Manager</p>
          </div>

          <div className='text-center text-gray-500'>
            <img
              className='mx-auto mb-4 w-36 h-36 rounded object-cover shadow-lg'
              src='https://suebehaviouraldesign.com/wp-content/uploads/2019/11/Jeff_bezos.jpg'
              alt='Leslie Avatar'
            />
            <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900'>
              <a href='#'>Joe Mattord</a>
            </h3>
            <p>Quality Manager</p>
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Team;
