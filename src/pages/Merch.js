import React, { useEffect, useState } from "react";
import styles from "../css/team.module.css";
import Card from "../components/common/Card";
import Coordcard from "../components/team/Coordcard";
import stylesevents from "../css/events.module.css";
import merch1 from "../images/merch/Back design.jpg";
import merch2 from "../images/merch/C3.jpg";
import merch3 from "../images/merch/Back design.jpg";
import merch4 from "../images/merch/Combo 1_f.jpg";
import merch5 from "../images/merch/Combo 2_f.jpg";
import merch6 from "../images/merch/Hoodie.jpg";
import merch7 from "../images/merch/White_tee_f.jpg";
import merch8 from "../images/merch/Yellow.jpg";

import Footer from "../components/common/Footer";
function Merch() {
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
                className={`fixed top-8 left-2 ${scroll ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-500 ease-in-out delay-75`}
            >
                <img
                    src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
                    alt="Img"
                    className={styles.widthis}
                />
            </div>
            <div
                className={`fixed left-8 xs:left-16 ${scroll ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-500 ease-in-out delay-75 ${styles.leftmost
                    }`}
            >
                <img
                    src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
                    alt="Img"
                    className={styles.widthis}
                />
            </div>
            <div
                className={`fixed top-8 right-2 ${scroll ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-500 ease-in-out delay-75`}
            >
                <img
                    src="https://ik.imagekit.io/sai1975d/Homepage/Lanterntop_ElMfEjYvzo1B.png?ik-sdk-version=javascript-1.4.3&updatedAt=1646162346668"
                    alt="Img"
                    className={styles.widthis}
                />
            </div>
            <div
                className={`fixed right-8 xs:right-16 ${scroll ? "opacity-100" : "opacity-50"
                    } transition-opacity duration-500 ease-in-out delay-75 ${styles.leftmost
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
                    Merch
                </h1>
                <br />
                <div className="container lg:w-3/4 md:4/5 mx-auto">
                    <div className="hidden md:block">

                        <div className="grid md:grid-cols-3 mx-auto">
                            <Card

                                image={merch1}


                            />
                            <Card

                                image={merch2}

                            />
                            <Card

                                image={merch3}

                            />
                        </div>

                        <div className="grid md:grid-cols-3 mx-auto">
                            <Card

                                image={merch6}

                            />
                            <Card

                                image={merch7}

                            />
                            <Card

                                image={merch8}

                            />
                        </div>
                        <div className="flex flex-col md:flex-row justify-center">
                            <Card

                                image={merch4}
                                type="mr-2"

                            />
                            <Card

                                image={merch5}
                                type="mr-2"
                            />
                        </div>
                        <br />
                    </div>
                    {/* Mobile Part begins */}
                    <div className="md:hidden overflow-hidden">

                        <div
                            className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
                        >
                            <div className={styles.rightcard}>
                                <Card

                                    image={merch1}
                                    type="mr-2"
                                />
                            </div>
                            <div className={styles.lefttcard}>
                                <Card

                                    image={merch2}
                                    type="mr-2"
                                />
                            </div>
                        </div>
                        <div
                            className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
                        >
                            <div className={styles.rightcard}>
                                <Card

                                    image={merch3}
                                    type="mr-2"
                                />
                            </div>
                            <div className={styles.lefttcard}>
                                <Card

                                    image={merch6}
                                    type="mr-2"
                                />
                            </div>
                        </div>
                        <div
                            className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
                        >
                            <div className={styles.rightcard}>
                                <Card

                                    image={merch7}
                                    type="mr-2"

                                />
                            </div>
                            <div className={styles.lefttcard}>
                                <Card

                                    image={merch8}
                                    type="mr-2"

                                />
                            </div>
                        </div>
                        <div
                            className={`flex flex-row justify-center overflow-x-hidden ${styles.heightfix}`}
                        >
                            <div className={styles.rightcard}>
                                <Card

                                    image={merch4}
                                    type="mr-2"

                                />
                            </div>
                            <div className={styles.lefttcard}>
                                <Card

                                    image={merch5}
                                    type="mr-2"

                                />
                            </div>
                        </div>

                        <br />
                    </div>
                    <div className={`${stylesevents.merchbutton} `}>
                        <a
                            href="https://forms.gle/uUZSVkKsVUYXErhb7"
                            target="_blank"
                            rel="noreferrer"
                            className={`${stylesevents.button} font-text mt-3 text-white`}
                        >
                            BUY NOW
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <Footer />
            </div>
        </div>
    );
}

export default Merch;
