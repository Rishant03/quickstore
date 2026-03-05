import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import {useState} from "react";

function App(){

const [cart,setCart]=useState([]);

const addToCart=(product)=>{
setCart([...cart,product]);
};

return(
<>
<Navbar cartCount={cart.length}/>

<Routes>
<Route path="/" element={<Home addToCart={addToCart}/>}/>
<Route path="/product/:id" element={<Product addToCart={addToCart}/>}/>
<Route path="/cart" element={<Cart cart={cart}/>}/>
</Routes>

</>
);
}

export default App;