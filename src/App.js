import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className='bg-main w-full h-full'>
      <Navbar/>
      <Home/>
      <About/>
    </main>
  );
}

export default App;
