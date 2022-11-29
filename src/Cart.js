import React from 'react';
import CartItem from'./CartItem';
class Cart extends React.Component{

    render(){
        return(
            <div id='cart'>
                <CartItem/>
                <CartItem/>
                
            </div>
        );
    }
}

export default Cart;