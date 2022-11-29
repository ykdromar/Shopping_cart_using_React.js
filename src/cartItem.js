import React from 'react';
// import add from'./add.png'
import './cartItem.css';
class CartItem extends React.Component{
    constructor(){
        super()
        this.state={
            title:"Samsung Galaxy F12",
            price:"12999",
            quantity:1,
            img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
        };
    }

    increaseQuantity=()=>{
        //form 1 setState(), when previous state is not required
        // this.setState({
        //     quantity:this.state.quantity+1
        // });

        // form 2 setState() when previous state is required 
        this.setState((prevState)=>{
            return{
                quantity:prevState.quantity+1
            }
        });
    }
    decreaseQuantity=()=>{
        // form 1 setState() 
        // if(this.state.quantity!==0){
        //     this.setState({
        //         quantity:this.state.quantity-1
        //     });
        // }

        // form 2 setState()
        if(this.state.quantity!==0){
            this.setState((prevState)=>{
                return{
                    quantity:prevState.quantity-1
                }
            });
        }
    }
    render(){
        const {title,price,quantity,img}=this.state;
        
        return(
            <div className='cartItem'>
                <span className='icon'><img className='img' src={img} alt='f12'></img></span>
                <span className='details'>
                    <div id='title'>{title}</div>
                    <div id='price'>Price: {price} Rs</div>
                    <div id='quantity'>Quantity: {quantity}</div>
                    <div id='actions'>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/3303/3303893.png' alt='add' onClick={this.increaseQuantity}></img>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png' alt='minus' onClick={this.decreaseQuantity}></img>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='delete'></img>
                        

                    </div>
                </span>
            </div>
        );
    }
}

export default CartItem;