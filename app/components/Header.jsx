import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div 
        className="mt-20"
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image
          src={assets.profile_img}
          alt="profile image"
          className="rounded-full w-32"
        />
      </motion.div>

      <motion.h3 
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.6}}
      >
        Hi, I'm Alexander{" "}
        <Image src={assets.hand_icon} alt="profile image" className="w-6" />
      </motion.h3>

      <motion.h1 
        className="text-3xl sm:text-4xl lg:text=[66px] font-Ovo"
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.8}}
      >
        A DEVELOPER eager about making the world a better place using TECH
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.5}}
      >
        I'm from <strong>Eritrea,</strong> very passionate about developing a
        solutions by leveraging programms and applications to make our life
        easier
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a 
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1}}
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt="right arrow icon"
            className="w-4"
          />
        </motion.a>

        <motion.a 
          href="/resume-apply.docx" 
          download 
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
        >
          Resume
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
