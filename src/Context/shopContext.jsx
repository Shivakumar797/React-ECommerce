import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product';
import { useState ,useEffect} from 'react';

export const ShopContext=createContext(null)
const getDefaultCart=()=>{
    let cart={};
    for (let index=0; index <all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}


const ShopContectProvider=(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());

    useEffect(() => {
        console.log("Cart Items Updated:", cartItems);
        // Any other actions you want to perform after the state is updated
      }, [cartItems]);
    const addToCart = (itemId) => {
        setCartItems((prev) => {
          return { ...prev, [itemId]: prev[itemId] + 1 };
        });
      };

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
 

    const getTotalCartAmount=()=>{
      let totalAmount=0;
      for(const item in cartItems){
        if(cartItems[item]>0){
          let itemInfo=all_product.find((product)=>product.id===Number(item))
          totalAmount+=itemInfo.new_price*cartItems[item];
        }
      }
      return totalAmount;
    }

    const  getTotalCartItems=()=>{
      let totalItem=0;
      for( const item in cartItems){
        if(cartItems[item]>0){
          totalItem+=cartItems[item];

        }
      }
      return totalItem;
    }
    const contextValue={all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};
    return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}

export default ShopContectProvider