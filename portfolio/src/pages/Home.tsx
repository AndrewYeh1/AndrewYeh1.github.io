import { useState } from "react";
import { motion } from "framer-motion";

import pcbImage from "../assets/pcb.png";
import fpvImage from "../assets/fpv.jpg";
import codeImage from "../assets/code.png";

interface Panel {
  id: "top" | "center" | "bottom";
  href: string;
  title: string;
  text: string;
  bg: string;
}

const panels: Panel[] = [
  { id: "top", href: "/hardware", title: "Hardware", text: "", bg: pcbImage },
  {
    id: "center",
    href: "/about",
    title: "Andrew Yeh",
    text: "More About Me",
    bg: fpvImage,
  },
  { id: "bottom", href: "/software", title: "Software", text: "", bg: codeImage },
];

export const Home = () => {
  const [active, setActive] = useState<Panel["id"]>("center");

  // Compute height percentages
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
    <div className="h-screen w-screen flex flex-col">
      {panels.map((panel) => (
        <motion.a
          key={panel.id}
          href={panel.href}
          className="relative flex items-center justify-center overflow-hidden cursor-pointer"
          initial={false}
          style={{
            backgroundImage: `url(${panel.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onMouseEnter={() => setActive(panel.id)}
          onMouseLeave={() => setActive("center")}
          animate={{ height: getHeight(panel.id) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          {/* Text wrapper */}
          <div className="relative z-10 flex flex-col items-center text-white text-center px-4">
            {/* Title stays perfectly centered */}
            <motion.h1
              className="text-5xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              layout
              style={{ whiteSpace: "nowrap" }}
            >
              {panel.title}
            </motion.h1>

            {/* Subtitle fades into the space below when expanded */}
            <motion.div
              className="mt-24 max-w-xl whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: active === panel.id ? 1 : 0,
                y: active === panel.id ? 0 : 20,
              }}
              style={{ whiteSpace: "nowrap" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg">{panel.text}</p>
            </motion.div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
