import { useState } from 'react';
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import About from './components/About/about';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product';
import PP110Details from './components/ProductDetails/PP110Details';
import PP211Details from './components/ProductDetails/PP211Details';
import PP311Details from './components/ProductDetails/PP311Details';
import PM300Details from './components/ProductDetails/PM300Details';
import PM300BDetails from './components/ProductDetails/PM300BDetails';
import PR400Details from './components/ProductDetails/PR400Details';
import PMTL6901Details from './components/ProductDetails/PMTL6901Details';
import PMTL7630Details from './components/ProductDetails/PMTL7630Details';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />} />
        <Route about element ={<About/>}></Route>
        <Route path='/product' element={<Product />} />
        <Route path='/pp110' element={<PP110Details />} />
        <Route path='/pp211' element={<PP211Details />} />
        <Route path='/pp311' element={<PP311Details />} />
        <Route path='/pm300' element={<PM300Details />} />
        <Route path='/pm300b' element={<PM300BDetails />} />
        <Route path='/pr400' element={<PR400Details />} />
        <Route path='/pmtl6901' element={<PMTL6901Details />} />
        <Route path='/pmtl7630' element={<PMTL7630Details />} />
        <Route product element ={<product/>}></Route>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
