import React from "react";
import Background from "../Components/Main/Background";
import Main from "../Components/Main/Main";
import Header from "../Components/Header/Header";
import PhotograhyPage from "./PhotograhyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import GraphicDesignPage from "./GraphicDesignPage";
import FoodServicesPage from "./FoodServicesPage";
import WritingAndTranslationPage from "./WritingAndTranslationPage";

function Home() {
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
            <Route exact path="/photography">
              <PhotograhyPage />
            </Route>
            <Route exact path="/graphic-design">
              <GraphicDesignPage />
            </Route>
            <Route exact path="/food-services">
              <FoodServicesPage />
            </Route>
            <Route exact path="/writing&translation">
              <WritingAndTranslationPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default Home;
