// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Smart E-Commerce. All rights reserved.</p>
        <p className="text-sm mt-1">
          Designed with ❤️ using React & Spring Boot
        </p>
      </div>
    </footer>
  );
};

export default Footer;