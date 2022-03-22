import React, { useEffect, useState } from "react";
import styles from "../css/team.module.css";
import Card from "../components/common/Card";
import Coordcard from "../components/team/Coordcard";
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
          src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
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
          src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
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
          src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
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
          src="https://ik.imagekit.io/lc4zhdkrtsr/Home/739809170sst1647891060-min_v2d7ZD-Vs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647897545933"
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
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Krati_Arela_Overall_Head-1_IXFfMSIGe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598396385"
                phone="6265534713"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card
                name="Smaran Kulkarni"
                position="Public Relations Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Smaran_PR_Infi_Web_lvWanqr3E.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598400305"
                phone="7995204145"
              />
              <Card
                name="Chirag Jain"
                position="Sponsorship Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Chirag_Jain_Sponsorship__1__gPjD54C_P.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598395188"
                phone="9326168076"
              />
              <Card
                name="Ashish Chakravarthi "
                position="Finance Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Ashish_Chakravarthy_Finance_LKtjdwLHJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598394900"
                phone="9247858685"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card
                name="Nishanth Kannan"
                position="Creatives Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Nishanth_Kannan_Creatives___Multimedia__1__gnot-IeHb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598396854"
                type="mr-2"
                phone="9550820916"
              />
              <Card
                name="Sidhardha Grandhi"
                position="Creatives Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Sidhardha_Grandhi_Creatives_Multimedia_phODqou6l.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598397528"
                type="mr-2"
                phone="6300568214"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto">
              <Card
                name="Swapnish Sahare"
                position="Pronites Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Swapnish_Sahare___Production___Pronites___Security_rvYZ9u6ma.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598399191"
                phone="7030753158"
              />
              <Card
                name="Amogh Bedarakota"
                position="Techy Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Amogh_Bedarakota_Techy___Workshop_LNNjv8sau.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598394287"
                phone="9492608927"
              />
              <Card
                name="Prashanth Naik"
                position="Hospitality Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Prashanth_Naik_Hospitality___Transport_cIAH6S7m1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598397141"
                phone="9390234039"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center">
              <Card
                name="Sachi Kavitake"
                position="Culti & Biggies Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Sachi_Kavitake_Culti___Biggies__Social_Cause__Litr__EML_osOoyHITV.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598397224"
                type="mr-2"
                phone="9511631183"
              />
              <Card
                name="Eshwar Yadav"
                position="Publicity Head"
                image="https://ik.imagekit.io/lc4zhdkrtsr/teams/IMG_20220226_212436_LkHHxsLB4.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598399047"
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
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Krati_Arela_Overall_Head-1_IXFfMSIGe.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598396385"
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
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Smaran_PR_Infi_Web_lvWanqr3E.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598400305"
                  type="mr-2"
                  phone="7995204145"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Chirag Jain"
                  position="Sponsorship Head"
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Chirag_Jain_Sponsorship__1__gPjD54C_P.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598395188"
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
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Ashish_Chakravarthy_Finance_LKtjdwLHJ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598394900"
                  type="mr-2"
                  phone="9247858685"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Prashant Naik"
                  position="Hospitality Head"
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Prashanth_Naik_Hospitality___Transport_cIAH6S7m1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598397141"
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
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Sidhardha_Grandhi_Creatives_Multimedia_phODqou6l.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598397528"
                  type="mr-2"
                  phone="6300568214"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Nishanth Kannan"
                  position="Creatives Head"
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Nishanth_Kannan_Creatives___Multimedia__1__gnot-IeHb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598396854"
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
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Swapnish_Sahare___Production___Pronites___Security_rvYZ9u6ma.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598399191"
                  type="mr-2"
                  phone="7030753158"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Amogh Bedarakota"
                  position="Techy Head"
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Amogh_Bedarakota_Techy___Workshop_LNNjv8sau.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598394287"
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
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/Sachi_Kavitake_Culti___Biggies__Social_Cause__Litr__EML_osOoyHITV.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598397224"
                  type="mr-2"
                  phone="9511631183"
                />
              </div>
              <div className={styles.lefttcard}>
                <Card
                  name="Eshwar Yadav"
                  position="Publicity Head"
                  image="https://ik.imagekit.io/lc4zhdkrtsr/teams/IMG_20220226_212436_LkHHxsLB4.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1647598399047"
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
      <div className="container lg:w-3/4 md:4/5 mx-auto">
        <div className={`ml-14 mr-14  md:ml-40 md:mr-40 ${styles.borderitim}`}>
          <div className="hidden md:block">
            <div className="grid md:grid-cols-3 mx-auto ">
              <Coordcard
                domainname="Web"
                name1="Ajay Patel"
                name2="Arun Siddardha"
                name3="Sai Prachodhan "
                contact1="8737040766"
                contact2="8309949805"
                contact3="9160571016"
              />
              <Coordcard
                domainname="Public Relations"
                name1="KN Vardhan"
                name2="Shreya Kumar"
                name3="Varshitha Manduri "
                contact1="9652793113"
                contact2="9108776376"
                contact3="9154619754"
              />
              <Coordcard
                domainname="Publicity"
                name1="Keerthan Reddy "
                name2="Kandarpi Ananya"
                name3="M.Shathanand sai"
                contact1="8985580273"
                contact2="8790449627"
                contact3="9704327082"
              />
            </div>
            <div className="grid md:grid-cols-2 mx-auto mt-12">
              <Coordcard
                domainname="Infra"
                name1="Stephen VS"
                name2="Divyanshu Raj"
                contact1="8136938412"
                contact2="7004816723"
              />
              <Coordcard
                domainname="Workshops"
                name1="Pitta Divya"
                name2="Saumya Mundra"
                contact1="8919467681"
                contact2="7021626600"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto mt-12">
              <Coordcard
                domainname="Creatives"
                name1="Krutali Jadav"
                name2="Viren "
                contact1="9662243208"
                contact2="7408070150"
              />
              <Coordcard
                domainname="Creatives"
                name1="Vikhyath K"
                name2="Pranati Kompella"
                name3="Rishit Singh "
                contact1="7708711549"
                contact2="9908010452"
                contact3="9196111222"
              />
              <Coordcard
                domainname="Creatives"
                name1="Ishani Churi"
                name2="Utkarsh Srivastava"
                contact1="9152233084"
                contact2="6390537854"
              />
            </div>
            <div className="grid md:grid-cols-2 mx-auto mt-12">
              <Coordcard
                domainname="Techy"
                name1="Vishal Datta"
                name2="Varunaditya Singhal"
                contact1="7670925438"
                contact2="7015715920"
              />
              <Coordcard
                domainname="Informals"
                name1="Shraddha Reddy"
                name2="Aditya Nimbal"
                contact1="9740834746"
                contact2="6301917276"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto mt-12">
              <Coordcard
                domainname="Multimedia"
                name1="Pavan Kumar"
                name2="Kaushek Haldar"
                name3="Prasanth Tata"
                contact1="8827366455"
                contact2="9870063351"
                contact3="9000180912"
              />
              <Coordcard
                domainname="Litr"
                name1="Teerth Raval"
                name2="Aditi Agarwal"
                contact1="7020426653"
                contact2="7999682571"
              />
              <Coordcard
                domainname="Culti & Biggies"
                name1="Deekshitha Reddy"
                name2="Shreyansh Agarwal"
                name3="Satwik Sajja "
                contact1="7330784699"
                contact2="8979471587"
                contact3="9110307690"
              />
            </div>
            <div className="grid md:grid-cols-2 mx-auto mt-12">
              <Coordcard
                domainname="Hospitality"
                name1="Ramanathan Annamalai"
                name2="K.Madhumitha "
                contact1="9901223980"
                contact2="8309567379"
              />
              <Coordcard
                domainname="Hospitality"
                name1="Anita Dash"
                name2="Sidhant Ranka"
                contact1="8088630598"
                contact2="9586406788"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto mt-12">
              <Coordcard
                domainname="Sponsorship"
                name1="Prakhar Patni"
                name2="Devang Sardal"
                contact1="9607048465"
                contact2="9136093007"
              />
              <Coordcard
                domainname="Sponsorship"
                name1="Sailesh Reddy"
                contact1="9740834746"
              />
              <Coordcard
                domainname="Sponsorship"
                name1="Poorvika C"
                name2="Ekshan Raj Verma"
                contact1="9900810774"
                contact2="6266875616"
              />
            </div>
            <div className="grid md:grid-cols-2 mx-auto mt-12">
              <Coordcard
                domainname="Pronites"
                name1="Akanksha Pansare"
                contact1="8275424006"
              />
              <Coordcard
                domainname="Social Cause"
                name1="Avni Parakh"
                contact1="9111622365"
              />
            </div>
            <div className="grid md:grid-cols-3 mx-auto mt-12">
              <Coordcard
                domainname="EML"
                name1="Satwik Arawalli "
                contact1="8217435039"
              />
              <Coordcard
                domainname="Production"
                name1="Pothuraju Rupin"
                contact1="7793916108"
              />
              <Coordcard
                domainname="Transport"
                name1="Adithya Ram"
                contact1="7670934896"
              />
            </div>
          </div>
          <div className="md:hidden overflow-hidden">
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Web"
                  name1="Ajay Patel"
                  name2="Arun Siddardha"
                  name3="Sai Prachodhan "
                  contact1="8737040766"
                  contact2="8309949805"
                  contact3="9160571016"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="PR"
                  name1="KN Vardhan"
                  name2="Shreya Kumar"
                  name3="Varshitha Manduri "
                  contact1="9652793113"
                  contact2="9108776376"
                  contact3="9154619754"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Publicity"
                  name1="Keerthan Reddy "
                  name2="Kandarpi Ananya"
                  name3="M.Shathanand sai"
                  contact1="8985580273"
                  contact2="8790449627"
                  contact3="9704327082"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Multimedia"
                  name1="Pavan Kumar"
                  name2="Kaushek Haldar"
                  name3="Prasanth Tata"
                  contact1="8827366455"
                  contact2="9870063351"
                  contact3="9000180912"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Culti & Biggies"
                  name1="Deekshitha Reddy"
                  name2="Shreyansh Agarwal"
                  name3="Satwik Sajja "
                  contact1="7330784699"
                  contact2="8979471587"
                  contact3="9110307690"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Creatives"
                  name1="Vikhyath K"
                  name2="Pranati Kompella"
                  name3="Rishit Singh "
                  contact1="7708711549"
                  contact2="9908010452"
                  contact3="9196111222"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Creatives"
                  name1="Krutali Jadav"
                  name2="Viren "
                  contact1="9662243208"
                  contact2="7408070150"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Creatives"
                  name1="Ishani Churi"
                  name2="Utkarsh Srivastava"
                  contact1="9152233084"
                  contact2="6390537854"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Hospitality"
                  name1="Ramanathan Annamalai"
                  name2="K.Madhumitha "
                  contact1="9901223980"
                  contact2="8309567379"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Hospitality"
                  name1="Anita Dash"
                  name2="Sidhant Ranka"
                  contact1="8088630598"
                  contact2="9586406788"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Litr"
                  name1="Teerth Raval"
                  name2="Aditi Agarwal"
                  contact1="7020426653"
                  contact2="7999682571"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Informals"
                  name1="Shraddha Reddy"
                  name2="Aditya Nimbal"
                  contact1="9740834746"
                  contact2="6301917276"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Techy"
                  name1="Vishal Datta"
                  name2="Varunaditya Singhal"
                  contact1="7670925438"
                  contact2="7015715920"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Sponsorship"
                  name1="Sailesh Reddy"
                  contact1="9740834746"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Sponsorship"
                  name1="Prakhar Patni"
                  name2="Devang sardal"
                  contact1="9607048465"
                  contact2="9136093007"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Sponsorship"
                  name1="Poorvika C"
                  name2="Ekshan Raj Verma"
                  contact1="9900810774"
                  contact2="6266875616"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Infra"
                  name1="Stephen VS"
                  name2="Divyanshu Raj"
                  contact1="8136938412"
                  contact2="7004816723"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Workshops"
                  name1="Pitta Divya"
                  name2="Saumya Mundra"
                  contact1="8919467681"
                  contact2="7021626600"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Pronites"
                  name1="Akanksha Pansare"
                  contact1="8275424006"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Social Cause"
                  name1="Avni Parakh"
                  contact1="9111622365"
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 mx-auto`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="EML"
                  name1="Satwik Arawalli "
                  contact1="8217435039"
                />
              </div>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Production"
                  name1="Pothuraju Rupin"
                  contact1="7793916108"
                />
              </div>
            </div>
            <div className={` grid-cols-1 mx-auto flex align-center`}>
              <div className={`flex align-center ${styles.cardcoord}`}>
                <Coordcard
                  domainname="Transport"
                  name1="Adithya Ram"
                  contact1="7670934896"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Team;
