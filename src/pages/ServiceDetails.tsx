import React from 'react';

interface Service {
  title: string;
  images: string[];
  description: string;
  points?: string[];
  stats?: { name: string; value: string }[];
}

interface Props {
  service: Service;
}

const ServiceDetails: React.FC<Props> = ({ service }) => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-3xl font-semibold mb-4'>{service.title}</h1>
      <div className='flex flex-wrap'>
        {service.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Service ${index + 1}`}
            className='w-full md:w-1/2 lg:w-1/3 p-2'
          />
        ))}
      </div>
      <div className='mt-8'>
        <h2 className='text-xl font-semibold mb-2'>Description:</h2>
        <p>{service.description}</p>
      </div>
      {service.points && (
        <div className='mt-8'>
          <h2 className='text-xl font-semibold mb-2'>Key Points:</h2>
          <ul>
            {service.points.map((point, index) => (
              <li
                key={index}
                className='list-disc ml-6'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
      {service.stats && (
        <div className='mt-8'>
          <h2 className='text-xl font-semibold mb-2'>Statistics:</h2>
          <div className='grid grid-cols-2 gap-4'>
            {service.stats.map((stat, index) => (
              <div key={index}>
                <p className='text-gray-600'>{stat.name}</p>
                <p className='font-semibold'>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
