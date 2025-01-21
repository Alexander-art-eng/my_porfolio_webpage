'use client'
import { assets } from "@/assets/assets"
import Image from "next/image"
import { useRef } from "react"

const Navbar = () => {
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image 
          src={assets.header_bg_color}
          alt="gradient background image"
          className="w-full"
        />
      </div>

      <nav style={{border: "3px solid red"}} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top" style={{border: " 3px solid yellow"}}>
            <Image 
              src={assets.logo}
              alt="logo pic"
              className="w-28 cursor-pointer border mr-14"
              style={{border: "3px solid blue"}}
            />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My Work</a></li>
          <li><a className="font-Ovo" href="#contact">Contact </a></li>
        </ul>

        <div style={{border: "3px solid red"}} className="flex items-center gap-4">
            <button>
                <Image 
                  src={assets.moon_icon}
                  alt="light or dark mode icon"
                  className="w-6"
                />
            </button>
           
            <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">Contact <Image src={assets.arrow_icon} alt="arrow icon" className="w-3"/></a>
           
            <button className="block md:hidden ml-3 border" onClick={openMenu}>
                <Image 
                  src={assets.menu_black}
                  alt=""
                  className="w-6"
                />
            </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 bg-rose-50 transition duration-500">
          
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image 
              src={assets.close_black}
              alt="close window icon"
              className="w-4 cursor-pointer"
            />
          </div>

          <li onClick={closeMenu}><a className="font-Ovo" href="#top">Home</a></li>
          <li onClick={closeMenu}><a className="font-Ovo" href="#about">About</a></li>
          <li onClick={closeMenu}><a className="font-Ovo" href="#services">Services</a></li>
          <li onClick={closeMenu}><a className="font-Ovo" href="#work">My Work</a></li>
          <li onClick={closeMenu}><a className="font-Ovo" href="#contact">Contact </a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
