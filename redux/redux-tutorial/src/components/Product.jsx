import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice1';

function Product() {

    // const [products,getProducts] = useState([]);
    const dispatch = useDispatch();
    const {data:products} = useSelector(state => state.products);


    // useEffect(() => {

    
    //   fetch("https://fakestoreapi.com/products")
    //   .then(data => data.json())
    //   .then(result => getProducts(result)) 
     
    // }, []);

    useEffect(() => {
     dispatch(getProducts());
    }, [])
    

    

    const addToCart = (product) =>{
      dispatch(add(product));
      
    }

    const cards = products.map(product => ( 
        <div className='shop-items'>
            <img style={{"width":"100px"}} src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={()=>addToCart(product)}>Add to chart</button>
        </div>
    ))

  return (
    <div>
        <h1>Product Dashboard</h1>
       <div>
       {cards}
       </div>
    </div>
  )
}

export default Product