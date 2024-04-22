import { useState } from 'react';
import { Layout } from '../../components';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('users');

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
            id='users'
            onClick={toggleTab}
            className={`border-b-2 px-4 py-2 capitalize focus:outline-none ${
              activeTab === 'users'
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-400 hover:border-gray-200'
            }`}>
            Users
          </button>
        </div>

        {activeTab === 'users' && (
          <button className='ml-2 flex gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none'>
            Add User
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Admin;
