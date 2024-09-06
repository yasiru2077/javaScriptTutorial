import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";


const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    dispatch(remove(id));
  }
  
  return (
    <>
      <h2>Cart</h2>
      <div>
       {
        productCart.map(
          product => (
            <div className='shop-items' key={product.id}>
            <img style={{"width":"100px"}} src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => removeToCart(product.id)}>remove item</button>
            </div>
          )
       )}
      </div>
   <div>

   </div>
    </>
  );
};

export default Cart;
