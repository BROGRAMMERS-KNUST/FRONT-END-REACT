//fonts imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
//css files
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Background from "./Components/Main/Background";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import PhotograhyPage from "./Pages/PhotograhyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import FoodServicesPage from "./Pages/FoodServicesPage";
import WritingAndTranslationPage from "./Pages/WritingAndTranslationPage";

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

export default App;
