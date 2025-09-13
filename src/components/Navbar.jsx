import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const right = open ? "right-0" : "right-[-1200px]";
  const toggleNavbarMenu = () => {
    setOpen(prev => !prev);
  }

  return (
    <nav className="z-50 h-16 w-full fixed top-0 left-0 bg-green-800">

      <div className="container mx-auto h-full flex flex-row items-center justify-between relative p-4">
        <a className="text-white hover:brightness-75 transition duration-300 ease-in-out font-serif text-lg" href="#">Kahve Durağım</a>



        <ul className={`flex flex-col lg:flex-row items-center justify-center gap-4 p-4 bg-green-800 fixed lg:static w-screen lg:w-auto h-[calc(100vh-64px)] lg:h-full top-16 ${right}`} style={{ transition: "right 300ms ease-in-out" }}>
          <li><a className="text-white hover:brightness-75 transition duration-300 ease-in-out" href="#about">Hakkımızda</a></li>
          <li><a className="text-white hover:brightness-75 transition duration-300 ease-in-out" href="#features">Ürünlerimiz</a></li>
          <li><a className="text-white hover:brightness-75 transition duration-300 ease-in-out" href="#gallery">Galeri</a></li>
          <li><a className="text-white hover:brightness-75 transition duration-300 ease-in-out" href="#contact">İletişim</a></li>
        </ul>

        <button className='lg:hidden cursor-pointer text-white text-2xl' onClick={toggleNavbarMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar