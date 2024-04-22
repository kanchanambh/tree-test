import { Footer, Navbar, ServiceCard } from '../components';

const services = [
	{
		title: 'Machining Centers',
		description: '',
		path: '/services/machining-centers',
		imageOne: '/assets/images/operator-at-okuma.jpg',
		imageTwo: '/images/15.png',
	},
	{
		title: 'Vertical Turning',
		description: '',
		path: '/services/vertical-turning',
		imageOne: '/assets/images/yb.jpg',
		imageTwo: '/assets/images/vertical-turning.jpg',
	},
	{
		title: 'Horizontal Turning',
		description: '',
		path: '/services/horizontal-turning',
		imageOne: '/assets/images/haas-tl-lathe.jpg',
		imageTwo: '/assets/images/operator-at-mazak.jpg',
	},
	{
		title: 'Grinding',
		description: '',
		path: '/services/grinding',
		imageOne: '/assets/images/operator-at-grinding-machine.jpg',
		imageTwo: '/assets/images/grinding-ball-arm.jpg',
	},
	{
		title: 'Inspection',
		description: '',
		path: '/services/inspection',
		imageOne: '/assets/images/zeiss.jpg',
		imageTwo: '/assets/images/inspection-gauges.jpg',
	},
	{
		title: 'Bench & Assembly',
		description: '',
		path: '/services/assembly',
		imageOne: '/assets/images/bench-area.jpg',
		imageTwo: '/assets/images/actuators-in-bench.jpg',
	},
];

const questionColumnOne = [
	{
		question: `What is Three M Tool & Machine?`,
		answer: `Three M Tool and Machine is a leading manufacturer and service provider specializing in precision machining, custom tooling and components. We cater to a wide range of industries, including energy, automotive, aerospace, and manufacturing.`,
	},
	{
		question: `What is Ultra-Grip International?`,
		answer: `Ultra-Grip International is Three M’s Sister company and product line division. Ultra-Grip offers a full custom line of workholding devices and products. Specializing in rotating fixtures such as lathe or grinding chucks, Ultra-Grip works with the end user to develop the best solution for the application. Many of the components used in UGI products are manufactured in Three M.`,
	},
	{
		question: `What materials can you machine?`,
		answer: `While we specialize in machining various grades of steel, we also have capabilities to handle a wide array of other materials including cast iron, stainless steel, and non-ferrous materials such as aluminum and brass.`,
	},
	{
		question: `How do you ensure quality in your machining processes?`,
		answer: `Our commitment to quality starts with our ISO 9001:2015 registered quality system and continues to shipment, delivery and beyond to the entire life cycle of the product. We believe in forging deep relationships with our customers, and reliable quality is only one critical piece of that.`,
	},
];

const questionColumnTwo = [
	{
		question: `Can you handle both small and large volume production?`,
		answer: `We are equipped to handle orders from 1 piece- 10,000 pieces.`,
	},
	{
		question: `Can you provide heat treatment and surface finishing services?`,
		answer: `Absolutely, we offer a variety of heat treatment and surface finishing options, including anodizing, plating, powder coating, and polishing, through our curated network of approved vendors to meet nearly any requirements you might have.`,
	},
	{
		question: `What is the typical lead time for a machining project?`,
		answer: `Lead times vary based on the complexity of the project and the current workload. However, we strive to provide quick turnarounds and will work with you to meet your deadlines. Please contact us for an accurate estimate.`,
	},
	{
		question: `What file formats do you accept for CNC machining orders?`,
		answer: `We accept a wide range of file formats, including DWG, DXF, IGES, STEP, and SolidWorks files. If you have a different format, please reach out to us to discuss compatibility. Solid model is generally required for CNC machined components, if you don’t have one, that’s ok, we can provide it if needed.`,
	},
	{
		question: `How do you handle confidential designs and projects?`,
		answer: `We take confidentiality seriously and are committed to protecting your intellectual property. We can sign non-disclosure agreements (NDAs) upon request and ensure that your designs and projects are handled with the utmost discretion. `,
	},
];

const Services = () => {
	return (
		<>
			<Navbar />

			{/* Services */}
			<section className="bg-white mt-16">
				<div className="py-8 px-4 lg:px-6 mx-auto max-w-screen-xl lg:py-16">
					<div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
						<h2 className="mb-4 text-4xl text-gray-900 sm:text-5xl font-bebas tracking-wider">Services We Offer</h2>
						<p className="font-light text-gray-500 lg:mb-16 sm:text-xl">
							Discover our services designed for your success
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
						{services.map((service, index) => (
							<ServiceCard
								key={index}
								title={service.title}
								description={service.description}
								path={service.path}
								imageOne={service.imageOne}
								imageTwo={service.imageTwo}
							/>
						))}
					</div>
				</div>
			</section>

			{/* Quality Policy */}
			<section className="bg-white">
				<div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
					<div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
						<h2 className="mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider">Our Commitment</h2>
						<p className="font-light text-gray-500 sm:text-xl">Dedicated to excellence, every step of the way.</p>
					</div>

					<div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
						<div className="space-y-4">
							<h3 className="text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider">Quality</h3>
							<p className="text-lg font-normal text-gray-500">
								Delivering products that are both visually flawless and functionally impeccable. Excellence in every
								detail.
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider">Efficiency</h3>
							<p className="text-lg font-normal text-gray-500">
								Prioritizing right-first-time processes. Leveraging technology and training for cost-effective
								solutions.
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl sm:text-3xl text-gray-900 font-bebas tracking-wider">Delivery</h3>
							<p className="text-lg font-normal text-gray-500">
								Meeting or beating deadlines, ensuring products reach customers promptly and as expected.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQS */}
			<section className="bg-white">
				<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
					<h2 className="mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider">
						Frequently asked questions
					</h2>
					<div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
						<div>
							{questionColumnOne.map((question, index) => (
								<div key={index} className="mb-10">
									<h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
										<svg
											className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
												clipRule="evenodd"></path>
										</svg>
										{question.question}
									</h3>
									<p className="text-gray-500">{question.answer}</p>
								</div>
							))}
						</div>

						<div>
							{questionColumnTwo.map((question, index) => (
								<div key={index} className="mb-10">
									<h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
										<svg
											className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
												clipRule="evenodd"></path>
										</svg>
										{question.question}
									</h3>
									<p className="text-gray-500">{question.answer}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default Services;
