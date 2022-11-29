import React from 'react';
// import add from'./add.png'
import './cartItem.css';
const CartItem=(props)=> {
    

    // increaseQuantity=()=>{
    //     //form 1 setState(), when previous state is not required
    //     // this.setState({
    //     //     quantity:this.state.quantity+1
    //     // });

    //     // form 2 setState() when previous state is required 
    //     this.setState((prevState)=>{
    //         return{
    //             quantity:prevState.quantity+1
    //         }
    //     });
    // }
    // decreaseQuantity=()=>{
    //     // form 1 setState() 
    //     // if(this.state.quantity!==0){
    //     //     this.setState({
    //     //         quantity:this.state.quantity-1
    //     //     });
    //     // }

    //     // form 2 setState()
    //     if(this.state.quantity!==0){
    //         this.setState((prevState)=>{
    //             return{
    //                 quantity:prevState.quantity-1
    //             }
    //         });
    //     }
    // }


    
        const {img,title,price,quantity}=props.product;
        const {product,handelDecreaseQuantity,handelIncreaseQuantity,handelDeleteProduct}=props;
        return(
            <div className='cartItem'>
                <span className='icon'><img className='img' src={img} alt='f12'></img></span>
                <span className='details'>
                    <div id='title'>{title}</div>
                    <div id='price'>Price: {price} Rs</div>
                    <div id='quantity'>Quantity: {quantity}</div>
                    <div id='actions'>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/3303/3303893.png' alt='add' onClick={()=>{handelIncreaseQuantity(product)}}></img>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png' alt='minus' onClick={()=>handelDecreaseQuantity(product)}></img>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='delete' onClick={()=>handelDeleteProduct(product.id)}></img>
                        

                    </div>
                </span>
            </div>
        );
    
}

export default CartItem;