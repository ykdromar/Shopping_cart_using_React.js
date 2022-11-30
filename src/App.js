import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import 'firebase/firestore';
// import app from './index';
import { initializeApp } from "firebase/app";
import { getFirestore,collection, onSnapshot,doc, updateDoc, deleteDoc } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';


// Initialize Firebase
const app=initializeApp(firebaseConfig);

const db=getFirestore(app);
class App extends React.Component {
  constructor(){
    super()
    this.state={
        products:[],
        loading:true,
    };
}

 async componentDidMount(){

  // without sync with firebase
//   let products=[];
//   let i=1;
//  var docs=await getDocs(collection(db,'/products'))
// docs.forEach((doc)=>{
//   let product=doc.data();
//   product['id']=i++;
//   products.push(product);
// })
// console.log("mount");
// console.log(products);
// this.setState({
//   products,
//   loading:false

// });

// sync with firebase using listener
let products=[];
  // let i=1;
 onSnapshot(collection(db, '/products'),(snapshot)=>{
  // console.log(snapshot);
  products=snapshot.docs.map((doc)=>{
    console.log(doc.data());
    let product= doc.data();
    product['id']=doc.id;
    return product;
  });
    this.setState({
      products,
      loading:false
    })
 });
 

}
componentWillUnmount(){
  console.log("unmount");
}

handelIncreaseQuantity=(product)=>{
    console.log("increase",product);
    // const {products}=this.state;
    // const idx=products.indexOf(product);
    //this was for without firebase
    // products[idx].quantity+=1;
    // this.setState({
    //     products:products,
    // })

    //with firebase 
    let docRef=doc(db,'/products',product.id);
    updateDoc(docRef,'quantity',product.quantity+1);
    

}
handelDecreaseQuantity=(product)=>{
    console.log("Decrease",product);
    const{products}=this.state;
    const idx=products.indexOf(product);
    if(products[idx].quantity>0){
      //without firebase
        // products[idx].quantity-=1;
        // this.setState({
        //     products:products
        // });

        //with firebase
        let docRef=doc(db,'/products',product.id);
        updateDoc(docRef,'quantity',products[idx].quantity-1);
    }
    
}
handelDeleteProduct=(id)=>{
  //without firebase
    // console.log("delete",id);
    // const {products}=this.state;
    // const newProducts=products.filter((product)=>product.id!==id);
    // this.setState({
    //     products:newProducts
    // })

    //with firebase
    let docRef=doc(db,'/products',id);
    deleteDoc(docRef);
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
    const {products,loading}=this.state;
    console.log("render");
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
        {loading&&<h3>Loading, Please Wait...</h3>}
      </div>
      
      );
  }
}

export default App;
