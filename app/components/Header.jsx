import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-20">
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </div>

      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi, I'm Alexander{" "}
        <Image src={assets.hand_icon} alt="profile image" className="w-6" />
      </h3>

      <h1 className="text-3xl sm:text-4xl lg:text=[66px] font-Ovo">
        A DEVELOPER eager about making the world a better place using TECH
      </h1>
      <p
        className="max-w-2xl mx-auto font-Ovo"
      >
        I'm from Eritrea, very passionate about developing a
        soulutions by leveraging programms and applications to make our life
        easier
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a 
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow icon"
            className="w-4"
          />
        </a>

        <a 
          href="/resume-apply.docx" 
          download 
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Resume
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
