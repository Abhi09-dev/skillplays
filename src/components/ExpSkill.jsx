import React from 'react'
import skillExp from '../assets/images/image-13.png'


const ExpSkill = () => {
  return (
    <div>
      <div className="container pt-5 text-white">
        <div>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <img src={skillExp} className='banner-img animate-left-right' />
            </div>
            <div className='col-md-6'>
              <div className='d-flex h-100 justify-content-center align-items-center flex-column'>
                <h1 className='hellix-600'>Experienced and Skilled</h1>
                <p className='max-75 text-center pb-4 fs-20'>An nullam tempor sapien, eget gravida donec enim ipsum porta justo integer at odio velna vitae auctor integer congue magna undo impedit. Gravida magna lacus odio ac risus auctor tempus dolor feugiat lacinia risus orci auctor purus pretium ligula</p>
                <div>
                  <button className='btn btn-custom'>
                    How it Works
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpSkill