import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-4 lg:px-6 bg-primary">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="md:flex md:justify-between">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div>
              <Link
                to="/"
                className="flex items-center bg-white p-2 pr-0 rounded justify-center md:justify-start"
              >
                <img
                  src="/images/three-m-logo-with-text.png"
                  className="mr-3 h-10"
                  alt="Three M Logo"
                />
              </Link>
            </div>
            <Link
              to="/iso-9001-2015-certificate-of-registration.pdf"
              target="blank"
            >
              <img
                src="/images/iso-logo.jpg"
                className="rounded mb-4 md:mb-0 w-[100px]"
              ></img>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-4 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-xl text-white uppercase font-bebas tracking-wider">
                Company
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl text-white uppercase font-bebas tracking-wider">
                Follow us
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <Link
                    to="https://www.linkedin.com/company/three-m-tool-&-machine-inc"
                    className="hover:underline"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="https://www.indeed.com/cmp/Three-M-Tool-&-Machine"
                    target="blank"
                    className="hover:underline"
                  >
                    Indeed
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.facebook.com/threemtoolandmachineinc"
                    target="blank"
                    className="hover:underline "
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl text-white uppercase font-bebas tracking-wider">
                Legal
              </h2>
              <ul className="text-gray-200">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/iso-9001-2015-certificate-of-registration.pdf"
                    target="blank"
                    className="hover:underline"
                  >
                    ISO 9001:2015
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <ul className="text-gray-200 flex flex-col md:flex-row items-center justify-center gap-8 mt-4">
            <li>
              <Link to="mailto:sales@three-m.com" className="hover:underline">
                sales@three-m.com
              </Link>
            </li>
            <li>
              <Link
                to="https://www.google.com/maps/place/Three+M+Tool+and+Machine,+Inc./@42.577088,-83.4467241,17z/data=!3m1!4b1!4m6!3m5!1s0x8824a4ea968cf125:0x8e4c1d7fddc834d6!8m2!3d42.5770841!4d-83.4441492!16s%2Fg%2F1tgdtrtz?entry=ttu"
                target="blank"
                className="hover:underline text-center"
              >
                <p>Commerce Township, Michigan</p>
              </Link>
            </li>
            <li>
              <Link to="tel:2483631555" className="hover:underline">
                (248) 636-1555
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">
            <Link to="/dashboard/login">© </Link>
            {currentYear}{" "}
            <Link to="/" className="hover:underline">
              Three M Tool & Machine™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
