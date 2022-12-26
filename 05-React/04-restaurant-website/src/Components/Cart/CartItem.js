import React,{useContext} from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";


 const CartItem = (props) => {
   
    const cartCtx = useContext(CartContext);

    const decrementHandler =()=>{
        const newItem ={
            id: parseInt(props.item.id),
            name : props.item.name,
            price : parseInt(props.item.price),
            amount : parseInt(props.item.amount) 
           }

           console.log(newItem)

       cartCtx.removeItem(newItem);
    }

    const incrementByOneHandler =()=>{
        const newItem ={
            id: parseInt(props.item.id),
            name : props.item.name,
            price : parseInt(props.item.price),
            amount : parseInt(props.item.amount) 
           }

           console.log(newItem)

       cartCtx.addItemByOne(newItem);
    }
  return (
        <li className={classes["cart-item-margin"]}>
          <span>{props.item.name}</span>
          <span className={classes["amount-number-cartItem"]}>{` ${props.item.amount} X ${props.item.price}`}</span>
          <span  className={classes["increment-decrement"]}><button onClick={incrementByOneHandler}  type="click" >+</button><button onClick={decrementHandler} type="click" >-</button></span>
        </li>
  )
}
export default CartItem
