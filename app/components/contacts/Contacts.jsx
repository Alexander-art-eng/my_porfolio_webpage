import Image from "next/image";
import styles from "./contact.module.css";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { motion } from "motion/react";

const Contacts = ({ darkMode }) => {
  const [result, setResult] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setResult("Sending....");

    formData.append("access_key", "0d7a18d9-cd74-4871-be3a-2a9455c07258");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        darkMode ? "bg-none" : styles.bgImage
      }`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* repetative style */}
      {/* Another repepative style in the input elements down */}
      <h4 className="h4-style">Connect with me</h4>
      <h2 className="h2-style">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Have a project in mind or need a QA Engineer / Front-End Developer to
        elevate your software quality? Let's connect! Whether it's automation
        testing, API validation, or UI development, I am always excited to
        collaborate and bring ideas to life. Feel free to reach out, connect on
        LinkedIn, or check out my work on GitHub. Looking forward to hearing
        from you!
      </p>

      <motion.form
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:hover:border-white/30"
            name="name"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          />
          
          <motion.input
            type="text"
            placeholder="Enter your email address"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] rounded-md bg-white dark:bg-darkHover/30 dark:hover:border-white/30 ${
              emailError ? "border-red-500" : "border-gray-400"
            }`}
            name="email"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        
        </div>

        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:hover:border-white/30"
          name="message"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        ></motion.textarea>
        
        {emailError && <p className="text-red-500">{emailError}</p>}

        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Submit now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right arrow"
            className="w-4"
          />
        </motion.button>

        <p className="mt-4"> {result} </p>
      </motion.form>
    </motion.div>
  );
};

export default Contacts;
