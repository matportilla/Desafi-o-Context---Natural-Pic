import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PhotoProvider } from './contexts/PhotoContext';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Favorites from './views/Favorites';
import NotFound from './views/NotFound';


function App() {

  return (
    <>
      <PhotoProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PhotoProvider>

    </>
  );
}

export default App;
