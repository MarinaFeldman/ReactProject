import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice} from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart =() => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            <img className="cartIcon" 
            src="https://images.unsplash.com/vector-1739804244271-63e0509a56e9?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="add"/> 
            {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
            <h3>TOTAL: {totalPrice} €</h3>
        </div>
    )
}

export default Cart;