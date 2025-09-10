import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page from './Page'
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';
import AboutPage from './Pages/AboutPage';
import TeamPage from './Pages/TeamPage';
import CreatorsPage from './Pages/CreatorsPage';
import PartnersPage from './Pages/PartnersPage';
import NewsPage from './Pages/NewsPage';
import ContactPage from './Pages/ContactPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page child={<HomePage/>}/>} />
        <Route path="/shop" element={<Page child={<ShopPage/>}/>} />
        <Route path="/about" element={<Page child={<AboutPage/>}/>} />
        <Route path="/team" element={<Page child={<TeamPage/>}/>} />
        <Route path="/creators" element={<Page child={<CreatorsPage/>}/>} />
        <Route path="/partners" element={<Page child={<PartnersPage/>}/>} />
        <Route path="/news" element={<Page child={<NewsPage/>}/>} />
        <Route path="/contact" element={<Page child={<ContactPage/>}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
