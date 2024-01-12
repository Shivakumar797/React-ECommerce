import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar.jsx';
import Shop from './Pages/shop.jsx';
import LoginSignup from './Pages/loginSignup.jsx';
import ShopCategory from './Pages/shopCategory.jsx';
import Cart from './Pages/cart.jsx';
import Product  from './Pages/product.jsx';   
import Footer from './Components/Footer/footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category='men' />}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />}/>
        <Route path='/kids' element={<ShopCategory   banner={kids_banner} category='kid' />}/>
        <Route path='/product/:productId' element={<Product  />}/>
        <Route path='/cart' element={<Cart  />}/>
        <Route path='/login' element={<LoginSignup  />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
