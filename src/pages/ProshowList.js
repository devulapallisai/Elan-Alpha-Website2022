import React from 'react'
import Card from '../components/proshows/Proshow-card'
import Zakir from '../images/events/zakir.jpeg'
import styles from '../css/proshow.module.css'
function ProshowList() {
  return (
    <div className="relative Proshow flex justify-center items-center h-screen bg-events">
        <div className=" relative container mx-auto flex justify-center items-center ">
            <Card image= {Zakir} description="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image.  "  />
        </div>
        
    </div>
  )
}

export default ProshowList