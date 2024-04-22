// import { useState } from 'react';

// const careers = [
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
//   {
//     title: 'CNC Mill Machinist',
//     company: 'three-m',
//     location: 'on-site',
//     employmentType: 'full-time',
//   },
// ];

// type CareersTableProps = {
//   selectCareer: (career: number) => void;
// };

// const CareersTable = (props: CareersTableProps) => {
//   const [createModalOpen, setCreateModalOpen] = useState(false);
//   const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
//   const [companyFilter, setCompanyFilter] = useState(0);
//   const [selectedCareer, setSelectedCareer] = useState<number | null>(null);

//   const filteredCareers = careers;

//   const toggleCreateModal = () => {
//     setCreateModalOpen(!createModalOpen);
//   };

//   const toggleFilterDropdown = () => {
//     setFilterDropdownOpen(!filterDropdownOpen);
//   };

//   return (
//     <section className='flex-1 flex flex-col'>
//       <div className='bg-white relative shadow-md sm:rounded-lg'>
//         <div className='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4'>
//           <div className='w-full md:w-1/2'>
//             <form className='flex items-center'>
//               <label
//                 htmlFor='simple-search'
//                 className='sr-only'>
//                 Search
//               </label>
//               <div className='relative w-full'>
//                 <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
//                   <svg
//                     aria-hidden='true'
//                     className='w-5 h-5 text-gray-500 dark:text-gray-400'
//                     fill='currentColor'
//                     viewBox='0 0 20 20'
//                     xmlns='http://www.w3.org/2000/svg'>
//                     <path
//                       fillRule='evenodd'
//                       d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
//                       clipRule='evenodd'
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type='text'
//                   id='simple-search'
//                   className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
//                   placeholder='Search'
//                   required
//                 />
//               </div>
//             </form>
//           </div>

//           <div className='w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0'>
//             <div className='flex items-center space-x-3 w-full md:w-auto'>
//               <button
//                 id='actionsDropdownButton'
//                 data-dropdown-toggle='actionsDropdown'
//                 className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
//                 type='button'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   fill='none'
//                   viewBox='0 0 24 24'
//                   strokeWidth={1.5}
//                   stroke='currentColor'
//                   className='-ml-1 mr-1.5 w-5 h-5'>
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     d='M12 4.5v15m7.5-7.5h-15'
//                   />
//                 </svg>
//                 Create
//               </button>
//               <button
//                 id='filterDropdownButton'
//                 data-dropdown-toggle='filterDropdown'
//                 onClick={toggleFilterDropdown}
//                 className='w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
//                 type='button'>
//                 <svg
//                   xmlns='http://www.w3.org/2000/svg'
//                   aria-hidden='true'
//                   className='h-4 w-4 mr-2 text-gray-400'
//                   viewBox='0 0 20 20'
//                   fill='currentColor'>
//                   <path
//                     fillRule='evenodd'
//                     d='M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z'
//                     clipRule='evenodd'
//                   />
//                 </svg>
//                 Filter
//                 <svg
//                   className='-mr-1 ml-1.5 w-5 h-5'
//                   fill='currentColor'
//                   viewBox='0 0 20 20'
//                   xmlns='http://www.w3.org/2000/svg'
//                   aria-hidden='true'>
//                   <path
//                     clipRule='evenodd'
//                     fillRule='evenodd'
//                     d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
//                   />
//                 </svg>
//               </button>
//               {filterDropdownOpen && (
//                 <div
//                   id='filterDropdown'
//                   className='z-10 absolute right-0 top-16 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700'>
//                   <h6 className='mb-3 text-sm font-medium text-gray-900 dark:text-white'>Company</h6>
//                   <ul
//                     className='space-y-2 text-sm'
//                     aria-labelledby='filterDropdownButton'>
//                     <li className='flex items-center'>
//                       <input
//                         id='apple'
//                         type='checkbox'
//                         value=''
//                         className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
//                       />
//                       <label
//                         htmlFor='apple'
//                         className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
//                         Three M (56)
//                       </label>
//                     </li>
//                     <li className='flex items-center'>
//                       <input
//                         id='fitbit'
//                         type='checkbox'
//                         value=''
//                         className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
//                       />
//                       <label
//                         htmlFor='fitbit'
//                         className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
//                         Ultra Grip (16)
//                       </label>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className='overflow-x-auto'>
//           <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
//             <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
//               <tr>
//                 <th
//                   scope='col'
//                   className='px-4 py-3'>
//                   Job Title
//                 </th>
//                 <th
//                   scope='col'
//                   className='px-4 py-3'>
//                   Type
//                 </th>
//                 <th
//                   scope='col'
//                   className='px-4 py-3'>
//                   Location
//                 </th>
//               </tr>
//             </thead>
//           </table>
//           <div className='overflow-y-auto max-h-[calc(100vh-10rem)]'>
//             <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
//               <tbody>
//                 {filteredCareers.map((career, index) => (
//                   <tr
//                     key={index}
//                     onClick={() => {
//                       setSelectedCareer(index);
//                       console.log(selectedCareer);
//                     }}
//                     className='border-b hover:cursor-pointer hover:bg-blue-100'>
//                     <td
//                       scope='row'
//                       className='px-4 py-3 font-medium text-gray-900 whitespace-nowrap'>
//                       {career.title}
//                     </td>
//                     <td className='px-4 py-3'>{career.employmentType}</td>
//                     <td className='px-4 py-3'>{career.location}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareersTable;
