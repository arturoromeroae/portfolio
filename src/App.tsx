import './App.css';
import { About } from './components/About';
import { IconsText } from './components/IconsText';
import { Projects } from './components/Projects';
import { Slider } from './components/Slider';

function App() {
  return (
    <div>
      <Slider />
      <IconsText />
      <About />
      <Projects />
    </div>
  );
}

export default App;
