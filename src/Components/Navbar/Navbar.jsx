import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' 




const Menu = [
  {
    id:1,
    name: "Home",
    link:"#home",
  },
  {
    id:2,
    name: "Top Rated",
    link:"#Top Product",
  },
  {
    id:3,
    name: "Mens Wear",
    link:"#Men",
  },
  {
    id:4,
    name: "Womens Wear",
    link:"#womens",
  },
  {
    id:5,
    name: "Electronics",
    link:"#Electronics",
  },
]


const DropdownLinks = [
  {
    id:1,
    name:"Trendings Products",
    link:"#Top Product"
  },
  {
    id:2,
    name:"Best Selling",
    link:"#Men"
  },
  {
    id:3,
    name:"Top Rated",
    link:"#Electronics"
  },
]



const Navbar = ({handleOrderPopup}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); // Toggles between true and false
  };
  
  return (
    <div id='home' className='shadow-md bg-white 
    dark:bg-gray-900 dark:text-white duration-200
    relative z-40'>
       {/* upper Navbar  */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex
        justify-between items-center'>

             {/* Burger Menu  */}
             <div className="flex justify-between items-center md:hidden">
            <div onClick={handleNav} className="block md:hidden mr-6 cursor-pointer">
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Menu when Burger Icon is clicked */}
            {nav && (
              <ul className="absolute left-0 top-16 w-full bg-white dark:bg-gray-900 p-4 text-xl md:hidden">
                {Menu.map((data) => (
                  <li key={data.id} className="p-2 hover:text-primary dark:hover:text-primary">
                    <a href={data.link} onClick={handleNav}>
                      {data.name}
                    </a>
                  </li>
                ))}
                <li>
                  <div>
                    <ul>
                      {DropdownLinks.map((item) => (
                        <li key={item.id} className="p-2 hover:text-primary dark:hover:text-primary">
                          <a href={item.link} onClick={handleNav}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            )}
          </div>

            <div>
                <a href="#"
                className='font-bold
                text-2xl sm:text-3xl flex gap-2'
                >
                    <img src={Logo} alt=""
                    className='w-10 uppercase'
                     />
                     Shopee
                </a>
            </div>
            {/* search bar  */}
            <div className='flex justify-between
            items-center gap-4'>
              <div className='relative group hidden sm:block'>
                <input
                type="text"
                placeholder='search'
                className='w-[200px] sm:w-[200px]
                group-hover:w-[300px] transition-all 
                duration-300 rounded-full border border-gray-300
                px-2 py-1 focus:outline-none focus:border-1
                focus:border-primary
                dark:border-gray-500
                dark:bg-gray-800'
                  />
                  <IoMdSearch className="text-gray-500
                  group-hover:text-primary absolute
                  top-1/2 -translate-y-1/2 right-3" />
              </div>
            
            {/* order button  */}
            <button
            onClick={() => handleOrderPopup()}
            className='bg-gradient-to-r from-primary to-secondary
             transition-all duration-200 text-white py-1 px-4 rounded-full flex
             items-center gap-3 group'
            >
              <span
              className='group-hover:block
              hidden transition-all duration-200' 
              >
                Order
              </span>
              <FaCartShopping
              className='text-xl
              text-white drop-shadow-sm
              cursor-pointer'
               />
            </button>
            {/* Darkmode Switch  */}
               <div>
                <DarkMode />
               </div>
            </div>
        </div>

      </div>
       {/* lower Navbar  */}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'> 
          {
            Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link}
                className='inline-block px-4
                hover:text-primary duration-200'
                >
                   {data.name}
                </a>
              </li>
            ))}
               {/* Simple Dropdown and links  */}
               <li className='group relative
               cursor-pointer'>
                <a href="#"
                className='flex items-center gap-[2px] py-2'
                >Trending Products
                <span>
                  <FaCaretDown
                  className='transition-all
                  duration-200
                  group-hover:rotate-180'
                   />
                </span>
                </a>
                <div className='absolute z-[9999] hidden
                group-hover:block w-[150px] rounded-md
                bg-white p-2 text-black shadow-md'>
                  <ul>
                    <li>
                      {DropdownLinks.map((data) => (
                        <li>
                          <a
                          key={data.id}
                          href={data.link}
                          className='inline-block w-full
                          rounded-md p-2
                          hover:bg-primary/20'
                          >
                          {data.name}
                          </a>
                        </li>
                      ))}
                    </li>
                  </ul>
                </div>
               </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
