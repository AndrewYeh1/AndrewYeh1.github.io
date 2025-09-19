import { useState } from "react";
import { motion } from "framer-motion";

import pcbImage from "../assets/pcb.png";
import fpvImage from "../assets/fpv.jpg";
import codeImage from "../assets/code.png";

import "./Home.css";

interface Panel {
  id: "top" | "center" | "bottom";
  href: string;
  title: string;
  text: string;
  bg: string;
}

const panels: Panel[] = [
  { id: "top", href: "/hardware", title: "Hardware", text: "", bg: pcbImage },
  { id: "center", href: "/about", title: "Andrew Yeh", text: "About Me + Contact Info", bg: fpvImage },
  { id: "bottom", href: "/software", title: "Software", text: "", bg: codeImage },
];

export const Home = () => {
  const [active, setActive] = useState<Panel["id"]>("center");

  const getHeight = (id: Panel["id"]): string => {
    switch (active) {
      case "top":
        if (id === "top") return "80%";
        if (id === "center") return "15%";
        if (id === "bottom") return "10%";
        break;
      case "bottom":
        if (id === "bottom") return "80%";
        if (id === "center") return "15%";
        if (id === "top") return "10%";
        break;
      default:
        if (id === "center") return "80%";
        return "15%";
    }
    return "20%";
  };

  return (
    <div className="home-container">
      {panels.map((panel) => (
        <motion.a
          key={panel.id}
          href={panel.href}
          className="panel"
          initial={false}
          style={{
            backgroundImage: `url(${panel.bg})`,
          }}
          onMouseEnter={() => setActive(panel.id)}
          onMouseLeave={() => setActive("center")}
          animate={{ height: getHeight(panel.id) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Dark overlay */}
          <div className="panel-overlay" />

          {/* Text wrapper */}
          <div className="panel-text">
            <motion.h1
              className="panel-title"
              layout
              style={{ whiteSpace: "nowrap" }}
            >
              {panel.title}
            </motion.h1>

            <motion.div
              className="panel-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active === panel.id ? 1 : 0,
                y: active === panel.id ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
            >
              <p>{panel.text}</p>
            </motion.div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
