import { Footer, Navbar } from '../components';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      {/* Terms & Conditions */}
      <section className='bg-white mt-16'>
        <div className='py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6 '>
          <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
            <h2 className='mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider'>Terms & Conditions</h2>
            <p className='font-light text-gray-500 lg:mb-16 sm:text-xl'>Last updated June 16, 2023</p>
          </div>
          <div>
            <h3 className='font-semibold text-xl mb-4'>Introduction</h3>

            <p className='mb-4'>
              These Terms and Conditions are established to ensure a successful business relationship between the
              customer and Three M Tool & Machine, the vendor. They are focused on providing Dependable Quality, On-time
              Deliveries, and Outstanding Service at Competitive Prices. By placing an order, the customer agrees to
              these Terms and Conditions, and any modifications must be agreed upon in writing by both parties.
            </p>

            <h3 className='font-semibold text-xl mb-4'>Ordering Process</h3>

            <ul className='ml-6 mb-4'>
              <li>
                <h3 className='font-semibold mb-2'>
                  Lead Time:{' '}
                  <span className='font-medium'>
                    Quoted lead times are estimates and subject to variation, lead times confirmed with acknowledgement
                    of order.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold'>
                  Purchase Order:{' '}
                  <span className='font-medium'>A written purchase order is required for all orders.</span>
                </h3>
              </li>
            </ul>

            <h3 className='font-semibold text-xl mb-4'>Pricing and Payment</h3>

            <ul className='ml-6 mb-4'>
              <li>
                <h3 className='font-semibold mb-2'>
                  Pricing:{' '}
                  <span className='font-medium'>
                    Prices are quoted based on information provided quotes are valid for 30 days.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Payment:{' '}
                  <span className='font-medium'>
                    Standard Terms are Net 30 days, any exceptions must be agreed by both sides in writing, late
                    payments will be subject to maximum allowable interest rate.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Taxes: <span className='font-medium'>Customer pays all applicable taxes and custom duties.</span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold'>
                  Cancelation:{' '}
                  <span className='font-medium'>
                    Customer assumes liability for work completed and in-process upon cancellation or deferment.
                  </span>
                </h3>
              </li>
            </ul>

            <h3 className='font-semibold text-xl mb-4'>Delivery and Shipping</h3>

            <ul className='ml-6 mb-4'>
              <li>
                <h3 className='font-semibold mb-2'>
                  Delivery:{' '}
                  <span className='font-medium'>
                    Vendor not liable for production or delivery delays beyond their control.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Freight:{' '}
                  <span className='font-medium'>All orders shipped freight collect, Commerce Twp., MI 48390.</span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold'>
                  Incoterms: <span className='font-medium'>Ex Works Commerce Twp., MI 48390.</span>
                </h3>
              </li>
            </ul>

            <h3 className='font-semibold text-xl mb-4'>Product and Specifications</h3>

            <ul className='ml-6 mb-4'>
              <li>
                <h3 className='font-semibold mb-2'>
                  CAD Files/Drawings:{' '}
                  <span className='font-medium'>Vendor not responsible for errors in customer-supplied CAD files.</span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Customer Material:{' '}
                  <span className='font-medium'>
                    Customer is responsible for ensuring the suitability, and timely delivery of these materials. The
                    vendor is not liable for any issues resulting from customer-supplied materials.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Customer Owned Tooling:{' '}
                  <span className='font-medium'>
                    If the customer supplies tooling or fixtures, great care will be taken to ensure proper handling,
                    however, responsibility for the function and maintenance of the items lies with the customer. Items
                    returned on request at the customer’s expense. Items may be disposed of after 6 months of non-use.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold'>
                  Non-Recurring Engineering Fees:{' '}
                  <span className='font-medium'>
                    Fees for tooling, fixtures, programs, or other required resources needed to complete work does not
                    convey ownership or right of removal.
                  </span>
                </h3>
              </li>
            </ul>

            <h3 className='font-semibold text-xl mb-4'>Warranty, Liability and Claims</h3>

            <ul className='ml-6'>
              <li>
                <h3 className='font-semibold mb-2'>
                  Warranty:{' '}
                  <span className='font-medium'>
                    Goods conform to customer-provided specifications, with no express or implied warranty beyond this.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Claims:{' '}
                  <span className='font-medium'>
                    Customer must notify vendor of shortages or defects within 30 days of receipt.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Limited Liability:{' '}
                  <span className='font-medium'>
                    Vendor's liability limited to the contract amount, with no consequential or special damages.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Recovery of Costs:{' '}
                  <span className='font-medium'>
                    Prevailing party in legal disputes entitled to recover reasonable attorney's fees and costs.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold mb-2'>
                  Governing Law:{' '}
                  <span className='font-medium'>
                    Governed by Michigan State law; disputes resolved in Oakland County, Michigan.
                  </span>
                </h3>
              </li>
              <li>
                <h3 className='font-semibold'>
                  Entire Agreement:{' '}
                  <span className='font-medium'>
                    This document is the complete agreement and can only be changed in writing by both parties.
                  </span>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
