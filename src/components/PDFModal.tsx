/* eslint-disable */
import { useState } from 'react';

const PDFModal = ({ pdf }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={toggleModal}>
        Open PDF
      </button>

      {isOpen && (
        <div className='h-screen fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto sm:h-full w-full z-[98]'>
          <div className='relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white'>
            <div className='flex justify-end items-center'>
              <button
                className='bg-transparent text-gray-400'
                onClick={toggleModal}>
                Close
              </button>
            </div>
            <div className='mt-2'>
              <iframe
                src={pdf}
                className='w-[100%] h-[80vh]'
                style={{ border: 'none' }}></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFModal;
