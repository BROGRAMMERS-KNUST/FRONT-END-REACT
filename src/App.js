//fonts imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useEffect } from 'react';
//css files
<<<<<<< HEAD
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Background from "./components/Main/Background";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import PhotograhyPage from "./Pages/PhotograhyPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import GraphicDesignPage from "./Pages/GraphicDesignPage";
import FoodServicesPage from "./Pages/FoodServicesPage";
import WritingAndTranslationPage from "./Pages/WritingAndTranslationPage";
import Dashboard from "./Pages/Dashboard";
import AboutUS from "./Pages/AboutUS";
const user = JSON.parse(localStorage.getItem("profile"));
=======
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background from './components/Main/Background';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import PhotograhyPage from './Pages/PhotograhyPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import GraphicDesignPage from './Pages/GraphicDesignPage';
import FoodServicesPage from './Pages/FoodServicesPage';
import WritingAndTranslationPage from './Pages/WritingAndTranslationPage';
import Dashboard from './Pages/Dashboard';
const user = JSON.parse(localStorage.getItem('profile'));
>>>>>>> d37b83877bd71744de14886bf8387b69a4cbfe36

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Background />
              <Main />
            </Route>
            <Route exact path='/photography'>
              <PhotograhyPage />
            </Route>
            <Route exact path='/graphic-design'>
              <GraphicDesignPage />
            </Route>
            <Route exact path='/food-services'>
              <FoodServicesPage />
            </Route>
            <Route exact path='/writing&translation'>
              <WritingAndTranslationPage />
            </Route>
<<<<<<< HEAD
            <Route exact path="/about-us">
              <AboutUS />
            </Route>
=======
            <Route exact path='/forgetpassword'></Route>
>>>>>>> d37b83877bd71744de14886bf8387b69a4cbfe36
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
