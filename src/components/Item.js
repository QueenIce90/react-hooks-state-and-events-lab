import React, {useState} from "react";
function Item({ name, category }) {   
  const [itemInCart, setItemInCart] = useState(false); 

  function UpdateItemInCart() {   
    setItemInCart((itemInCart) => !itemInCart);   
    console.log(itemInCart)  }  
    
    const isItemInCart = itemInCart ? "in-cart" : ""    

    
    return (<li className={isItemInCart}>      
     <span>{name}</span>       
     <span className="category">{category}</span>      
      <button className={itemInCart ? "remove" : "add"} onClick={UpdateItemInCart} >{itemInCart ? "Remove from cart" : "Add to cart"} </button>   
        </li>   
        );
       }  


export default Item;
     