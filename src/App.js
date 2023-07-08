import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar/Navigation';
import Banner from './components/banner/banner';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
    </div>
  );
}

export default App;
