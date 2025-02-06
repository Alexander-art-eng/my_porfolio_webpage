import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = ({ darkMode }) => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <Image 
          src={darkMode ? assets.logo_dark : assets.logo}
          alt="footer logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image 
            src={darkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className="w-6"
          />
          alexanderhabte5@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&#169; Alexander Tesfay. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a target="_blank" href="https://github.com/Alexander-art-eng">GitHub</a></li>
          <li><a target="_blank" href="https://github.com/Alexander-art-eng">Linkedin</a></li>
          <li><a target="_blank" href="https://github.com/Alexander-art-eng">facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
