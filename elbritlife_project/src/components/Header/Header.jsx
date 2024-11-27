import React from 'react'
import Navbar from './../Navbar/Navbar';
import Header_component from '../Header_component/Header_component';
import Header_footer from '../Header_Footer/Header_footer';

const Header = () => {
  return (
    <div>
    <div className=' h-10'><Navbar/></div> 
    <div>
    <Header_component/>
    </div>
    <div className="container-fluid"></div>   
    </div>
  )
}

export default Header