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

import FlutterDevelopment from "./pages/services/app-development/FlutterDevelopment";
import AndroidDevelopment from "./pages/services/app-development/AndroidDevelopment";
import IOSDevelopment from "./pages/services/app-development/IOSDevelopment";
import ReactNativeDevelopment from "./pages/services/app-development/ReactNativeDevelopment";
import HybridAppDevelopment from "./pages/services/app-development/HybridAppDevelopment";
import EcommerceAppDevelopment from "./pages/services/app-development/EcommerceAppDevelopment";
import MobileAppDevelopment from "./pages/services/app-development/MobileAppDevelopment";

import SchoolERPSystem from "./pages/services/software-development/SchoolERPSystem";

import WebDevelopmentDavangere from "./pages/services/web-development/SEO/WebDevelopmentDavangere";
import WebDevelopmentMangalore from "./pages/services/web-development/SEO/WebDevelopmentMangalore";
import WebDevelopmentMysore from "./pages/services/web-development/SEO/WebDevelopmentMysore";
import WebDevelopmentShivamogga from "./pages/services/web-development/SEO/WebDevelopmentShivamogga";
import WebDevelopmentTumakuru from "./pages/services/web-development/SEO/WebDevelopmentTumakuru";
import WebDevelopmentBangalore from "./pages/services/web-development/SEO/WebDevelopmentBangalore";
import WebDevelopmentHubli from "./pages/services/web-development/SEO/WebDevelopmentHubli";
import WebDevelopmentDharwad from "./pages/services/web-development/SEO/WebDevelopmentDharwad";
import WebDevelopmentBellary from "./pages/services/web-development/SEO/WebDevelopmentBellary";

import PaypalSuccess from "./pages/PaypalSuccess";
import PaypalCancel from "./pages/PaypalCancel";

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
              path="/app-development"
              element={<AppDevelopment />}
            />

            <Route
              path="/web-development"
              element={<WebDevelopment />}
            />

            <Route
              path="/software-development"
              element={<SoftwareDevelopment />}
            />

            <Route
              path="/game-development"
              element={<GameDevelopment />}
            />

            <Route
              path="/it-consulting"
              element={<ITConsulting />}
            />

            <Route
              path="/pamphlet-design"
              element={<PamphletDesign />}
            />

            <Route
              path="/invoice-design"
              element={<InvoiceDesign />}
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
              path="/invoice-design"
              element={<InvoiceDesign />}
            />

            <Route
              path="/app-development/flutter-development"
              element={<FlutterDevelopment />}
            />

            <Route
              path="/app-development/android-development"
              element={<AndroidDevelopment />}
            />

            <Route
              path="/app-development/ios-development"
              element={<IOSDevelopment />}
            />

            <Route
              path="/app-development/react-native-development"
              element={<ReactNativeDevelopment />}
            />

            <Route
              path="/app-development/hybrid-app-development"
              element={<HybridAppDevelopment />}
            />

            <Route
              path="/app-development/ecommerce-app-development"
              element={<EcommerceAppDevelopment />}
            />

            <Route
              path="/app-development/mobile-app-development"
              element={<MobileAppDevelopment />}
            />

            <Route
              path="/software-development/school-erp-system"
              element={<SchoolERPSystem />}
            />

            <Route
              path="/web-development-davangere"
              element={<WebDevelopmentDavangere />}
            />

            <Route
              path="/web-development-mangalore"
              element={<WebDevelopmentMangalore />}
            />

            <Route
              path="/web-development-mysore"
              element={<WebDevelopmentMysore />}
            />

            <Route
              path="/web-development-shivamogga"
              element={<WebDevelopmentShivamogga />}
            />

            <Route
              path="/web-development-tumakuru"
              element={<WebDevelopmentTumakuru />}
            />

            <Route
              path="/web-development-bangalore"
              element={<WebDevelopmentBangalore />}
            />

            <Route
              path="/web-development-hubli"
              element={<WebDevelopmentHubli />}
            />

            <Route
              path="/web-development-dharwad"
              element={<WebDevelopmentDharwad />}
            />

            <Route
              path="/web-development-bellary"
              element={<WebDevelopmentBellary />}
            />

            <Route
  path="/paypal-success"
  element={<PaypalSuccess />}
/>

<Route
  path="/paypal-cancel"
  element={<PaypalCancel />}
/>

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;