import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

// Components
import Header from './components/Header.jsx';
// import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import Basket from './components/Basket.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AnimatePresence initial={false}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <Basket />
      </BrowserRouter>
    </div>
  )
}

export default App
