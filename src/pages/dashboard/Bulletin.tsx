import { useState } from 'react';
import { Layout } from '../../components';

const Bulletin = () => {
  const [activeTab, setActiveTab] = useState('bulletins');

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
              activeTab === 'bulletins'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:border-gray-200'
            }`}>
            Bulletins
          </button>
        </div>

        {activeTab === 'bulletins' && (
          <button className='ml-2 flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
            Add Bulletin
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Bulletin;
