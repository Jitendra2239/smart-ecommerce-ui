import { Link } from "react-router-dom";  
  
  const SmartShop = () => {
  return (
    <li className="relative group cursor-pointer">
  <Link
        to="/"
        className="text-2xl font-bold mr-4 px-2 py-1
                   border border-transparent
                   hover:border-white hover:rounded"
      >
        Smart<span className="text-yellow-400">Shop</span>
      </Link>
</li>
  );
}
export default SmartShop
