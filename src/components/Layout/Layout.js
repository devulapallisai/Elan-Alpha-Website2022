import React,{useState} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../common/Header";
import Schedule from "../Schedule";

function Layout({block}) {
  const path = useLocation().pathname.split('/')[1];
  const [sched,usesched]=useState(false)
  return (
    <>
      <Header path={path} block={block} sched={sched} setsched={usesched}/>
      <Outlet />
      {sched?(
        <div className="w-screen h-screen z-50 text-white fixed">
          <Schedule setsched={usesched}/>
        </div>
      ):''}
    </>
  );
}

export default Layout;
