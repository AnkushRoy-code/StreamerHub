import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/links";
import MenuToggle from "./menuToggle/MenuToggle";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={open ? "open" : "closed"}
    >
      <motion.div
        style={{
          zIndex: 999,
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "400px",
          background: "#fdba74",
        }}
        variants={variants}
      >
        <Links />
      </motion.div>
      <MenuToggle setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
