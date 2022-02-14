import React from 'react';
import styles from "../css/events.module.css";
import Card from "../components/events/event-card";
import line from '../images/events/line gols 9.png';
import lineHz from '../images/events/line gols 8.png';
import Zakir from '../images/events/zakir.jpeg';
import Footer from "../components/common/Footer";

function Proshows() {
    return (
        <div className="Proshows  bg-proshows text-white" >
            <div className={styles.padit}>
                <h1 className="font-heading text-white text-5xl text-center pt-11">
                    PROSHOWS
                </h1>
                <br />
                <div className="hidden md:block">
                    <div className="container mx-auto grid md:grid-cols-11">

                        <Card type='col-span-5 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="PROSHOWS" />
                        <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>

                        <Card type='col-span-5 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="INFORMAL EVENTS" />

                    </div>
                    <div className="container mx-auto grid md:grid-cols-11">

                        <Card type='col-span-5 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="PROSHOWS" />
                        <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>

                        <Card type='col-span-5 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="INFORMAL EVENTS" />

                    </div>
                </div>
                {/* Mobile Part begins */}
                <div className="md:hidden overflow-hidden mx-10">
                    <div className="grid grid-cols-1 mx-auto">
                        <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="PROSHOW" />
                    </div>
                    <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
                    <div className="grid grid-cols-1 mx-auto">
                        <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="INFORMAL EVENTS" />
                    </div>
                    <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
                    <div className="grid grid-cols-1 mx-auto">
                        <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="WORKSHOPS" />

                    </div>
                    <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
                    <div className="grid grid-cols-1 mx-auto">
                        <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie"  image={Zakir} buttonText="WORKSHOPS" />

                    </div>
                </div>
            </div>
            <Footer />
        </div >


    );
}

export default Proshows;