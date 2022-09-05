//fonts imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//css files
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//Components
import Background from './Components/Background';
import Main from './Components/Main';
import Header from './Components/Header';
import PhotograhyPage from './pages/PhotograhyPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path = "/">
          <Background />
          <Main />
        </Route>
        <Route exact path="/photography">
          <PhotograhyPage/>
        </Route>
      </Switch> 
    </div>
    </Router>
  );
}

export default App;
