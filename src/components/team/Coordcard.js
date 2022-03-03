import React from "react";
import styles from "../../css/team.module.css";
function Coordcard({ domainname, name1, name2, name3, contact1, contact2, contact3,type }) {
    return (
        <div className={` ${type} `} data-aos="zoom-in">
            <div className="text-center font-text text-1.5xl  text-white font-bold mt-3">
                {domainname}
            </div>
            <div className="text-center font-text text-1.5xl  text-white mt-3">
                {name1} <br /> {contact1}
            </div>
            <div className="text-center font-text text-1.5xl  text-white mt-3">
                {name2} <br /> {contact2}
            </div>
            <div className="text-center font-text text-1.5xl  text-white mt-3">
                {name3} <br /> {contact3}
            </div>
        </div>

    );
}

export default Coordcard;