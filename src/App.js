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

//Components
import Background from "./Components/Background";
import Main from "./Components/Main";
import Header from "./Components/Header";
import PhotograhyPage from "./pages/PhotograhyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import FoodServicesPage from "./pages/FoodServicesPage";
import WritingAndTranslationPage from "./pages/WritingAndTranslationPage";

function App() {
  return (
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
  );
}

export default App;
