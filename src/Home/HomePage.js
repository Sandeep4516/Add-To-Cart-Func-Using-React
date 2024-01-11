import React, { useEffect, useState } from 'react';
import '../Home/HomePage.css'
export default function HomePage() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    const addToCart = (productId) => {
        const selectedProduct = data.find(item => item.id === productId);
        if (selectedProduct) {
            setCart([...cart, selectedProduct]);
            alert("added to cart")
        }
    };

    const removeFromCart=(productId)=>{
        const updatedCart=cart.filter(item=>item.id !==productId);
            setCart(updatedCart);
            alert("removing from Cart");
    }

    const calculateTotalPrice=()=>{
        return cart.reduce((total,item)=>total+item.price,0).toFixed(3)
    }

    return (
        <div className='container-fluid'>
      <div className='row'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#" >AddToCart</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-auto">
          <a className="nav-link active" aria-current="page" href="#">HomePage</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
      </div>
      



            <div className='row py-3' id='HomePageBody'>
                <div className='col-lg-9'>
                    {/* Product List Section */}
                    <div className='row'>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map(item => (
                                <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-4' key={item.id}>
                                    <div className='card' id='AllItems'>
                                        <img src={item.image} className='img-fluid' alt='NoImage'/>
                                        <p>{item.title}</p>
                                        <h5>{item.price}</h5>
                                        <button className='AddCartButtton' onClick={() => addToCart(item.id)}>Cart</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div className='col-lg-3 ' id='cartItems'>
                    {/* Cart Section */}
                    <div className='card'>
                        <h4>Cart Items</h4>
                        <ul>
                            {cart.map(item => (
                                <li key={item.id}>
                                    <p>{item.title}</p>
                                    <div className='d-flex'>
                                    <h5>{item.price}</h5>
                                    <button type='button' className='btn btn-outline-primary' onClick={()=>removeFromCart(item.id)}>remove</button>    
                                    </div>
                                   
                                </li>
                               
                            ))}
                        </ul>
                        <div>
                            <strong>Total Price:</strong> ${calculateTotalPrice()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
