import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
