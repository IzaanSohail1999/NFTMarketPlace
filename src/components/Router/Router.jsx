import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import AboutPage from '../AboutPage/AboutPage';

function Router(props){
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/about" element={<AboutPage />} /> 
        </Routes>
      </BrowserRouter>
    );
}

export default Router;