import './App.css';
import { About } from './components/About';
import { IconsText } from './components/IconsText';
import { Projects } from './components/Projects';
import { Slider } from './components/Slider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/SideBar/Sidebar';
import Overview from './pages/overview';
import { FC } from 'react';

const App: FC = () => {

  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" component={Overview} exact></Route>
      </Switch>
      <Slider />
      <IconsText />
      <About />
      <Projects />
    </Router>
  );
}

export default App;
