import { Link, useNavigate } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Navbar />

      <section className='bg-white h-screen flex justify-center items-center'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div className='mx-auto max-w-screen-sm text-center'>
            <h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary'>404</h1>
            <p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl'>Something's missing.</p>
            <p className='mb-4 text-lg font-light text-gray-500'>
              Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
            </p>

            <div className='flex gap-4 justify-center'>
              <button
                onClick={goBack}
                className='inline-flex text-white bg-primary hover:bg-white hover:text-primary border-2 border-primary transition ease-in-out duration-300 focus:outline-none rounded-md px-3 py-1.5 text-center items-center uppercase font-semibold'>
                Go Back
              </button>
              <Link
                to='/'
                className='inline-flex text-white bg-primary hover:bg-white hover:text-primary border-2 border-primary transition ease-in-out duration-300 focus:outline-none rounded-md px-3 py-1.5 text-center items-center uppercase font-semibold'>
                Go To Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;
