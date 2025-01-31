import React from 'react'
import slide1 from "../../src/assets/images/slide-1.jpg"
import slide2 from "../../src/assets/images/hero-5-img.png"

const Banner = () => {
  return (
    <div className='container pt-5 text-white'>
      <div className='row mb-5'>
        <div className='col-md-6'>
          <div className='d-flex h-100 justify-content-center align-items-center flex-column'>
            <h3 className='hellix-600'>Download Now and</h3>
            <h1 className='hellix-800 text-gradient fs-48'>Discover The World</h1>
            <p className='max-75 py-3 fs-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, impedit</p>
            <div className='d-flex justify-content-cneter align-items-cneter gap-4'>
              <button className='btn btn-custom'>
                download now
              </button>
              <button className='btn btn-custom'>
                Learn more
              </button>
            </div>
            </div>
        </div>
        <div className='col-md-6 text-center'>
          <img src={slide2} className='banner-img animate-left-right' />
        </div>
      </div>
    </div>
  )
}

export default Banner