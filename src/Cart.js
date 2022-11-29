import React from 'react';
import CartItem from'./CartItem';
class Cart extends React.Component{


    constructor(){
        super()
        this.state={
            products:[
            {
                title:"Samsung Galaxy F12",
                price:"12999",
                quantity:1,
                img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
            },
            {
                title:"Samsung Galaxy F12",
                price:"12999",
                quantity:1,
                img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
            },
            {
                title:"Samsung Galaxy F13",
                price:"12999",
                quantity:1,
                img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
            },
            ],
        };
    }

    render(){
        const {products}=this.state;
        return(
            <div id='cart'>
            {products.map((product)=>{
                return <CartItem product={product}/>
            })}
                
            </div>
        );
    }
}

export default Cart;