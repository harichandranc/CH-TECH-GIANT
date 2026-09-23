import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Apps from "./pages/Apps";
import AdminDashboard from "./pages/AdminDashboard";

import WebCodshop from "./pages/apps/WebCodshop";

import AppDevelopment from "./pages/services/AppDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import GameDevelopment from "./pages/services/GameDevelopment";
import ITConsulting from "./pages/services/ITConsulting";
import PamphletDesign from "./pages/services/PamphletDesign";
import InvoiceDesign from "./pages/services/InvoiceDesign";

import WorldClockPrivacyPolicy from "./pages/apps/WorldClockPrivacyPolicy";
import WorldClockPrivacyPolicyChinese from "./pages/apps/WorldClockPrivacyPolicyChinese";
import CGPASGPAPrivacyPolicy from "./pages/apps/CGPASGPAPrivacyPolicy";
import CGPASGPAPrivacyPolicyChinese from "./pages/apps/CGPASGPAPrivacyPolicyChinese";
import InvoiceMakerPrivacyPolicy from "./pages/apps/InvoiceMakerPrivacyPolicy";
import InvoiceMakerPrivacyPolicyChinese from "./pages/apps/InvoiceMakerPrivacyPolicyChinese";
import FileRenamerPrivacyPolicy from "./pages/apps/FileRenamerPrivacyPolicy";
import FileRenamerPrivacyPolicyChinese from "./pages/apps/FileRenamerPrivacyPolicyChinese";
import FileConverterPrivacyPolicy from "./pages/apps/FileConverterPrivacyPolicy";
import FileConverterPrivacyPolicyChinese from "./pages/apps/FileConverterPrivacyPolicyChinese";
import ImageToPDFPrivacyPolicy from "./pages/apps/ImageToPDFPrivacyPolicy";
import ImageToPDFPrivacyPolicyChinese from "./pages/apps/ImageToPDFPrivacyPolicyChinese";
import PDFLockUnlockPrivacyPolicy from "./pages/apps/PdfLockUnlockPrivacyPolicy";
import PDFLockUnlockPrivacyPolicyChinese from "./pages/apps/PdfLockUnlockPrivacyPolicyChinese";
import WebCodshopPrivacyPolicy from "./pages/apps/WebCodshopPrivacyPolicy";
import WebCodshopPrivacyPolicyChinese from "./pages/apps/WebCodshopPrivacyPolicyChinese";

import FlutterDevelopment from "./pages/services/app-development/FlutterDevelopment";
import AndroidDevelopment from "./pages/services/app-development/AndroidDevelopment";
import IOSDevelopment from "./pages/services/app-development/IOSDevelopment";
import ReactNativeDevelopment from "./pages/services/app-development/ReactNativeDevelopment";
import HybridAppDevelopment from "./pages/services/app-development/HybridAppDevelopment";
import EcommerceAppDevelopment from "./pages/services/app-development/EcommerceAppDevelopment";
import MobileAppDevelopment from "./pages/services/app-development/MobileAppDevelopment";

import SchoolERPSystem from "./pages/services/software-development/SchoolERPSystem";
import HospitalManagementSystem from "./pages/services/software-development/HospitalMangementSystem";

import WebDevelopmentDavanagere from "./pages/services/web-development/SEO/WebDevelopmentDavanagere";
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

import WebCodshopDeleteAccount from "./pages/apps/WebCodshopDeleteAccount";

