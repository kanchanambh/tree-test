import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Bulletin,
  Careers,
  Contact,
  DashboardAdmin,
  DashboardBulletin,
  DashboardCareers,
  DashboardHome,
  DashboardLogin,
  DashboardNotFound,
  Home,
  NotFound,
  PrivacyPolicy,
  Services,
  TermsAndConditions,
  PostPage,
} from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Main */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/bulletin/:postSlug" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />

        {/* Dashboard */}
        <Route path="/dashboard/login" element={<DashboardLogin />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route path="/dashboard/bulletin" element={<DashboardBulletin />} />

        <Route path="/dashboard/careers" element={<DashboardCareers />} />
        <Route path="/dashboard/*" element={<DashboardNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
