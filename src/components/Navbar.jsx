import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className={`fixed w-full px-8 py-8 bg-[#ffffff] font-["Neue Montreal"] flex justify-between items-center transition-all duration-500 ${visible ? 'top-0' : '-translate-y-full'}`}>
      <div className='Logo font-semibold text-5xl'>
        <Link to="/" className="text-black">DhabaDekho</Link>
      </div>
  
      <div className='links flex gap-6'>
        {[
          { text: "Home", path: "/landing" },
          { text: "About us", path: "/About" },
          { text: "Restaurant", path: "/Restaurants" },
          { text: "Reviews", path: "/Reviews" }
        ].map((item, index) => (
          <Link key={index} to={item.path} className={`text-base capitalize text-[23px] font-light px-1 py-6 ${index === 3 && "ml-20 px-14"}`}>
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
