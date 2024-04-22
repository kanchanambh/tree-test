import { Link } from 'react-router-dom';

type CardProps = {
  title: string;
  description: string;
  path: string;
  imageOne: string;
  imageTwo: string;
};

const Card = (props: CardProps) => {
  return (
    <Link
      to={props.path}
      className='group block overflow-hidden bg-gray-200 shadow-lg rounded-md'>
      <div className='relative aspect-square flex items-center justify-center overflow-clip transition-all'>
        <div className='absolute h-full w-full bg-black z-40 opacity-30 transition-all'></div>
        <img
          src={props.imageOne}
          alt=''
          className='absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300'
        />

        <img
          src={props.imageTwo}
          alt=''
          className='absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300'
        />

        <h3 className='text-white text-3xl lg:text-4xl uppercase font-bebas tracking-wider absolute text-center z-50 transition-all duration-300 transform group-hover:translate-y-[-300%]'>
          {props.title}
        </h3>

        <p className='text-white text-3xl lg:text-4xl uppercase font-bebas tracking-wider absolute text-center z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform'>
          *Service Details Here*
        </p>
      </div>
    </Link>
  );
};

export default Card;
