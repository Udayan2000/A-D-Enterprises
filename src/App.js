
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Whychooseus from './Pages/Whychooseus/Whychooseus';
import Blog from './Pages/Blog/Blog';
import Contactus from './Pages/Conatctus/Contactus';
import Ourportfolio from './Pages/Ourportfolio/Ourportfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/whychooseus' element={<Whychooseus />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/ourportfolio' element={<Ourportfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
