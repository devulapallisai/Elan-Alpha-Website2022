import React, { useEffect, useState } from "react";
import styles from "../css/team.module.css";
import Card from "../components/common/Card";
// import Man from "../images/man.jpg";
// import Lantern from "../images/Homepage/Lanterntop.png";
// import techy from "../images/teams/Amogh Bedarakota Techy _ Workshop.webp";
// // import finance from "../images/teams/Ashish Chakravarthy_Finance.webp";
// import sponsorship from "../images/teams/Chirag Jain_Sponsorship (1).webp";
// import publicity from "../images/teams/Eshwar Yadav_Publicity-1.webp";
// // import overallhead from "../images/teams/Krati Arela_Overall Head-1.webp";
// import multimedia from "../images/teams/Nishanth Kannan_Creatives _ Multimedia (1).webp";
// import hospitality from "../images/teams/Prashanth Naik_Hospitality _ Transport.webp";
// import culti from "../images/teams/Sachi Kavitake_Culti _ Biggies, Social Cause, Litr, EML.webp"
// import creative from "../images/teams/Sidhardha Grandhi_Creatives_Multimedia.webp"
// import PR from "../images/teams/Smaran_PR,Infi,Web.webp"
// import pronites from "../images/teams/Swapnish Sahare _ Production _ Pronites _ Security.webp"

