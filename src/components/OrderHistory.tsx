import { Link } from "react-router-dom";  
  
  const OrderHistory = () => {
  return (


<li className="cursor-pointer">
  <Link
    to="/orders"
    className="flex flex-col items-start leading-tight px-2 py-1
               border border-transparent
               hover:border-white hover:rounded
               transition-all duration-150"
  >
    <span className="text-xs text-gray-300">Returns</span>
    <span className="font-bold text-sm">& Orders</span>
  </Link>
</li>
  );

}
export default OrderHistory