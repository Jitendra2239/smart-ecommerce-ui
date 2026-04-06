import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
const Shoppingcart = () => {
  return (
<li className="relative cursor-pointer">
  <Link
    to="/cart"
    className="flex items-end gap-1 px-2 py-1
               border border-transparent
               hover:border-white hover:rounded
               transition-all duration-200"
  >
  
    <div className="relative">
      <ShoppingCart size={26} />

     
      <span className="absolute -top-2 -right-2 text-xs font-bold text-yellow-400">
        0
      </span>
    </div>


    <span className="font-bold text-sm">Cart</span>
  </Link>
</li>
  );
}
export default Shoppingcart;
