import React, { useRef, useState } from "react";
import styles from "../css/contact.module.css";
// import Footer from "../components/common/Footer";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const [name, statehandler1] = useState("");
  const [msg, statehandler5] = useState("");
  const [num, statehandler3] = useState("");
  const [rel, statehandler4] = useState("");
  const [email, statehandler2] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_328tyrj",
        "template_ue9mrbg",
        form.current,
        "user_g8e7UyjabtYkZJBVSvW6J"
      )
      .then(
        (result) => {
          console.log(result.text);
          statehandler2("");
          statehandler1("");
          statehandler3("");
          statehandler4("");
          statehandler5("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="hidden md:block">
        {/* <h1 className="text-center font-heading text-3xl">Contact Us</h1> */}
        <div className=" h-screen flex flex-col items-center justify-center bg-[#F5C470] relative">
        
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`w-2/3 container p-10 mx-auto grid grid-cols-8 grid-flow-row auto-rows-max gap-2 text-black grid-rows-5 ${styles.border}`}
          >
            <div className="px-1 py-1 items-center h-[50px] w-[200px] align-center cursor-pointer justify-center font-heading text-lg bg-[#F5C470] rounded-lg ">
            CONTACT US
          </div>
           
            <input
              className="col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={name}
              name="name"
              placeholder="First Name"
              onChange={(e) => statehandler1(e.target.value)}
            />
            <input
              className="col-span-4 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => statehandler2(e.target.value)}
            />
            <input
              className="col-span-4 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={num}
              name="num"
              placeholder="Phone Number"
              onChange={(e) => statehandler3(e.target.value)}
            />
            <input
              className="col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={rel}
              placeholder="Public Relation"
              onChange={(e) => statehandler4(e.target.value)}
              name="rel"
            />
            <textarea
              className="col-span-8 row-span-4 rounded-lg p-2 bg-[#F2EFE1] resize-none"
              value={msg}
              placeholder="Your message"
              onChange={(e) => statehandler5(e.target.value)}
              name="msg"
            />
            {/* <input
              type="submit"
              className="col-span-2 bg-[#] font-heading p-10"
            >
              SUBMIT
            </input> */}
            <div className="flex mt-4 justify-center mx-auto w-[50vw]">
              <button
                type="submit"
                className="text-2xl justify-self-center font-heading"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* {mobile part begins} */}
      <div className="block md:hidden">
        <div
          className={` h-screen flex flex-col  items-center justify-center gap-5 relative ${styles.bg} block`}
        >
          <div className="px-7 py-2 items-center justify-center font-heading text-lg bg-[#F5C470] rounded-lg ">
            CONTACT US
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`grid grid-cols-1 w-5/6 text-xs container p-7  mx-auto   gap-2 text-black grid-rows-5 rounded-xl  bg-[#F5C470]`}
          >
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={name}
              name="name"
              placeholder="First Name"
              onChange={(e) => statehandler1(e.target.value)}
            />
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={(e) => statehandler2(e.target.value)}
            />
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={num}
              name="num"
              placeholder="Phone Number"
              onChange={(e) => statehandler3(e.target.value)}
            />
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 bg-[#F2EFE1]"
              type="text"
              value={rel}
              name="rel"
              placeholder="Public Relation"
              onChange={(e) => statehandler4(e.target.value)}
            />
            <textarea
              className="col-span-2 row-span-4  rounded-lg p-2 bg-[#F2EFE1] resize-none"
              name="msg"
              placeholder="Your message"
              value={msg}
              onChange={(e) => statehandler5(e.target.value)}
            />
            <button
              type="submit"
              className="text-xl text-white font-bold col-span-2 font-heading p-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
