import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const MyProjects = ({ darkMode }) => {
  return (
    <div id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="h4-style">Projects</h4>
      <h2 className="h2-style">My latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        In my latest project, I developed a comprehensive automated testing
        suite using Cypress and Playwright, ensuring seamless UI interactions,
        responsive design, and cross-browser compatibility. Additionally, I
        implemented API validation workflows in Postman, leveraging automated
        scripts, environment variables, and collection runners to streamline
        testing across multiple endpoints. By integrating custom test commands,
        intercepts, and automation frameworks, I enhanced efficiency, reduced
        manual effort, and ensured software reliability. This project showcases
        my ability to bridge QA and development, optimizing both front-end
        performance and backend API interactions. Check out my{" "}
        <a
          href="https://github.com/Alexander-art-eng"
          className="text-xl font-bold"
        >
          GitHub
        </a>{" "}
        for more details!
      </p>

      {/* <motion.div 
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
      >
        {workData.map((item, i) => (
          <motion.div 
            key={i} 
            style={{backgroundImage: `url(${item.bgImage})`}}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            whileHover={{scale: 1.05}}
            transition={{duration: 0.3}}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-3 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{ item.title }</h2>
                <p className="text-sm text-gray-700">{ item.description }</p>
              </div>

              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image 
                  src={assets.send_icon}
                  alt="send icon"
                  className="w-5"
                />
              </div>
            </div>

          </motion.div>
        ))}
      </motion.div> */}

      {/* <motion.a 
        href="" 
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 1.1, duration: 0.5}}
      >
        show more {" "}
        <Image 
          src={darkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </motion.a> */}
    </div>
  );
};

export default MyProjects;
