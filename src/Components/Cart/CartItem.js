import dataSouvenirs from '../../souvenirsData/dataSouvenirs';
import { useDispatch } from "react-redux";
import {removeItemFromCart} from '../../redux/cartSlice';

const CartItem =({cartItem}) => {

    const souvenirs = dataSouvenirs.find(item => item.id === cartItem.souvenirId);
    const dispatch = useDispatch();


    return(
        <div>
            <p>{souvenirs.name}</p>
            <p>{cartItem.quantity} pice(s)</p>
            <p>Price:{souvenirs.price  * cartItem.quantity} €</p>
            <span onClick={() =>dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
            <img className="trashIcon" src="https://images.unsplash.com/vector-1738926676021-fd7dcf580cdd?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt='remove'/> 
            </span>
        </div>
    )
}

export default CartItem;