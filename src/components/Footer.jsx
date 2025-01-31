import React from 'react'
import frame from "../../src/assets/images/frame.png"
import slide1 from "../../src/assets/images/slide-1.jpg"
import slide2 from "../../src/assets/images/slide-2.jpg"
import slide3 from "../../src/assets/images/slide-3.jpg"
import slide4 from "../../src/assets/images/slide-4.jpg"
import accrLeft from "../../src/assets/images/accordionleft.png"
import manWithHat from "../../src/assets/images/comunity-says.png"
import reactLogo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <div className='brd-top mt-5'>
      <div className='container text-white py-5 '>
        <div className='text-cneter'>
          <div className='footer-logo text-center'>
            <img src={reactLogo} alt="" />
          </div>
          <div className='py-4'>
            <div className="input-group w-300 m-auto">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-custom">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <ul className='arrow d-flex gap-2 align-items-center justify-content-center py-3 ps-0'>
            <li>
              <a>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li><a><i className="fab fa-youtube"></i></a></li>
            <li><a><i className="fab fa-twitter"></i></a></li>
            <li><a><i className="fab fa-google-plus-g"></i></a></li>
          </ul>

        </div>
      </div>
      <div className='brd-top'>
        <div className="copyright p-3 text-center">
          <p className="m-0 text-white">© 2025 SKILLPLAYZ All right reserved</p>
        </div>
      </div>

    </div>

  )
}

export default Footer