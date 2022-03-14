import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="grid md:grid-cols-1 mx-auto py-0 md:py-5">
        <div data-aos="fade-up">
          <h1 className="text-center font-text text-white text-lg">
            Aditi Agrawal
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            aditi.a@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            7999682571
          </h1>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-1 px-8 flex justify-end">


        <div className="flex flex-col my-auto ml-4">
         
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col justify-between items-center">
            
          <h2 className="text-sm sm:text-lg font-heading m-0 "> Social Media  </h2>
          <div className="flex flex-row-reverse w-[60px]">
            <a
              href=" https://www.instagram.com/cryptex.iith/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl my-auto pl-3 pt-3"
              />
            </a>
            <a
              href="mailto:cryptex@elan.org.in"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-xl my-auto pr-3 pt-3"
              />
            </a>
          </div>
          </div>
        </div>
      </div>


      <div className="grid md:hidden grid-cols-1 ml-2">
      <div className=" flex justify-end">
        <div className="flex flex-col my-auto ml-4 items-center">
          <h2 className="text-sm sm:text-lg font-heading m-0">Social Media</h2>

          <div className="flex flex-row-reverse w-[60px]">
            <a
              href=" https://www.instagram.com/cryptex.iith/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl my-auto pl-3 pt-3"
              />
            </a>
            <a
              href="mailto:cryptex@elan.org.in"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-xl my-auto pr-3 pt-3"
              />
            </a>
          </div>
          </div>
        </div>
     </div>
    </>
  );
}

export default Contact;
