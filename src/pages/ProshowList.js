import React from 'react'
import Card from '../components/proshows/Proshow-card'
import Zakir from '../images/events/zakir.jpeg'
// import styles from '../css/proshow.module.css'
import MCard from '../components/proshows/Mobile-card'
function ProshowList() {
  return (
    <>
    <div className='hidden md:block '>
    <div className=" relative Proshow flex justify-center items-center h-screen w-full bg-events m:0">
            <Card image= {Zakir} description="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image.  "  />
    </div>
    </div>
    {/* // Mobile view */}
    <div className=" md:hidden relative Proshow flex justify-center items-center h-screen bg-events">
            <MCard image= {Zakir} description="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image.  "  />
    </div>

    </>
  )
}

export default ProshowList