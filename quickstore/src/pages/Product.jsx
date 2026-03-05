import {useParams} from "react-router-dom";
import {products} from "../data";

function Product({addToCart}){

const {id}=useParams();

const product=products.find(p=>p.id==id);

return(
<div className="product-page">

<img src={product.image}/>

<div>

<h1>{product.name}</h1>

<p>{product.description}</p>

<h2>${product.price}</h2>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

</div>

</div>
);
}

export default Product;