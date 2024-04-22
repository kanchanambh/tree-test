import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { formatToKebabCase } from "../utils/format";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Seamless Production Flow",
    cta: "Our Services",
    url: "/services",
    urlTarget: "",
    image: "/images/37.png",
    imagePosition: "object-bottom",
    alt: "",
    align: "left",
  },
  {
    title: "Take a look inside our shop",
    cta: "Virtual Tour",
    url: "https://my.matterport.com/show/?m=Df9MzYKA3zF",
    urlTarget: "blank",
    image: "/images/36.png",
    alt: "",
    align: "right",
  },
  {
    title: "*QUALITY LINE HERE*",
    cta: "Learn More",
    url: "/services",
    urlTarget: "",
    image: "/images/40.jpg",
    alt: "",
    align: "left",
  },
  {
    title: "Join our dedicated team",
    cta: "Career Openings",
    url: "/careers",
    urlTarget: "",
    image: "/images/41.jpg",
    alt: "",
    align: "right",
  },
];

const services = [
  {
    title: "Machining Centers",
    description:
      "Harness the power of our machining centers, where complex parts meet streamlined production.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Vertical Turning",
    description:
      "Elevate your manufacturing with our vertical turning, where precision meets vertical efficiency.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M165.66,194.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,212.69V43.31L101.66,61.66A8,8,0,0,1,90.34,50.34l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L136,43.31V212.69l18.34-18.35A8,8,0,0,1,165.66,194.34Z"></path>
      </svg>
    ),
  },
  {
    title: "Horizontal Turning",
    description:
      "Transform materials with horizontal turning, achieving unmatched accuracy and speed.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M237.66,133.66l-32,32a8,8,0,0,1-11.32-11.32L212.69,136H43.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L43.31,120H212.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,237.66,133.66Z"></path>
      </svg>
    ),
  },
  {
    title: "Grinding",
    description:
      "Perfect every surface with our grinding services, where smooth finishes meet exact dimensions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z"></path>
      </svg>
    ),
  },
  {
    title: "Inspection",
    description:
      "Ensure perfection with our inspection services, where detailed analysis meets uncompromising standards.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
    ),
  },
  {
    title: "Assembly",
    description:
      " Bring components together with our assembly services, where precision parts meet flawless integration.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
      </svg>
    ),
  },
];

interface Paragraph {
  type: string;
  text: string;
}

interface Content {
  id: number;
  author: string;
  title: string;
  content: Paragraph[];
  date: string;
}

