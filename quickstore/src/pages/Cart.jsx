function Cart({cart}){

return(
<div className="container">

<h1>Your Cart</h1>

{cart.length===0 && <p>No items in cart</p>}

{cart.map((item,index)=>(
<div key={index} className="cart-item">

<img src={item.image}/>

<div>
<h3>{item.name}</h3>
<p>${item.price}</p>
</div>

</div>
))}

</div>
);
}

export default Cart;