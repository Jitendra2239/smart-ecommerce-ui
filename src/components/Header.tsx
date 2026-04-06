import React, { useState } from 'react';

import SearchBar from './SearchBar ';
import Language from './Language';
import Account from './Account';
import { ShoppingCart } from 'lucide-react';
import Shoppingcart from './Shoppingcart';
import SmartShop from './SmartShop';
import OrderHistory from './OrderHistory';

const Header: React.FC = () => {
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  const changeLanguage = (lang: 'EN' | 'HI') => {
    setLanguage(lang);
    setDropdownOpen(false);
    // Here you can also trigger i18n change
  };

  return (
    <ul className="bg-gray-800 text-white p-4 flex justify-between list-none">
        
      <SmartShop></SmartShop>
       <SearchBar></SearchBar>
       <Language></Language>
       <Account></Account>
       <OrderHistory></OrderHistory>
       <Shoppingcart></Shoppingcart>

   
    </ul>
  );
};

export default Header;