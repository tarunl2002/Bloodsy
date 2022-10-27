import React from 'react'
import './Whyus.css'
import image1 from '../../assets/image1.png'

const whyus = () => {
  return (
    <div className="whyus" id='whyus'>
        
        <div className="left">
            <img src={image1} alt="" />
        </div>

        <div className="right">
        <div className='why-us-heading'>
            <h1>Why us</h1>
        </div>
        <div className="why-us-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis quasi veritatis obcaecati. Libero similique in hic illo vel
            sed ex debitis, voluptate, quisquam, tenetur iusto aliquid
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officiis quasi veritatis obcaecati. Libero similique in hic illo vel
            sed ex debitis, voluptate, quisquam, tenetur iusto aliquid
             ullam cum molestiaenumquam.
        </div>
        </div>
    </div>
  )
}

export default whyus