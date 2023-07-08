import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navbar/Navigation';
import Banner from './components/banner/banner';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
    </div>
  );
}

export default App;
