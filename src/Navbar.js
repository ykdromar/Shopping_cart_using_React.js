import './navbar.css';
const Navbar=(props)=> {
    return (
      <div id="nav">
        <div id='brand'>IITK Campus Mall</div>

        <div id='cart-icon-box'>
            <div id='cart-items-count'>{props.count()}</div>
            <img id='cart-icon' src='https://cdn-icons-png.flaticon.com/512/2838/2838895.png' alt='cart-icon'></img>
        </div>
      </div>
    );
  }
  
  export default Navbar;