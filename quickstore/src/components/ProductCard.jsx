import {Link} from "react-router-dom";

function ProductCard({product,addToCart}){

return(
<div className="card">

<Link to={`/product/${product.id}`}>
<img src={product.image}/>
</Link>

<h3>{product.name}</h3>
<p>${product.price}</p>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

</div>
);
}

export default ProductCard;