// import Goldenbox from "../images/Goldenbox.png";
import Footer from "../components/common/Footer";
function Team() {
  const [scroll, setscroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight / 15) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
  }, []);
  return (
    <div className="bg-team">
      <div
        className={`fixed top-8 left-2 ${
          scroll ? "opacity-100" : "opacity-50"
        } transition-opacity duration-500 ease-in-out delay-75`}
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
          alt="Img"
          className={styles.widthis}
        />
      </div>
      <div
        className={`fixed left-8 xs:left-16 ${
          scroll ? "opacity-100" : "opacity-50"
        } transition-opacity duration-500 ease-in-out delay-75 ${
          styles.leftmost
        }`}
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
          alt="Img"
          className={styles.widthis}
        />
      </div>
      <div
        className={`fixed top-8 right-2 ${
          scroll ? "opacity-100" : "opacity-50"
        } transition-opacity duration-500 ease-in-out delay-75`}
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
          alt="Img"
          className={styles.widthis}
        />
      </div>
      <div
        className={`fixed right-8 xs:right-16 ${
          scroll ? "opacity-100" : "opacity-50"
        } transition-opacity duration-500 ease-in-out delay-75 ${
          styles.leftmost
        }`}
      >
        <img
          src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
          alt="Img"
          className={styles.widthis}
        />
      </div>
      <div className={styles.padit}>
        <h1 className="font-heading text-white text-4xl md:text-6xl text-center pt-12">
          Team
        </h1>
        <br />
        <div className="container lg:w-3/4 md:4/5 mx-auto">
          <div className="hidden md:block">
            <div className="grid grid-cols-1 mx-auto">
              <Card
                name="Krati Arela"
                position="Overall Head"
                image="https://ik.imagekit.io/sai1975d/teams/Krati_Arela_Overall_Head-1_SLjj24wyF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162516460"
                phone="6265534713"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card
                name="Smaran Kulkarni"
                position="Public Relations Head"
                image="https://ik.imagekit.io/sai1975d/teams/Smaran_PR_Infi_Web_waTO4xjk3X3J.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162520497"
                phone="7995204145"
              />
              <Card
                name="Chirag Jain"
                position="Sponsorship Head"
                image="https://ik.imagekit.io/sai1975d/teams/Chirag_Jain_Sponsorship__1__tm9ZuDZAa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162515830"
                phone="9326168076"
              />
              <Card
                name="Ashish Chakravarthi "
                position="Finance Head"
                image="https://ik.imagekit.io/sai1975d/teams/Ashish_Chakravarthy_Finance_zX1zbpLOlY_3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162515201"
                phone="9247858685"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card
                name="Nishanth Kannan"
                position="Creatives Head"
                image="https://ik.imagekit.io/sai1975d/teams/Nishanth_Kannan_Creatives___Multimedia__1__nsEz4ti_X5YW.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162517201"
                type="mr-2"
                phone="9550820916"
              />
              <Card
                name="Sidhardha Grandhi"
                position="Creatives Head"
                image="https://ik.imagekit.io/sai1975d/teams/Sidhardha_Grandhi_Creatives_Multimedia_HPw1FA5jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162518342"
                type="mr-2"
                phone="6300568214"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card
                name="Swapnish Sahare"
                position="Pronites Head"
                image="https://ik.imagekit.io/sai1975d/teams/Swapnish_Sahare___Production___Pronites___Security_uovZIgu7-.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162519846"
                phone="7030753158"
              />
              <Card
                name="Amogh Bedarakota"
                position="Techy Head"
                image="https://ik.imagekit.io/sai1975d/teams/Amogh_Bedarakota_Techy___Workshop_9UEpqTvv2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162514684"
                phone="9492608927"
              />
              <Card
                name="Prashanth Naik"
                position="Hospitality Head"
                image="https://ik.imagekit.io/sai1975d/teams/Prashanth_Naik_Hospitality___Transport_R3JeRDgfFF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162517365"
                phone="9390234039"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card
                name="Sachi Kavitake"
                position="Culti & Biggies Head"
                image="https://ik.imagekit.io/sai1975d/teams/Sachi_Kavitake_Culti___Biggies__Social_Cause__Litr__EML_HPQKVS7G4S0O.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162517855"
                type="mr-2"
                phone="9511631183"
              />
              <Card
                name="Eshwar Yadav"
                position="Publicity Head"
                image="https://ik.imagekit.io/sai1975d/teams/Eshwar_Yadav_Publicity-1_LjDKRy-tAwwO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162516134"
                type="mr-2"
                phone="8688947336"
              />
            </div>
            <br />
          </div>
          {/* Mobile Part begins */}
          <div className="md:hidden overflow-hidden">
            <div className="grid grid-cols-1 mx-auto transform">
              <div className={styles.initialcardop}>
                <Card
                  name="Krati Arela"
                  position="Overall Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Krati_Arela_Overall_Head-1_SLjj24wyF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162516460"
                  phone="6265534713"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Smaran Kulkarni"
                  position="Public Relations Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Smaran_PR_Infi_Web_waTO4xjk3X3J.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162520497"
                  type="mr-2"
                  phone="7995204145"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Chirag Jain"
                  position="Sponsorship Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Chirag_Jain_Sponsorship__1__tm9ZuDZAa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162515830"
                  type="mr-2"
                  phone="9326168076"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Ashish Chakravarthi "
                  position="Finance Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Ashish_Chakravarthy_Finance_zX1zbpLOlY_3.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162515201"
                  type="mr-2"
                  phone="9247858685"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Prashant Naik"
                  position="Hospitality Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Prashanth_Naik_Hospitality___Transport_R3JeRDgfFF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162517365"
                  type="mr-2"
                  phone="9390234039"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Sidhardha Grandhi"
                  position="Creatives Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Sidhardha_Grandhi_Creatives_Multimedia_HPw1FA5jw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162518342"
                  type="mr-2"
                  phone="6300568214"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Nishanth Kannan"
                  position="Creatives Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Nishanth_Kannan_Creatives___Multimedia__1__nsEz4ti_X5YW.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162517201"
                  type="mr-2"
                  phone="9550820916"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Swapnish Sahare"
                  position="Pronites Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Swapnish_Sahare___Production___Pronites___Security_uovZIgu7-.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162519846"
                  type="mr-2"
                  phone="7030753158"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Amogh Bedarakota"
                  position="Techy Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Amogh_Bedarakota_Techy___Workshop_9UEpqTvv2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162514684"
                  type="mr-2"
                  phone="9492608927"
                />
              </div>
            </div>
            <div
              className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
            >
              <div className={styles.rightcard}>
                <Card
                  name="Sachi Kavitake"
                  position="Culti & Biggies Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Sachi_Kavitake_Culti___Biggies__Social_Cause__Litr__EML_HPQKVS7G4S0O.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162517855"
                  type="mr-2"
                  phone="9511631183"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Eshwar Yadav"
                  position="Publicity Head"
                  image="https://ik.imagekit.io/sai1975d/teams/Eshwar_Yadav_Publicity-1_LjDKRy-tAwwO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1646162516134"
                  type="mr-2"
                  phone="8688947336"
                />
              </div>
            </div>
            <br />
          </div>
        </div>
        <br />
        {/* <div className={`ml-5 mr-5 md:ml-40 md:mr-40 ${styles.borderitim}`}>
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
        </div> */}
        <br />
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Team;
