import React from "react";
import styles from "../css/events.module.css";
import Card from "../components/events/event-card";
import line from '../images/events/line gols 9.png';
import lineHz from '../images/events/line gols 8.png';
import Zakir from '../images/events/zakir.jpeg';
import Footer from "../components/common/Footer";

function Competitions() {
  return (
    <div id="Comp" className="Competitions text-white" style={{ background: "#1E0735" }} >
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-4xl md:text-5xl text-center pt-11">
          COMPETITIONS
        </h1>
        <div className="flex justify-center align-center m-5">
          <button id="Culti" className={`border-4 border-white py-3 px-5 font-text `} style={{ background: "rgba(196, 196, 196, 0.22)" }} onClick={myFunction1}>Culti</button>
          <button id="Techy" className={`border-4 border-white py-3 px-5 font-text `} style={{ background: "none" }} onClick={myFunction2}>Techy</button>
        </div>
        <div id="CultiBlocks">
          <div className="hidden md:block ">
            <div className="container mx-auto grid md:grid-cols-11">

              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere"  className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
            <div className="container mx-auto grid md:grid-cols-11">

              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
            <div className="container mx-auto grid md:grid-cols-11">

              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere"  className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere"  className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
          </div>
          {/* Mobile Part begins */}
          <div className="md:hidden overflow-hidden mx-10 " >
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere"  className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
          </div>
        </div>
        <div id="TechyBlocks" style={{ display: "none" }}>
          <div className="hidden md:block ">
            <div className="container mx-auto grid md:grid-cols-11">

              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
            <div className="container mx-auto grid md:grid-cols-11">

              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
              <img src={line} alt="imagehere" className='my-auto mx-auto col-span-1 hidden md:block' ></img>




              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
           
          </div>
          {/* Mobile Part begins */}
          <div className="md:hidden overflow-hidden mx-10 " >
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere"  className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />

            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere"  className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
            <img src={lineHz} alt="imagehere" className='my-auto mx-auto col-span-1  md:hidden' ></img>
            <div className="grid grid-cols-1 mx-auto">
              <Card type='col-span-3 mx-0' text="loremipsumdtatribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifieribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specifie" image={Zakir} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >


  );
}
function myFunction1() {
  document.getElementById("Culti").style.background = "rgba(196, 196, 196, 0.22)"
  document.getElementById("Techy").style.background = " none"
  document.getElementById("CultiBlocks").style.display = "block"
  document.getElementById("TechyBlocks").style.display = "none"
  document.getElementById("Comp").style.background = "#1E0735"
}
function myFunction2() {
  document.getElementById("Culti").style.background = "none"
  document.getElementById("Techy").style.background = " rgba(196, 196, 196, 0.22)"
  document.getElementById("CultiBlocks").style.display = "none"
  document.getElementById("TechyBlocks").style.display = "block"
  document.getElementById("Comp").style.background = "#943066"
}

export default Competitions