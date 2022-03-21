import React from 'react'
import styles from '../../css/proshow.module.css'
function Card({image , description}) {
  return (
  <div className={`flex border-2 border-[#FFD700] w-5/6 p-5 gap-5 z-3 `}  >
      <img className={` ${styles.imageBox} z-[10000]`} src={image} alt= "image"></img>
      <div className={`flex items-center text-white justify-center text-md w-fit ${styles.proText}`} >    
      {description}
      </div>
   </div>
  )
}

export default Card