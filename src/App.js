//fonts imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
//css files
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import PhotograhyPage from './Pages/PhotograhyPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GraphicDesignPage from './Pages/GraphicDesignPage';
import FoodServicesPage from './Pages/FoodServicesPage';
import WritingAndTranslationPage from './Pages/WritingAndTranslationPage';
import FreelancerPage from './Pages/FreelancerPage';
import FreelancerInfo from './components/FreelancerInfo';
import PortfolioPage from './Pages/PortfolioPage';
import FooterMain from './components/Footer/FooterMain';
import AboutUS from './Pages/AboutUS';
import Webby from './Pages/Webby';
import UpdateProfile from './components/UpdateProfile';
import IndividualRoles from './components/AboutUs/IndividualRoles';
import LandingCarousel from './components/Main/LandingCarousel';
import Background1 from './components/Main/Background1';
import Background2 from './components/Main/Background2';
import ForgotPassword from './components/Auth/ForgotPassword';
import UpdateProfileHirer from './components/UpdateProfileHirer';
import OtherInfo from './components/OtherInfo';
import Background3 from './components/Main/Background3';
import Page404 from './components/Page404';
import ResetPassword from './components/Auth/ResetPassword';
import ForgotPasswordHirer from './components/Auth/ForgotPasswordHirer';
import ResetPasswordHirer from './components/Auth/ResetPasswordHirer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/'>
              <LandingCarousel />
              <Background1 />
              <Main />
              <Background3 />
              <Background2 />
            </Route>
            <Route path='/photography'>
              <PhotograhyPage />
            </Route>
            <Route path='/graphic-design'>
              <GraphicDesignPage />
            </Route>
            <Route path='/webdevelopment'>
              <Webby />
            </Route>
            <Route path='/food-services'>
              <FoodServicesPage />
            </Route>
            <Route path='/writing&translation'>
              <WritingAndTranslationPage />
            </Route>
            <Route path='/freelancerpage'>
              <FreelancerPage />
            </Route>
            <Route path='/freelancerinfo'>
              <FreelancerInfo />
            </Route>
            <Route path='/portfoliopage'>
              <PortfolioPage />
            </Route>
            <Route path='/about-us'>
              <AboutUS />
            </Route>
            <Route exact path='/about-us_individual-roles'>
              <IndividualRoles />
            </Route>

            <Route path='/updateprofile'>
              <UpdateProfile />
            </Route>
            <Route path='/passwordrecovery/forgot-password'>
              <ForgotPassword />
            </Route>

            <Route path='/passwordrecovery/forgot-password-hirer'>
              <ForgotPasswordHirer />
            </Route>
            <Route path='/updateprofilehirer'>
              <UpdateProfileHirer />
            </Route>

            <Route path='/otherinfo'>
              <OtherInfo />
            </Route>

            <Route path='/reset-password/:id/:token'>
              <ResetPassword />
            </Route>

            <Route path='/reset-password-hirer/:id/:token'>
              <ResetPasswordHirer />
            </Route>

            <Route path='*'>
              <Page404 />
            </Route>
          </Switch>
          <FooterMain />
        </div>
      </Router>
    </div>
  );
}

export default App;
