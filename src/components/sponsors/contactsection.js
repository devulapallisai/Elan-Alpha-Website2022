import React from "react";

function Contactsection() {
  return (
    <div className="container mx-auto py-2 md:py-6 md:w-3/4">
      <div className="grid md:grid-cols-1 mx-auto py-0 md:py-5">
        <div data-aos="fade-up">
          <h1 className="text-center font-text text-white text-lg">
            Chirag Jain
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            chiraj@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9326168076
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mx-auto py-0 md:py-5">
        <div data-aos="fade-right" className="py-2 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Ekshan</h1>
          <h1 className="text-center font-text text-white text-lg">
            ekshan.v@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            6266875616
          </h1>
        </div>
        <div data-aos="fade-down" className="py-2 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Devang</h1>
          <h1 className="text-center font-text text-white text-lg">
            devang.s@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9136093007
          </h1>
        </div>
        <div data-aos="fade-left" className="py-2 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Poorvika</h1>
          <h1 className="text-center font-text text-white text-lg">
            poorvika.c@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9900810774
          </h1>
        </div>
        <div data-aos="fade-right" className="md:hidden py-2 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Sailesh</h1>
          <h1 className="text-center font-text text-white text-lg">
            sailesh.m@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9740834746
          </h1>
        </div>
        <div data-aos="fade-left" className="md:hidden mt-2 mb-10 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Prakhar</h1>
          <h1 className="text-center font-text text-white text-lg">
            prakhar.p@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9607048465
          </h1>
        </div>
        
      </div>
      <div className="hidden md:flex justify-center mx-auto py-0 md:py-5">
        <div data-aos="fade-right" className="py-2 px-6 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Prakhar</h1>
          <h1 className="text-center font-text text-white text-lg">
            prakhar.p@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9607048465
          </h1>
        </div>
        <div data-aos="fade-left" className="py-2 px-6 md:py-0">
          <h1 className="text-center font-text text-white text-lg">Sailesh</h1>
          <h1 className="text-center font-text text-white text-lg">
            sailesh.m@elan.org.in
          </h1>
          <h1 className="text-center font-text text-white text-lg">
            9740834746
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contactsection;
