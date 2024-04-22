// import { useState } from 'react';
// import { CareersTable, DashboardNavbar } from '../components';

// const CareerManager = () => {
//   const [activeTab, setActiveTab] = useState('details');
//   const [selectedCareer, setSelectedCareer] = useState();
//   const [applicantViewMode, setApplicantViewMode] = useState('list');

//   const toggleTab = (event: React.MouseEvent<HTMLElement>) => {
//     const tab = event.currentTarget.id;

//     setActiveTab(tab);
//   };

//   const handleSelect = () => {};

//   return (
//     <div className='flex flex-col h-screen'>
//       <DashboardNavbar />
//       <div className='flex-1 flex gap-4 p-4 bg-gray-100 overflow-hidden'>
//         <div className='w-1/3 overflow-hidden'>
//           <div className='h-full rounded-lg overflow-clip'>
//             <CareersTable selectCareer={handleSelect} />
//           </div>
//         </div>
//         <div className='w-2/3 flex overflow-hidden'>
//           <div className='bg-white p-4 flex-1 sm:rounded-lg overflow-y-auto flex flex-col'>
//             <div className='flex flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
//               <div
//                 className='inline-flex flex-col w-full rounded-md shadow-sm md:w-auto md:flex-row'
//                 role='group'>
//                 <button
//                   type='button'
//                   id='details'
//                   onClick={toggleTab}
//                   className={
//                     `px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-t-lg md:rounded-tr-none md:rounded-l-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 ` +
//                     (activeTab === 'details' ? 'bg-gray-100' : 'bg-white')
//                   }>
//                   Details
//                 </button>
//                 <button
//                   type='button'
//                   id='applicants'
//                   onClick={toggleTab}
//                   className={
//                     `px-4 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-b-lg md:rounded-bl-none md:rounded-r-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-2 focus:ring-primary-700 focus:text-primary-700 ` +
//                     (activeTab === 'applicants' ? 'bg-gray-50' : 'bg-white')
//                   }>
//                   Applicants
//                 </button>
//               </div>

//               {activeTab === 'applicants' && (
//                 <div className='flex gap-3'>
//                   <button
//                     id='actionsDropdownButton'
//                     className='w-full md:w-auto flex items-center justify-center p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
//                     type='button'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-5 h-5'>
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     id='actionsDropdownButton'
//                     className='w-full md:w-auto flex items-center justify-center p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
//                     type='button'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-5 h-5'>
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     id='actionsDropdownButton'
//                     className='w-full md:w-auto gap-2 flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
//                     type='button'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-5 h-5'>
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
//                       />
//                     </svg>
//                     Export
//                   </button>
//                 </div>
//               )}

//               {activeTab === 'details' && (
//                 <div className='flex gap-2'>
//                   <button
//                     id='actionsDropdownButton'
//                     className='w-full md:w-auto gap-2 flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200'
//                     type='button'>
//                     <svg
//                       xmlns='http://www.w3.org/2000/svg'
//                       fill='none'
//                       viewBox='0 0 24 24'
//                       strokeWidth={1.5}
//                       stroke='currentColor'
//                       className='w-5 h-5'>
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
//                       />
//                     </svg>
//                     Edit
//                   </button>
//                 </div>
//               )}
//             </div>

//             {activeTab === 'details' && (
//               <form className='mt-4'>
//                 <div className='relative z-0 w-full mb-5 group'>
//                   <input
//                     type='title'
//                     name='title'
//                     id='title'
//                     className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//                     placeholder=' '
//                     autoComplete='off'
//                     required
//                   />
//                   <label
//                     htmlFor='title'
//                     className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//                     Job Title
//                   </label>
//                 </div>

//                 <div className='grid md:grid-cols-2 md:gap-6'>
//                   <div className='relative z-0 w-full mb-5 group'>
//                     <input
//                       type='text'
//                       name='floating_first_name'
//                       id='floating_first_name'
//                       className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//                       placeholder=' '
//                       required
//                     />
//                     <label
//                       htmlFor='floating_first_name'
//                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//                       First name
//                     </label>
//                   </div>
//                   <div className='relative z-0 w-full mb-5 group'>
//                     <input
//                       type='text'
//                       name='floating_last_name'
//                       id='floating_last_name'
//                       className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//                       placeholder=' '
//                       required
//                     />
//                     <label
//                       htmlFor='floating_last_name'
//                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//                       Last name
//                     </label>
//                   </div>
//                 </div>
//                 <div className='grid md:grid-cols-2 md:gap-6'>
//                   <div className='relative z-0 w-full mb-5 group'>
//                     <input
//                       type='tel'
//                       pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
//                       name='floating_phone'
//                       id='floating_phone'
//                       className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//                       placeholder=' '
//                       required
//                     />
//                     <label
//                       htmlFor='floating_phone'
//                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//                       Phone number (123-456-7890)
//                     </label>
//                   </div>
//                   <div className='relative z-0 w-full mb-5 group'>
//                     <input
//                       type='text'
//                       name='floating_company'
//                       id='floating_company'
//                       className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
//                       placeholder=' '
//                       required
//                     />
//                     <label
//                       htmlFor='floating_company'
//                       className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
//                       Company (Ex. Google)
//                     </label>
//                   </div>
//                 </div>
//                 <button
//                   type='submit'
//                   className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
//                   Submit
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerManager;
