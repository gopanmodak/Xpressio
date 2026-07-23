import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'

const VegetableSlider = () => {
  return (
    <div className='max-w-6xl mx-auto'>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >

        {/* Slide 1 */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-63 md:h-90 lg:h-120">
          <img 
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?w=600"
            alt=""
            className="h-full w-full object-cover"
          />

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 
                       transform -translate-x-1/2 -translate-y-1/2"
          >
            <h2 className='text-white text-3xl md:text-5xl font-bold'>
              Fresh Vegetables
            </h2>
          </motion.div>
        </motion.div>

        
        <div className='relative h-63 md:h-90 lg:h-120'>
          <img 
            src="https://plus.unsplash.com/premium_photo-1664527305901-a3c8bec62850?w=600"
            alt=""
            className="h-full w-full object-cover"
          />

         
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 
                       transform -translate-x-1/2 -translate-y-1/2"
          >
            <h2 className='text-white text-3xl md:text-5xl font-bold'>
              Organic Food
            </h2>
          </motion.div>
        </div>

        <div className='relative h-63 md:h-90 lg:h-120'>
            <img src="https://plus.unsplash.com/premium_photo-1724250161295-ccb9c5f4f63d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHZlZ2l0YWJsZXN8ZW58MHx8MHx8fDA%3D" alt="" className="h-full w-full object-cover"/>
             <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 
                       transform -translate-x-1/2 -translate-y-1/2"
          >
            <h2 className='text-white text-3xl md:text-5xl font-bold'>
                    Healthy
            </h2>
          </motion.div>
        </div>

      </Carousel>
    </div>
  )
}

export default VegetableSlider