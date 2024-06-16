import React from 'react'
import './Deals.css'

const Deals = () => {
  return (
    <div className='deals'>
        <div className='boxes_deals'>
            <div className='img_Deals img-1'>
                <span className='discount'>
                    <h5>20%<span>Off</span></h5>
                </span>
            </div> 
            <h4 className='heading_Deals'>Ocean Blue Rings</h4>
                <div><a href='#' className='time_limit'>20 Dia Restantes</a></div>
        </div>

        <div className='boxes_deals'>
            <div className='img_Deals img-2'>
                <span className='discount'>
                    <h5>50%<span>Off</span></h5>
                </span>
            </div> 
            <h4 className='heading_Deals'>Ocean Blue Rings</h4>
                <div><a href='#' className='time_limit'>5 Dia Restantes</a></div>
        </div>

        <div className='boxes_deals'>
            <div className='img_Deals img-3'>
                <span className='discount'>
                    <h5>60%<span>Off</span></h5>
                </span>
            </div> 
            <h4 className='heading_Deals'>Ocean Blue Rings</h4>
                <div><a href='#' className='time_limit'>10 Dia Restantes</a></div>
        </div>

        <div className='boxes_deals'>
            <div className='img_Deals img-4'>
                <span className='discount'>
                    <h5>32%<span>Off</span></h5>
                </span>
            </div> 
            <h4 className='heading_Deals'>Ocean Blue Rings</h4>
                <div><a href='#' className='time_limit'>15 Dia Restantes</a></div>
        </div>
    </div>
  )
}

export default Deals