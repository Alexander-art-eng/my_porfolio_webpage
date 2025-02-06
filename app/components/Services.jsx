import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import { delay } from "motion";

const Services = () => {
  return (
    <motion.div 
      id="services" 
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      {/* repetative style */}
      <motion.h4 
        className="text-center mb-2 text-lg font-Ovo"
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
      >
        What I offer
      </motion.h4>
      <motion.h2 
        className="text-center text-5xl font-Ovo"
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
      >
        Services
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure quo ex
        sit accusamus ratione, natus aperiam ab praesentium exercitationem
        commodi blanditiis
      </motion.p>

      <motion.div 
        className="grid grid-cols-auto gap-6 my-10"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
      >
        {serviceData.map(({ icon, description, title, link }, i) => (
          <motion.div 
            key={i}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 dark:hover:bg-darkHover dark:hover:shadow-white"
            whileHover={{scale: 1.05}}
          >
            <Image src={icon} alt={title} />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="right arrow"
                className="w-4"
              />{" "}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
