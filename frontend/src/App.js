
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductAddForm from './components/ProductAddForm';
import ProductEditForm from './components/ProductEditForm';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<ProductList/>} />
      <Route path="/products/add" element={<ProductAddForm/>} />
      <Route path="/products/edit/:id" element={<ProductEditForm/>} />
    </Routes>
   </>
  );
}

export default App;
