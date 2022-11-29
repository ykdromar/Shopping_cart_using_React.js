import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super()
    this.state={
        products:[
        {
            id:1,
            title:"Samsung Galaxy F12",
            price:"12999",
            quantity:1,
            img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
        },
        {
            id:2,
            title:"Samsung Galaxy F12",
            price:"12999",
            quantity:1,
            img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
        },
        {
            id:3,
            title:"Samsung Galaxy F13",
            price:"12999",
            quantity:1,
            img:'https://www.gizmochina.com/wp-content/uploads/2021/04/cats-500x500.jpg'
        },
        ],
    };
}

handelIncreaseQuantity=(product)=>{
    console.log("increase",product);
    const {products}=this.state;
    const idx=products.indexOf(product);
    products[idx].quantity+=1;
    this.setState({
        products:products
    })
}
handelDecreaseQuantity=(product)=>{
    console.log("Decrease",product);
    const{products}=this.state;
    const idx=products.indexOf(product);
    if(products[idx].quantity>1){
        products[idx].quantity-=1;
        this.setState({
            products:products
        });
    }
    else if(products[idx].quantity==1){
      this.handelDeleteProduct(products[idx].id);
    }
}
handelDeleteProduct=(id)=>{
    console.log("delete",id);
    const {products}=this.state;
    const newProducts=products.filter((product)=>product.id!==id);
    this.setState({
        products:newProducts
    })
}

getCount=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count+=product.quantity;
  });
  return count;
}

getTotalPrice=()=>{
  const{products}=this.state;
  let totalPrice=0;
  products.forEach((product)=>{
    totalPrice+=(product.quantity*product.price);
  });
  return totalPrice;
}
  render (){
    const {products}=this.state;
      return(
      <div className="App">
        <Navbar
        count={this.getCount}
        />
        <Cart 
        products={products} 
        handelIncreaseQuantity={this.handelIncreaseQuantity}
        handelDecreaseQuantity={this.handelDecreaseQuantity}
        handelDeleteProduct={this.handelDeleteProduct}
        />
        <div id="total-price">Total Price: {this.getTotalPrice()}</div>
      </div>
      
      );
  }
}

export default App;
