import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProduct from './Components/TopProduct/TopProduct'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/Subscribe'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'
import Men from './Components/Men/Men'
import Electronics from './Components/Electronics/Electronics'

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-out",
      delay:100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div className=' bg-white dark:bg-gray-900
    dark:text-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProduct handleOrderPopup={handleOrderPopup} />
       <Men />
      <Banner />
      <Electronics />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