const Home: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [recentBlogs, setRecentBlogs] = useState<Content[]>([]);

  const handlePrevClick = () => {
    if (slideIndex === 0) {
      setSlideIndex(slides.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (slideIndex === slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getFirstTwoSentences = (contentArray: any[]) => {
    const firstParagraphText =
      contentArray.find((item: { type: string }) => item.type === "paragraph")
        ?.text || "";
    if (!firstParagraphText) return "";

    const sentences = firstParagraphText.match(/[^.!?]+[.!?]/g) || [];
    const firstTwoSentences = sentences.slice(0, 2).join(" ");

    return firstTwoSentences;
  };

  const getDaysAgo = (date: string) => {
    const today = new Date();
    const postDate = new Date(date);
    const diffTime = Math.abs(today.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 0 ? "Today" : `${diffDays} days ago`;
  };

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedBlogs = data.sort(
          (
            a: { date: string | number | Date },
            b: { date: string | number | Date }
          ) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }
        );
        setRecentBlogs(sortedBlogs.slice(0, 4));
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="mt-16">
        {/* Slideshow */}
        <div className="relative flex h-[65vh] max-w-screen items-center justify-center">
          <img
            src={slides[slideIndex].image}
            alt={slides[slideIndex].alt}
            className={
              `absolute z-0 h-full w-full object-cover ` +
              slides[slideIndex].imagePosition
            }
          />
          <div className="absolute z-10 h-full w-full bg-black opacity-30"></div>

          <div className="relative z-20 mx-auto flex w-full justify-center lg:justify-start h-full items-center pt-60 md:pt-0">
            <div
              className={`flex flex-col items-center gap-8 sm:w-2/5 ${
                slides[slideIndex].align === "right" && "lg:ml-auto"
              } ${slides[slideIndex].align === "center" && "lg:mx-auto"}`}
            >
              <h1 className="text-center font-bebas text-3xl sm:text-5xl uppercase tracking-wider text-white max-w-sm">
                {slides[slideIndex].title}
              </h1>
              <Link
                to={slides[slideIndex].url}
                target={slides[slideIndex].urlTarget}
                className="rounded border-2 border-white px-4 py-2 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-primary hover:bg-primary"
              >
                {slides[slideIndex].cta}
              </Link>
            </div>
          </div>

          <button
            className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded bg-white p-2.5 text-primary opacity-25 transition-all duration-300 hover:opacity-100"
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded bg-white p-2.5 text-primary opacity-25 transition-all duration-300 hover:opacity-100"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 transform gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded border border-white transition-all duration-300 ${
                  slideIndex === index
                    ? "bg-white"
                    : "bg-transparent hover:border-primary hover:bg-primary"
                }`}
                onClick={() => setSlideIndex(index)}
              ></button>
            ))}
          </div>
        </div>

        {/* Services */}
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider">
                Precision CNC Machining Services
              </h2>
              <p className="text-gray-500 sm:text-xl">
                Experience the pinnacle of precision engineering: discover your
                ultimate partner in CNC machining for unmatched quality and
                efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-4">
              {services.map((service, index) => (
                <Link
                  to={"/services/" + formatToKebabCase(service.title)}
                  key={index}
                >
                  <div className="mb-4 rounded border-2 border-primary bg-white p-2 text-primary w-max">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg">
              <h2 className="mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider">
                Innovative Precision, Unparalleled Results
              </h2>
              <p className="mb-4">
                Dive into the world of precision engineering, where our
                expertise spans across vertical and horizontal turning, and
                meticulous grinding. Each service is a testament to our
                commitment to precision and quality.
              </p>
              <p>
                From the initial design to the final assembly, we ensure that
                every detail is perfected. Our approach combines innovation with
                craftsmanship, bringing your ideas to life with unmatched
                efficiency and precision.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full h-96 object-cover rounded-md shadow-md"
                src="/images/21.png"
                alt="office content 1"
              />
              <img
                className="mt-4 w-full h-96 object-cover lg:mt-10 rounded-md shadow-md"
                src="/images/chips.jpg"
                alt="office content 2"
              />
            </div>
          </div>
        </section>

        {/* Bulletin Preview */}
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 className="mb-4 text-3xl text-gray-900 sm:text-5xl font-bebas tracking-wider">
                Latest Updates
              </h2>
              <p className="font-light text-gray-500 sm:text-xl">
                Catch up on our latest news and insights.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {recentBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md"
                >
                  <div className="flex justify-between items-center mb-5 text-gray-500">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                      </svg>
                      Update
                    </span>
                    <span className="text-sm">{getDaysAgo(blog.date)}</span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <Link to="/bulletin/1">{blog.title}</Link>
                  </h2>
                  <p className="mb-5 font-light text-gray-500">
                    {getFirstTwoSentences(blog.content)}
                    {(
                      blog.content
                        .find(
                          (item: { type: string }) => item.type === "paragraph"
                        )
                        ?.text.match(/[^.!?]+[.!?]/g) || []
                    ).length > 2
                      ? "..."
                      : ""}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="font-medium">{blog.author}</span>
                    </div>
                    <Link
                      to={`/bulletin/${blog.id}`}
                      className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Image Navigation */}
        <div className="w-full flex flex-col sm:flex-row">
          <Link to="/services" className="block w-full md:w-1/3 aspect-video">
            <div
              className="w-full h-full bg-cover bg-center flex justify-center items-center bg-red-50 relative"
              style={{
                backgroundImage: `url('/assets/images/tooling-shelf-2.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <span className="text-white text-3xl lg:text-5xl uppercase font-bebas tracking-wider">
                  Services
                </span>
              </div>
            </div>
          </Link>
          <Link to="/careers" className="block w-full md:w-1/3 aspect-video">
            <div
              className="w-full h-full bg-cover bg-center flex justify-center items-center relative"
              style={{
                backgroundImage: `url('/assets/images/operator-at-machine.png')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <span className="text-white text-3xl lg:text-5xl uppercase font-bebas tracking-wider">
                  Careers
                </span>
              </div>
            </div>
          </Link>
          <Link to="/contact" className="block w-full md:w-1/3 aspect-video">
            <div
              className="w-full h-full bg-cover bg-center flex justify-center items-center relative"
              style={{
                backgroundImage: `url('/assets/images/three-m-building.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                <span className="text-white text-3xl lg:text-5xl uppercase font-bebas tracking-wider">
                  Contact
                </span>
              </div>
            </div>
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
