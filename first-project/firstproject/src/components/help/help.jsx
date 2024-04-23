import "./help.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -200,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Help = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <>
      <div
        variants={variants}
        initial="initial"
        ref={ref}
        animate={"animate"}
        style={{
          height: "100vh",
          backgroundColor: "#ea580c",
          scrollSnapAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.ul
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <motion.h2 variants={variants}>How to become a user</motion.h2>
          <motion.li
            variants={variants}
            style={{
              display: "flex",
              gap: "2em",
            }}
          >
            <motion.ul variants={variants}>
              Log in to our multipurpose Website
              {/* add Image here and also remove the set the padding-Bottom to 0 */}
            </motion.ul>
            <motion.ul variants={variants}>
              Setup a simple multipurpose account{" "}
            </motion.ul>
            <motion.ul variants={variants}>
              Enjoy unlimited access to our content{" "}
            </motion.ul>
          </motion.li>
        </motion.ul>
        <motion.ul
          variants={variants}
          initial="initial"
          ref={ref}
          animate={isInView && "animate"}
        >
          <motion.h2 variants={variants}>How to become a member</motion.h2>
          <motion.li
            variants={variants}
            style={{
              display: "flex",
              gap: "2em",
            }}
          >
            <motion.ul variants={variants}>
              Log in to our multipurpose Website{" "}
            </motion.ul>
            <motion.ul variants={variants}>
              Setup a simple multipurpose accoun{" "}
            </motion.ul>
            <motion.ul variants={variants}>
              Enjoy unlimited access to our content{" "}
            </motion.ul>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default Help;
