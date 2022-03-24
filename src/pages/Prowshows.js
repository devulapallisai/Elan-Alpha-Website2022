import React from "react";
import styles from "../css/events.module.css";
import Card from "../components/events/event-card";
import line from "../images/events/line gols 9.png";
import lineHz from "../images/events/line gols 8.png";
import Zakir from "../images/events/zakir.jpeg";
import Footer from "../components/common/Footer";

function Proshows() {
  return (
    <div className="Proshows  bg-proshows text-white min-h-[100vh]">
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-4xl md:text-6xl text-center pt-12">
          PROSHOWS
        </h1>
        <br />
        <div className="hidden md:block">
          <div className="container mx-auto my-10 items-center flex justify-center">
            <Card
              type="col-span-3 mx-0"
              textclass="mt-6 font-bold"
              text="We bring to you the Indian DJ/producer duo, Loststories in partnership with Tribevibe.

              Witness the amazing performances on stage with the Indian duo composed by Prayag Mehta and Rishab Joshi."
              image="https://ik.imagekit.io/lc4zhdkrtsr/proshows/LS_IIT_Hydrabad_XQhQ3zi7b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927554"
              button={true}
              buttonText="Know More"
              hlink="/proshowlist/0"

            />

          </div>
          <div
            className="container mx-auto grid md:grid-cols-7 items-center"
            style={{ marginBottom: `80px`, marginTop: `20px` }}
          >
            <Card
              type="col-span-3 mx-0 "
              textclass="mt-6 font-bold"
              text="We bring to you the alt-rock band Alchemy for this year's fest on 26th March. 

              Get ready to witness the amazing performance on stage with the Alchemy Rock Band."
              image="https://ik.imagekit.io/lc4zhdkrtsr/proshows/Alchemy_Final_z4wFxqqNB4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927807"
              button={true}
              buttonText="Know More"
              hlink="/proshowlist/1"
            />
            <img
              src={line}
              alt="imagehere"
              className="my-auto mx-auto col-span-1 hidden md:block"
            ></img>

            <Card
              type="col-span-3 mx-0"
              textclass="mt-6 font-bold"
              text="We bring to you THE TOUCHDOWN. With all three major shows lined up on the 26th (2nd day of the fest), Elan & ηVision is coming with a BANG!"
              image="https://ik.imagekit.io/lc4zhdkrtsr/proshows/ttd_fGvB1ta7U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927588"
              button={true}
              buttonText="Know More"
              hlink="/proshowlist/2"
            />
          </div>
        </div>
        {/* Mobile Part begins */}
        <div className="md:hidden overflow-hidden mx-10">
          <div className="grid grid-cols-1 mx-auto">
            <Card
              type="col-span-3 mx-0"
              textclass="mt-6 font-bold"
              text="We bring to you the Indian DJ/producer duo, Loststories in partnership with Tribevibe.

              Witness the amazing performances on stage with the Indian duo composed by Prayag Mehta and Rishab Joshi."
              image="https://ik.imagekit.io/lc4zhdkrtsr/proshows/LS_IIT_Hydrabad_XQhQ3zi7b.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927554"
              button={true}
              buttonText="Know More"
              hlink="/proshowlist/0"

            />
          </div>
          <img
            src={lineHz}
            alt="imagehere"
            className="my-auto mx-auto col-span-1  md:hidden"
          ></img>
          <div className="grid grid-cols-1 mx-auto">
            <Card
              type="col-span-3 mx-0 "
              textclass="mt-6 font-bold"
              text="We bring to you the alt-rock band Alchemy for this year's fest on 26th March. 
             
                           Get ready to witness the amazing performance on stage with the Alchemy Rock Band."
              image="https://ik.imagekit.io/lc4zhdkrtsr/proshows/Alchemy_Final_z4wFxqqNB4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927807"
              button={true}
              buttonText="Know More"
              hlink="/proshowlist/1"
            />
          </div>
          <img
            src={lineHz}
            alt="imagehere"
            className="my-auto mx-auto col-span-1  md:hidden"
          ></img>
          <div className="grid grid-cols-1 mx-auto">
            <Card
              type="col-span-3 mx-0"
              textclass="mt-6 font-bold"
              text="We bring to you THE TOUCHDOWN. With all three major shows lined up on the 26th (2nd day of the fest), Elan & ηVision is coming with a BANG!"
              image="https://ik.imagekit.io/lc4zhdkrtsr/proshows/ttd_fGvB1ta7U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648074927588"
              button={true}
              buttonText="Know More"
              hlink="/proshowlist/2"

            />
          </div>
          <img
            src={lineHz}
            alt="imagehere"
            className="my-auto mx-auto col-span-1  md:hidden"
          ></img>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Proshows;
