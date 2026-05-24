import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import AppDevelopment from "./pages/services/AppDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import GameDevelopment from "./pages/services/GameDevelopment";
import ITConsulting from "./pages/services/ITConsulting";
import PamphletDesign from "./pages/services/PamphletDesign";
import InvoiceDesign from "./pages/services/InvoiceDesign";

import WorldClockPrivacyPolicy from "./pages/apps/WorldClockPrivacyPolicy";
import CGPASGPAPrivacyPolicy from "./pages/apps/CGPASGPAPrivacyPolicy";
import InvoiceMakerPrivacyPolicy from "./pages/apps/InvoiceMakerPrivacyPolicy";
import FileRenamerPrivacyPolicy from "./pages/apps/FileRenamerPrivacyPolicy";
import FileConverterPrivacyPolicy from "./pages/apps/FileConverterPrivacyPolicy";
import ImageToPDFPrivacyPolicy from "./pages/apps/ImageToPDFPrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="bg-[#050816] text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route
              path="/services/app-development"
              element={<AppDevelopment />}
            />

            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />

            <Route
              path="/services/software-development"
              element={<SoftwareDevelopment />}
            />

            <Route
              path="/services/game-development"
              element={<GameDevelopment />}
            />

            <Route
              path="/services/it-consulting"
              element={<ITConsulting />}
            />

            <Route
              path="/services/pamphlet-design"
              element={<PamphletDesign />}
            />

            <Route
              path="/apps/world-clock/privacy-policy"
              element={<WorldClockPrivacyPolicy />}
            />

            <Route
              path="/apps/cgpa-sgpa-calculator/privacy-policy"
              element={<CGPASGPAPrivacyPolicy />}
            />

            <Route
              path="/apps/invoice-maker/privacy-policy"
              element={<InvoiceMakerPrivacyPolicy />}
            />

            <Route
              path="/apps/file-renamer/privacy-policy"
              element={<FileRenamerPrivacyPolicy />}
            />

            <Route
              path="/apps/file-converter/privacy-policy"
              element={<FileConverterPrivacyPolicy />}
            />

            <Route
              path="/apps/image-to-pdf/privacy-policy"
              element={<ImageToPDFPrivacyPolicy />}
            />

            <Route
              path="/services/invoice-design"
              element={<InvoiceDesign />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;