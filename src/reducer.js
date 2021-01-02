import { StateContext } from "./StateProvider";

export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal= (basket)=>
  basket?.reduce((amount, item)=>item.price + amount, 0);


const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
        const index=state.basket.findIndex(
          (basketItem)=> basketItem.id===action.id
        );
        let newBasket = [...state.basket];
        if(index>=0){
            newBasket.splice(index, 1);
        } else{
          console.warn(`Cant remove product (id: ${action.id}) as its not
          in the basket.`)
        }
        return{
          ...state,
          basket: newBasket
        }
     /* return {
        ...state,
        basket: state.basket.filter(item=> item.id!==action.id),
      };*/
      //if we use this we do this by using id as the thing to filter out
      //and then removes all items with that id
      //therefore we then use the index of that item from which the
      //action has been taken
    case "SET_USER":
      return{
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;
