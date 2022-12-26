import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const sendCartData = (cart) => {
    return async (dispatch) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending ...",
          message: "Sendding Cart data",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(
          `https://redux-proj1-default-rtdb.firebaseio.com/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
  
        if (!response.ok) {
          throw new Error("Sending cart data Failed");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(
          uiActions.showNotification({
            status: "Success",
            title: "Success!",
            message: "Sendding Cart data successfully",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sendding Cart data failed",
          })
        );
      }
    };
  };


export const fetchCartData=()=>{
    return async dispatch =>{
        const fetchData=async()=>{
            const response = await fetch(
                `https://redux-proj1-default-rtdb.firebaseio.com/cart.json`
              );
        
              if (!response.ok) {
                throw new Error("Could not fetch cart data");
              }

              const data = await response.json()

              return data;
        }

        try{
            const cartData =await fetchData()
            dispatch(cartAction.replaceCart(cartData))

        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching Cart data failed",
                })
              );
        }
    }
}  