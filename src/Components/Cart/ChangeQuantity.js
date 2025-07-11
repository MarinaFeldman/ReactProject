const CangeQuantity = ({quantity, setQuantity}) => {

const addQuantity =()=>{
    const newQuantity = quantity + 1;
    setQuantity(newQuantity)
}

const removeQuantity =()=>{
    if (quantity <= 1) return;
    const newQuantity = quantity -1;
    setQuantity(newQuantity)

}
    return(
        <div>
            <button className="buttonReadSmall" onClick={addQuantity}>+</button>
            <span>{quantity}</span>
            <button className="buttonReadSmall" onClick={removeQuantity}>-</button>
        </div>
    )
}

export default CangeQuantity;