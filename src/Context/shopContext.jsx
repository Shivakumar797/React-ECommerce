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
          console.log("Previous Cart Items:", prev);
          return { ...prev, [itemId]: prev[itemId] + 1 };
        });
      };

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue={all_product,cartItems,addToCart,removeFromCart};
    return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>)
}

export default ShopContectProvider