
import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const isPresent = state.items.find((obj) => obj.id === action.item.id);
    const isboolean = isPresent === undefined ? false : true;
    if (!isboolean) {
      const updatedItems = state.items.concat(action.item);
      const newTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      // console.log(action.item.amount)
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    } else {
      const updatedItems = state.items.map((item) => {
        if (item.id == action.item.id) {
          return { ...item, amount: item.amount + action.item.amount };
        }
        return item;
      });
      const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }
  } else if (action.type === "REMOVE") {
    // console.log("removing ")
    // console.log(state.items)
    //console.log(action.item)
    if(action.item.amount >0){
    const updatedItems = state.items.map((item) => {
      if (item.id == action.item.id) {
        // console.log(item)
        return { ...item, amount: action.item.amount - 1 };
      }
      return item;
    });
    const newTotalAmount = state.totalAmount - action.item.price;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }else{
    alert("Cannot remove items")
      return {
        items : state.items,
        totalAmount : state.totalAmount
      }
    
  }
  } else if (action.type === "ADDBYONE") {
    // console.log("removing ")
    // console.log(state.items)
    //console.log(action.item)
    const updatedItems = state.items.map((item) => {
      if (item.id == action.item.id) {
        // console.log(item)
        return { ...item, amount: action.item.amount + 1 };
      }

      return item;
    });
    const newTotalAmount = state.totalAmount + action.item.price;
    return {
      items: updatedItems,
      totalAmount: newTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const addItemByOneHandler = (item) => {
    dispatchCartAction({ type: "ADDBYONE", item: item });
  };

  //const incrementHandler = (id) => {};
  //const decrementHandler = () => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    addItemByOne: addItemByOneHandler,
    // increment: incrementHandler,
    // decrement: decrementHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
