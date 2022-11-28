import React from 'react';
// import add from'./add.png'
import './cartItem.css';
class cartItem extends React.Component{
    constructor(){
        super()
        this.state={
            title:"Samsung Galaxy F12",
            price:"12999",
            quantity:5,
            img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
        };
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
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/3303/3303893.png' alt='add'></img>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/1828/1828906.png' alt='minus'></img>
                        <img className='action-button' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' alt='delete'></img>
                        

                    </div>
                </span>
            </div>
        );
    }
}

export default cartItem;