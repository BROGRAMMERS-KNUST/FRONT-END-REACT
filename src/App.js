//fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
//css files
import "./App.css";
import Background from "./components/Main/Background";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import PhotograhyPage from "./Pages/PhotograhyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Background />
              <Main />
            </Route>
            <Route path="/photography">
              <PhotograhyPage />
            </Route>
            <Route path="/graphic-design">
              <GraphicDesignPage />
            </Route>
            <Route path="/webby">
              <Webby />
            </Route>
            <Route path="/food-services">
              <FoodServicesPage />
            </Route>
            <Route path="/writing&translation">
              <WritingAndTranslationPage />
            </Route>
            <Route path="/freelancerpage">
              <FreelancerPage />
            </Route>
            <Route path="/freelancerinfo">
              <FreelancerInfo />
            </Route>
            <Route path="/portfoliopage">
              <PortfolioPage />
            </Route>
            <Route path="/about-us">
              <AboutUS />
            </Route>
            <Route exact path="/about-us_individual-roles">
              <IndividualRoles />
            </Route>

            <Route path="/updateprofile">
              <UpdateProfile />
            </Route>
          </Switch>
          <FooterMain />
        </div>
      </Router>
    </div>
  );
}

export default App;
