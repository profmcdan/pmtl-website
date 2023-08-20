import { useState } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// import './App.css';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Footer from './components/Footer/Footer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<Home />} />
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
