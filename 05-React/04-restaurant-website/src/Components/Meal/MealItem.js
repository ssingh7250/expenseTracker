import React , {useRef , useContext} from 'react'
import CartContext from '../../store/cart-context'
import './MealItem.css'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)
  const inputAmountRef = useRef()

  const submitHandler =(event)=>{
   event.preventDefault();
   const newItem ={
    id: parseInt(props.id),
    name : props.name,
    price : parseInt(props.price),
    amount : parseInt(inputAmountRef.current.value) 
   }
   cartCtx.addItem(newItem)
   console.log(newItem)
   inputAmountRef.current.value =""
  }
  return (
    <div className='flex-container'>
    <div className='mealitem card-body'>
        <h4 className='item-name'>{props.name}</h4>
        <h6 className='item-desc'>{props.desc}</h6>
        <h3 className='item-price'>{`$ ${props.price}`}</h3>
    </div>
    <form onSubmit={submitHandler} className='container-add-item'>
      <div><label className='label-meal'>Amount</label><input ref={inputAmountRef}  className='input-meal'  type="number"/></div>
      <button type='submit' className='add-button-meal'>+ Add</button>
    </form>
    </div>
  )
}

export default MealItem
