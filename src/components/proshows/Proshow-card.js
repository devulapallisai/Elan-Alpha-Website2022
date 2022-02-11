import React from 'react'
import styles from '../../css/proshow.module.css'
function Card({image , description}) {
  return (
  <div className={`flex border-2 border-[#FFD700] w-5/6 p-5 gap-5 `} >
      <img className={` ${styles.imageBox}`} src={image} alt= "image"></img>
      <div className={`flex items-center justify-center w-fit`}>    
      {description}
      </div>
   </div>
  )
}

export default Card