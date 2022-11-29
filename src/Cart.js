import React from 'react';
import CartItem from'./CartItem';
const Cart=(props)=> {


    
    
        const {products,handelDecreaseQuantity,handelDeleteProduct,handelIncreaseQuantity}=props;
        return(
            <div id='cart'>
            {products.map((product)=>{
                return <CartItem 
                product={product}
                key={product.id}
                handelIncreaseQuantity={handelIncreaseQuantity}
                handelDecreaseQuantity={handelDecreaseQuantity}
                handelDeleteProduct={handelDeleteProduct}
                />
            })}
                
            </div>
        );
    
}

export default Cart;