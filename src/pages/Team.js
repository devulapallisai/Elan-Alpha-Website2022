import React, { useEffect, useState } from "react";
import styles from "../css/team.module.css";
import Card from "../components/common/Card";
import Man from "../images/man.jpg";
import Lantern from "../images/Homepage/Lanterntop.png";
// import Goldenbox from "../images/Goldenbox.png";
import Footer from "../components/common/Footer";
function Team() {
  const [scroll,setscroll]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>window.innerHeight/15){
        setscroll(true)
      }
      else{
        setscroll(false)
      }
    })
  },[])
  return (
    <div className="bg-team">
      <div className={ `fixed top-8 left-2 ${scroll?'opacity-100':'opacity-50'} transition-opacity duration-500 ease-in-out delay-75`}>
        <img src={Lantern} alt="Img" className={styles.widthis}/>
      </div>
      <div className={`fixed left-8 xs:left-16 ${scroll?'opacity-100':'opacity-50'} transition-opacity duration-500 ease-in-out delay-75 ${styles.leftmost}`}>
        <img src={Lantern} alt="Img" className={styles.widthis}/>
      </div>
      <div className={ `fixed top-8 right-2 ${scroll?'opacity-100':'opacity-50'} transition-opacity duration-500 ease-in-out delay-75`}>
        <img src={Lantern} alt="Img" className={styles.widthis}/>
      </div>
      <div className={`fixed right-8 xs:right-16 ${scroll?'opacity-100':'opacity-50'} transition-opacity duration-500 ease-in-out delay-75 ${styles.leftmost}`}>
        <img src={Lantern} alt="Img" className={styles.widthis}/>
      </div>
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-4xl md:text-6xl text-center pt-12">
          Team
        </h1>
        <br />
        <div className="container lg:w-3/4 md:4/5 mx-auto">
          <div className="hidden md:block">
            <div className="grid grid-cols-1 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card
                name="Krati Arela"
                position="Overall Head"
                image={Man}
                type="mr-2"
              />
              <Card
                name="Krati Arela"
                position="Overall Head"
                image={Man}
                type="mr-2"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
              <Card name="Krati Arela" position="Overall Head" image={Man} />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card
                name="Krati Arela"
                position="Overall Head"
                image={Man}
                type="mr-2"
              />
              <Card
                name="Krati Arela"
                position="Overall Head"
                image={Man}
                type="mr-2"
              />
            </div>
            <br />
          </div>
          {/* Mobile Part begins */}
          <div className="md:hidden overflow-hidden">
            <div className="grid grid-cols-1 mx-auto transform">
              <div className={styles.initialcardop}>
              <Card name="Krati Arela" position="Overall Head" image={Man}/>
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image={Man}
                  type="mr-2"
                />
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
        <div className={`ml-5 mr-5 md:ml-40 md:mr-40 ${styles.borderitim}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          deserunt adipisci facere eos, id incidunt voluptate cupiditate dolor
          officia laboriosam voluptas repellat mollitia repellendus explicabo
          reprehenderit obcaecati aspernatur nostrum necessitatibus maiores!
          Nesciunt, officiis eos doloremque eligendi nostrum assumenda nemo
          optio dolor nihil, sequi quas ea beatae, quo ipsum dignissimos. Labore
          exercitationem aspernatur vitae incidunt deleniti, laboriosam harum
          odit odio enim quasi obcaecati cumque facere sapiente explicabo
          blanditiis modi, hic, accusamus numquam unde qui in corporis ea
          necessitatibus! Quod totam, veniam deleniti explicabo repellat
          officiis alias ipsam blanditiis sit quia numquam, provident tempora
          consequatur vero nostrum. A similique deserunt cumque illo!
        </div>
        <br />
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Team;
