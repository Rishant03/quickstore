import {useState} from "react";
import {products} from "../data";
import ProductCard from "../components/ProductCard";

function Home({addToCart}){

const [search,setSearch]=useState("");

const filtered=products.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase())
);

return(
<div className="container">

<h1>Our Products</h1>

<input
className="search"
placeholder="Search products..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="grid">

{filtered.map(p=>(
<ProductCard
key={p.id}
product={p}
addToCart={addToCart}
/>
))}

</div>

</div>
);
}

export default Home;