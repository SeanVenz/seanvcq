import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navigation from './components/navbar/Navigation';
import Banner from './components/banner/banner';
import About from './components/about/about';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </div>
  );
}

export default App;
