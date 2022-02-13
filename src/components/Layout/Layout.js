import React,{useEffect,useState} from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../common/Header";

function Layout({block}) {
  const path = useLocation().pathname.split('/')[1];
  return (
    <>
      <Header path={path} block={block}/>
      <Outlet />
    </>
  );
}

export default Layout;
