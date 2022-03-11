import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
      <div className="hidden md:grid grid-cols-2 px-8">
        <div
          className="flex flex-row justify-between"
          style={{ maxWidth: 200 }}
        >

          <a
            href=" https://www.instagram.com/cryptex.iith/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-3xl"
            />
          </a>

        </div>
        <div className="flex justify-end">
          <div className="flex justify-between text-center">
            <span className="font-bold text-2xl font-text text-headerwhite my-auto mx-2 lg:mx-4">
              Email

              <br />
              <span className="text-center font-text text-white text-lg my-auto mx-2 lg:mx-4">
                cryptex@elan.org.in
              </span>
            </span>

            <h1 className="text-center font-text text-white text-lg my-auto mx-2 lg:mx-4">

            </h1>
            <span
              className={`font-bold text-2xl font-text text-headerwhite my-auto mx-2 lg:mx-4`}
            >

            </span>
          </div>
        </div>
      </div>

      <div className="grid md:hidden grid-cols-2 ml-2">
        <div className="flex flex-col my-auto ml-4">
          <h2 className="text-sm sm:text-lg font-heading m-0">Social Media</h2>
         
          <div className="flex flex-row-reverse w-[60px]">

            <a
              href=" https://www.instagram.com/cryptex.iith/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl my-auto"
              />
            </a>
          </div>

        </div>
        <div className="flex justify-end my-auto mr-4">
          <div className="flex justify-between flex-col-reverse text-center">

            <h2
              className={` text-sm sm:text-lg font-heading  lg:mx-4 align-right`}
            >
              Email

              <br />
              <span className="text-center font-text text-white text-lg my-auto lg:mx-4">
                cryptex@elan.org.in
              </span>

            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
