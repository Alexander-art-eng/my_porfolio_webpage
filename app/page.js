'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import MyProjects from "./components/MyProjects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/Footer";
import { use, useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar darkMode={isDarkMode} isDarkMode={setIsDarkMode} />
      <Header darkMode={isDarkMode} />
      <About darkMode={isDarkMode} />
      {/* <Services darkMode={isDarkMode} /> */}
      <MyProjects darkMode={isDarkMode} />
      <Contacts darkMode={isDarkMode} />
      <Footer darkMode={isDarkMode} />
    </>
  );
}
