import React from 'react'
import Img1 from '../../assets/men/men1.jpeg'
import Img2 from '../../assets/men/men2.jpg'
import Img3 from '../../assets/men/men3.jpg'
import Img4 from '../../assets/men/men44.jpg'
import Img5 from '../../assets/men/men5.jpg'

import { FaStar } from 'react-icons/fa6'

const ProductsData = [
    {
        id:1,
        img:Img1,
        title:"Men Ethnic",
        rating:5.0,
        color:"white",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Men Western",
        rating:4.5,
        color:"Red",
        aosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        rating:4.7,
        color:"brown",
        aosDelay:"400",
    },
    {
        id:4,
        img:Img4,
        title:"Printed T-Shirt",
        rating:4.4,
        color:"Yellow",
        aosDelay:"600",
    },
    {
        id:5,
        img:Img5,
        title:"Fashion T-Shirt",
        rating:4.5,
        color:"Pink",
        aosDelay:"800",
    },
]


const Men = () => {
  return (
    <div id='Men' className='mt-14 mb-12'>
      <div className='container'>
        {/* Header Section  */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top selling Mens Prducts for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Men</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quisquam eligendi fugiat vitae recusandae vero!</p>
        </div>
        {/* Body section  */}
         <div>
            <div className='grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center
            gap-5'>
                {/* card section  */}
                { ProductsData.map((data) => (
                    <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className='space-y-3'
                     >
                        <img
                        src={data.img}
                        alt=""
                        className='h-[220px] w-[150px]
                        object-cover rounded-md'
                        />
                        <div>
                            <h3 className='font-semibold'> {data.title} </h3>
                            <p className='text-sm text-gray-600'> {data.color} </p>
                            <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400' />
                            <span> {data.rating} </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
             {/* View all button */}
             <div className='flex justify-center'>
                        <button className='text-center mt-10
                        cursor-pointer bg-primary text-white py-1
                        px-5 rounded-md'>
                            View All products
                        </button>
                     </div>
         </div>
      </div>
    </div>
  )
}

export default Men