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
  const [relation, statehandler6] = useState("");
  const sendEmail = (e) => {
    console.log(rel)
    e.preventDefault();
    if (rel == "Info"){
      emailjs
      .sendForm(
        "service_328tyrj",
        "template_ue9mrbg",
        form.current,
        "user_g8e7UyjabtYkZJBVSvW6J"
      )
      .then(
        (result) => {
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
    }
    else if(rel =="Public Relations" || rel == "Informals")
    {
      emailjs
      .sendForm(
        "service_0s2vnvk",
        "template_0blbjw6",
        form.current,
        "yTabJscJ8FxzGpgH6"
      )
      .then(
        (result) => {
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

    }
    else if (rel == "Social Cause" || rel == "Culti")
    {

      emailjs
      .sendForm(
        "service_j3mfi7u",
        "template_nyfcmsk",
        form.current,
        "XuTAhRnORESsapf1q"
      )
      .then(
        (result) => {
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

    }
    else if (rel == "Finance" || rel == "Merchandise")
    {

      emailjs
      .sendForm(
        "service_0s2vnvk",
        "template_lp8dowo",
        form.current,
        "yTabJscJ8FxzGpgH6"
      )
      .then(
        (result) => {
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

    }
    else if (rel == "Workshops" || rel == "Techy")
    {

      emailjs
      .sendForm(
        "service_j3mfi7u",
        "template_hzmw6xr",
        form.current,
        "XuTAhRnORESsapf1q"
      )
      .then(
        (result) => {
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

    }
    else if (rel == "Sponsors")
    {

      emailjs
      .sendForm(
        "service_qm9ch3q",
        "template_cxpwq7t",
        form.current,
        "0BEh3Pli1fv1yWqy2"
      )
      .then(
        (result) => {
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

    }
    else if (rel == "Proshows")
    {

      emailjs
      .sendForm(
        "service_qm9ch3q",
        "template_0g3ujen",
        form.current,
        "0BEh3Pli1fv1yWqy2"
      )
      .then(
        (result) => {
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

    }
  
    
  };
  return (
    <>
      <div className="hidden md:block">
        {/* <h1 className="text-center font-heading text-3xl">Contact Us</h1> */}
        <div className=" h-screen flex flex-col items-center justify-center bg-[#F5C470] relative">
        
          <form
            ref={form}
            onSubmit={sendEmail}
            className={`w-2/3 container px-10 mx-auto grid grid-cols-8 grid-flow-row auto-rows-max gap-2 text-black grid-rows-5 ${styles.border}`}
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
              <select className="col-span-8 row-span-1 border border-gray-300 rounded-lg text-black-400 h-12 p-2 bg-[#F2EFE1] hover:border-black focus:outline-none appearance-none" name="Public" value={rel} onChange={(e) => statehandler4(e.target.value)}>
                <option className="text-black p-2 m-2" value ="Public Relations">Public Relations</option>
                <option className="text-black p-2 m-2" value ="Sponsors"> Sponsorships</option>
                <option className="text-black p-2 m-2" value ="Proshows">Proshows</option>
                <option className="text-black p-2 m-2" value ="Finance">Finance</option>
                <option className="text-black p-2 m-2" value ="Workshops">Workshops</option>
                <option className="text-black p-2 m-2" value ="Social Cause">Social Cause</option>
                <option className="text-black p-2 m-2" value ="Culti">Culti & Biggies</option>
                <option className="text-black p-2 m-2" value ="Techy">Techy</option>
                <option className="text-black p-2 m-2" value ="Informals">Informals</option>
                <option className="text-black p-2 m-2" value ="Merchandise">Merchandise</option>
                <option className="text-black p-2 m-2" value ="Info">Micellaneous</option>
              </select>
            <input
              className="col-span-8 row-span-1 rounded-lg p-2 bg-[#F2EFE1] hidden"
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
             <select className="col-span-2 row-span-1 border border-gray-300 rounded-lg text-black-400 h-12 p-2 bg-[#F2EFE1] hover:border-black focus:outline-none appearance-none" name="Public" id="public" value={rel} onChange={(e) => statehandler4(e.target.value)}>
                <option className="text-black" value ="Public">Public Relations</option>
                <option className="text-black" value ="Sponsor"> Sponsorships</option>
                <option className="text-black" value ="Proshow">Proshows</option>
                <option className="text-black" value ="Finance">Finance</option>
                <option className="text-black" value ="Workshop">Workshops</option>
                <option className="text-black" value ="Social">Social Cause</option>
                <option className="text-black" value ="Culti">Culti & Biggies</option>
                <option className="text-black" value ="Informals">Informals</option>
                <option className="text-black" value ="Merchandise">Merchandise</option>
                <option className="text-black" value ="Info">Micellaneous</option>
              </select>
            <input
              className="col-span-2 row-span-1 rounded-lg p-2 bg-[#F2EFE1] hidden"
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
