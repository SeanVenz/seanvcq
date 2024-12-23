import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <main className='bg-main w-full h-screen flex items-center justify-center'>
      {/* <Navbar/>
      <Home/>
      <About/> */}
      <UnderConstruction/>
    </main>
  );
}

export default App;
