import React ,{useState}from "react";
import Header from "./Components/Layout/Header";
import Card from "./Components/UI/Card";
import Meals from "./Components/Meal/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const[cartIsShow , setCartIsShow]=useState(false)

  const showCartHandler=()=>{
    setCartIsShow(true)
  }
  const hideCartHandler=()=>{
    setCartIsShow(false)
  }
  return (
   <CartProvider>
   {cartIsShow && <Cart onHideCart={hideCartHandler} />}
     <Header onShowCart={showCartHandler} />
     <Card />
     <Meals />
   </CartProvider>
  )
}

export default App;
