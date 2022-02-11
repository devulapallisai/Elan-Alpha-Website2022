import React from 'react'
import Card from '../components/proshows/Proshow-card'
import Zakir from '../images/events/zakir.jpeg'
import styles from '../css/proshow.module.css'
function ProshowList() {
  return (
    <div className="relative Proshow flex justify-center items-center h-screen bg-events">
        <div className=" relative container mx-auto flex justify-center items-center ">
            <Card image= {Zakir} description="dsndkjvh jfknefvk erenkvsdflnfkajnfjsdnvkdjsnvkjdvnkjdfvnjkdfsvkdfnvkjdfnvjkdfnvkjdfbnvjkdfj djfkvdkfvhdfkvhdfkvhdkvhdjv dkfhv dkjfv hdkjfhvkdfhv jkdf hvdkfh vdf vdf hvjkdfh vdf v hdfv df vdfv khdfvh dfkvhdkfvh dfkv hdkf vhdkf vhkdfhvkdfhvdkfhvkdfh vdkf vkdf hvkdf vhkdfhvkjdhvdjkvhs "  />
        </div>
        
    </div>
  )
}

export default ProshowList