function App() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    hover: false,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor((prev) => ({
        ...prev,
        x: e.clientX,
        y: e.clientY,
      }));
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, select, input, textarea, [role='button']"
      );

      setCursor((prev) => ({
        ...prev,
        hover: !!target,
      }));
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <BrowserRouter>

      {/* CUSTOM CURSOR */}
      <div
        className={`custom-cursor ${
          cursor.hover ? "hover" : ""
        }`}
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
        }}
      />

      <ScrollToTop />

      <div className="bg-[#050816] text-white min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />
            <Route path="/:lang" element={<Home />} />

            {/* ABOUT */}
            <Route path="/about" element={<About />} />
            <Route path="/:lang/about" element={<About />} />

            {/* SERVICES */}
            <Route path="/services" element={<Services />} />
            <Route path="/:lang/services" element={<Services />} />

            {/* PORTFOLIO */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/:lang/portfolio" element={<Portfolio />} />

            {/* CONTACT */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/:lang/contact" element={<Contact />} />

            {/* PRIVACY POLICY */}
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/:lang/privacy-policy"
              element={<PrivacyPolicy />}
            />

            {/* APPS */}
            <Route path="/apps" element={<Apps />} />
            <Route path="/:lang/apps" element={<Apps />} />


            <Route path="/apps/web-codshop" element={<WebCodshop />} />

            {/* ADMIN DASHBOARD */}
            <Route
              path="/admin-dashboard"
              element={<AdminDashboard />}
            />

            {/* APP DEVELOPMENT */}
            <Route
              path="/app-development"
              element={<AppDevelopment />}
            />

            <Route
              path="/:lang/app-development"
              element={<AppDevelopment />}
            />

            {/* WEB DEVELOPMENT */}
            <Route
              path="/web-development"
              element={<WebDevelopment />}
            />

            <Route
              path="/:lang/web-development"
              element={<WebDevelopment />}
            />

            {/* SOFTWARE DEVELOPMENT */}
            <Route
              path="/software-development"
              element={<SoftwareDevelopment />}
            />

            {/* GAME DEVELOPMENT */}
            <Route
              path="/game-development"
              element={<GameDevelopment />}
            />

            <Route
              path="/:lang/game-development"
              element={<GameDevelopment />}
            />

            {/* IT CONSULTING */}
            <Route
              path="/it-consulting"
              element={<ITConsulting />}
            />

            <Route
              path="/:lang/it-consulting"
              element={<ITConsulting />}
            />

            {/* PAMPHLET DESIGN */}
            <Route
              path="/pamphlet-design"
              element={<PamphletDesign />}
            />

            {/* INVOICE DESIGN */}
            <Route
              path="/invoice-design"
              element={<InvoiceDesign />}
            />

            <Route
              path="/:lang/invoice-design"
              element={<InvoiceDesign />}
            />

            {/* APP PRIVACY POLICIES */}

            <Route
              path="/apps/world-clock/privacy-policy"
              element={<WorldClockPrivacyPolicy />}
            />

            <Route
              path="/apps/world-clock/privacy-policy/chinese"
              element={<WorldClockPrivacyPolicyChinese />}
            />

            <Route
              path="/apps/cgpa-sgpa-calculator/privacy-policy"
              element={<CGPASGPAPrivacyPolicy />}
            />

            <Route
              path="/apps/cgpa-sgpa-calculator/privacy-policy/chinese"
              element={<CGPASGPAPrivacyPolicyChinese />}
            />

            <Route
              path="/apps/invoice-maker/privacy-policy"
              element={<InvoiceMakerPrivacyPolicy />}
            />

            <Route
              path="/apps/invoice-maker/privacy-policy/chinese"
              element={<InvoiceMakerPrivacyPolicyChinese />}
            />

            <Route
              path="/apps/file-renamer/privacy-policy"
              element={<FileRenamerPrivacyPolicy />}
            />

            <Route
              path="/apps/file-converter/privacy-policy/chinese"
              element={<FileRenamerPrivacyPolicyChinese />}
            />

            <Route
              path="/apps/file-converter/privacy-policy"
              element={<FileConverterPrivacyPolicy />}
            />

            <Route
              path="/apps/file-converter/privacy-policy/chinese"
              element={<FileConverterPrivacyPolicyChinese />}
            />
           

            <Route
              path="/apps/image-to-pdf/privacy-policy"
              element={<ImageToPDFPrivacyPolicy />}
            />

            <Route
              path="/apps/image-to-pdf/privacy-policy/chinese"
              element={<ImageToPDFPrivacyPolicyChinese />}
            />


            <Route
              path="/apps/web-codshop/privacy-policy"
              element={<WebCodshopPrivacyPolicy />}
            />

            <Route
              path="/apps/web-codshop/privacy-policy/chinese"
              element={<WebCodshopPrivacyPolicyChinese />}
            />

            <Route
              path="/apps/pdf-lock-unlock/privacy-policy"
              element={<PDFLockUnlockPrivacyPolicy />}
            />

            <Route
              path="/apps/pdf-lock-unlock/privacy-policy/chinese"
              element={<PDFLockUnlockPrivacyPolicyChinese />}
            />

            <Route
              path="/apps/web-codshop/delete-account"
              element={<WebCodshopDeleteAccount />}
            />

            {/* APP DEVELOPMENT SUB-PAGES */}

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

            {/* SOFTWARE DEVELOPMENT SUB-PAGES */}

            <Route
              path="/software-development/school-erp-system"
              element={<SchoolERPSystem />}
            />

            <Route
              path="/software-development/hospital-management-system"
              element={<HospitalManagementSystem />}
            />

            {/* LOCATION SEO PAGES */}

            <Route
              path="/web-development-davanagere"
              element={<WebDevelopmentDavanagere />}
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

            {/* PAYPAL */}

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