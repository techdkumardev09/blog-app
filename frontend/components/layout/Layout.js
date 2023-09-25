// components/Layout.js
import React from 'react';
import Header from '../header/Header'; // Import Header component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='container max-w-[1200px] mx-auto sm:px-0 px-3'>{children}</main>
    </div>
  );
};

export default Layout;