import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';

function Layout() {
   return <>
      <Header />
      <Outlet />
   </>;
}

export default Layout;
