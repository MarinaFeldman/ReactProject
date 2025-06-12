import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";

const Souvenir = ({souvenir}) => {

const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch()
    return(
        <div className="souvrnirCard">
        <img src={`./${souvenir.img}.jpg`} alt={souvenir.name} width="300" />
        <h2>{souvenir.name}</h2>
        <p>{souvenir.price} €</p>
        <div className="changeQuantity">
        <ChangeQuantity  quantity = {quantity} setQuantity={setQuantity}/>
        <button className="buttonReadSmall" onClick={() => {dispatch(addItemToCart({souvenir, quantity}))}}>ADD to Cart</button>
        </div>
        </div>
    )
}

export default Souvenir;