import React from 'react'
import Card from "../../components/events/event-card";
import line from "../../images/events/line gols 9.png";
import lineHz from "../../images/events/line gols 8.png";
import Zakir from "../../images/events/Coming Soon (1).png";
function Techy() {
    return (
        <>
        <div className="hidden md:block ">
            <div
                className={`container mx-auto grid md:grid-cols-11 ${styles.gridcont}`}
            >
                <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
                <img
                    src={line}
                    alt="imagehere"
                    className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
                <img
                    src={line}
                    alt="imagehere"
                    className="my-auto mx-auto col-span-1 hidden md:block"
                ></img>

                <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
            </div>
        </div>
  {/* Mobile Part begins */ }
    <div className="md:hidden overflow-hidden mx-10 ">
        <div className="grid grid-cols-1 mx-auto">
            <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
        </div>
        <img
            src={lineHz}
            alt="imagehere"
            className="my-3 mx-auto col-span-1  md:hidden"
        ></img>
        <div className="grid grid-cols-1 mx-auto">
            <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
        </div>
        <img
            src={lineHz}
            alt="imagehere"
            className="my-3 mx-auto col-span-1  md:hidden"
        ></img>
        <div className="grid grid-cols-1 mx-auto">
            <Card type="col-span-3 mx-0" text="TBA" image={Zakir} />
        </div>
    </div>
    </>
  )
}

export default Techy