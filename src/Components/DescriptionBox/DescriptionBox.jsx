import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox- fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> An ecommerce site is an online platform which gives you hassle free shopping experience.</p>
        <p>An ecommerce website generally displays products which are typically very up and trending.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
