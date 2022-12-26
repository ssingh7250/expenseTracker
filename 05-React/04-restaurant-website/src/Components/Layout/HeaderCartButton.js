import React ,{useContext} from 'react'
import CartContext from '../../store/cart-context';
import cartIcon from './cartIconwhite.png'
import "./Header.css";



const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curr, item)=>{
    return curr + item.amount
  },0)


  return (
    <button
            type="button"
            className="btn btn-primary header-button"
            style={{ padding: 10 + "px" +" " +70 + "px",
                     borderRadius: 25 + "px" ,
                     
                    }}
            onClick={props.onClick}        
          >
            <img src={cartIcon} />
            Your Cart
            <span className="cartItemsNumber">{numberOfCartItems}</span>
          </button>
  )
}

export default HeaderCartButton
