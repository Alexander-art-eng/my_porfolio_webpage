import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react"

const About = ({ darkMode }) => {
  return (
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id="about"
    >
      <motion.h4 
        className="text-center mb-2 text-lg font-Ovo"
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
      >
        Introduction
      </motion.h4>
      <motion.h2 
        className="text-center text-5xl font-Ovo"
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
      >
        About me
      </motion.h2>

      <motion.div 
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        <motion.div 
          className="w-72 sm:w-80 max-w-none"
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
        >
          <Image
            src={assets.profile_img}
            alt="profile pic"
            className="w-full rounded-[4rem]"
          />
        </motion.div>

        <motion.div 
          className="flex-1"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
            aut quo libero consequuntur ullam non deserunt dolore sunt repellat
            praesentium reprehenderit autem voluptatibus, mollitia, doloremque
            repudiandae aliquam velit enim! Officiis.
          </p>

          <motion.ul 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
          >
            {infoList.map(({icon, iconDark, title, description}, i)=>(
                <motion.li 
                  key={i}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-300 dark:border-white dark:hover:bg-darkHover/50 dark:hover:shadow-white"
                  whileHover={{scale: 1.05}}
                >
                  <Image src={darkMode ? iconDark : icon} alt={title} className="w-7 mt-3"/>
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{ title }</h3>
                  <p className="text-gray-600 text-sm dark:text-white/80">{ description }</p>
                </motion.li>
            ))}
          </motion.ul>

          <motion.h4 
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 1.3, duration: 0.5}}
          >
            Tools I use
          </motion.h4>

          <motion.ul 
            className="flex items-center gap-3 sm:gap-5"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.5, duration: 0.6}}
          >
            { toolsData.map((tool, i)=>(
                <motion.li
                  key={i}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer"
                  whileHover={{scale: 1.05}}
                >
                  <Image 
                    src={tool}
                    alt="Tools"
                    className="w-5 sm:w-7"
                  />
                </motion.li>
            )) }
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
