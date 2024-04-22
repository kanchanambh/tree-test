import { useState } from 'react';
import { Layout } from '../../components';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('careers');

  const toggleTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const tab = event.currentTarget.id;

    setActiveTab(tab);
  };

  return (
    <Layout>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <button
            id='careers'
            onClick={toggleTab}
            className={`border-b-2 px-4 py-2 capitalize focus:outline-none ${
              activeTab === 'careers'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:border-gray-200'
            }`}>
            Careers
          </button>
          <button
            id='applicants'
            onClick={toggleTab}
            className={`border-b-2 px-4 py-2 capitalize focus:outline-none ${
              activeTab === 'applicants'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:border-gray-200'
            }`}>
            Applicants
          </button>
        </div>

        {activeTab === 'careers' && (
          <button className='ml-2 flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
            Add Career
          </button>
        )}

        {activeTab === 'applicants' && (
          <button className='ml-2 flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
            Add Applicant
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Careers;
