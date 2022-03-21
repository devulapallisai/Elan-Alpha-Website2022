import React from 'react'
import styles from '../../css/proshow.module.css'
function MCard({image , description}) {
  return (
  <div className={`grid grid-cols-1 border-2 border-[#FFD700] w-5/6 p-5 gap-5 `} >
      <img className={`col-span-1 ${styles.imageBox} z-[10000]`} src={image} alt= "image"></img>
      <div className={`col-span-1 flex items-center  text-white justify-center text-xs w-fit ${styles.proText}`} >    
      {description}
      </div>
   </div>
  )
}

export default MCard