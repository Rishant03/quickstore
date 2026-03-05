import {Link} from "react-router-dom";

function Navbar({cartCount}){

return(
<nav className="navbar">

<Link to="/" className="logo">
QuickStore
</Link>

<div>
<Link to="/">Home</Link>
<Link to="/cart">Cart ({cartCount})</Link>
</div>

</nav>
);
}

export default Navbar;