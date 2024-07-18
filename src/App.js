import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import ScreenScaleProvider from './components/ScreenScaling/ScreenScaleProvider';

function App() {
  return (
    <div>
      <ScreenScaleProvider>
    <Routes>
    
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>

    </ScreenScaleProvider>

    </div>
  );
}

export default App;
