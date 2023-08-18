import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import PhotograhyPage from "./Pages/PhotograhyPage";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import FoodServicesPage from "./Pages/FoodServicesPage";
import WritingAndTranslationPage from "./Pages/WritingAndTranslationPage";
import FreelancerPage from "./Pages/FreelancerPage";
import FreelancerInfo from "./components/FreelancerInfo";
import PortfolioPage from "./Pages/PortfolioPage";
import FooterMain from "./components/Footer/FooterMain";
import AboutUS from "./Pages/AboutUS";
import Webby from "./Pages/Webby";
import UpdateProfile from "./components/UpdateProfile";
import IndividualRoles from "./components/AboutUs/IndividualRoles";
import LandingCarousel from "./components/Main/LandingCarousel";
import Background1 from "./components/Main/Background1";
import Background2 from "./components/Main/Background2";
import ForgotPassword from "./components/Auth/ForgotPassword";
import UpdateProfileHirer from "./components/UpdateProfileHirer";
import OtherInfo from "./components/OtherInfo";
import Background3 from "./components/Main/Background3";
import Page404 from "./components/Page404";
import ResetPassword from "./components/Auth/ResetPassword";
import ForgotPasswordHirer from "./components/Auth/ForgotPasswordHirer";
import ResetPasswordHirer from "./components/Auth/ResetPasswordHirer";
import ChangePasswordHirer from "./components/ChangePasswordHirer";

function App() {
  return (
    <div className="patternbackground">
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <LandingCarousel />
                  <Background1 />
                  <Main />
                  <Background3 />
                  <Background2 />
                </>
              }
            />
            <Route path="/photography" element={<PhotograhyPage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/webdevelopment" element={<Webby />} />
            <Route path="/food-services" element={<FoodServicesPage />} />
            <Route
              path="/writing&translation"
              element={<WritingAndTranslationPage />}
            />
            <Route path="/freelancerpage" element={<FreelancerPage />} />
            <Route path="/freelancerinfo" element={<FreelancerInfo />} />
            <Route path="/portfoliopage" element={<PortfolioPage />} />
            <Route path="/about-us" element={<AboutUS />} />
            <Route
              path="/about-us_individual-roles"
              element={<IndividualRoles />}
            />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route
              path="/passwordrecovery-servicer"
              element={<ForgotPassword />}
            />
            <Route
              path="/passwordrecovery-hirer"
              element={<ForgotPasswordHirer />}
            />
            <Route
              path="/updateprofilehirer"
              element={<UpdateProfileHirer />}
            />
            <Route path="/otherinfo" element={<OtherInfo />} />
            <Route
              path="/reset-password/:id/:token"
              element={<ResetPassword />}
            />
            <Route
              path="/changepassword-hirer"
              element={<ChangePasswordHirer />}
            />
            <Route
              path="/reset-password-hirer/:id/:token"
              element={<ResetPasswordHirer />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <FooterMain />
        </div>
      </Router>
    </div>
  );
}

export default App;
