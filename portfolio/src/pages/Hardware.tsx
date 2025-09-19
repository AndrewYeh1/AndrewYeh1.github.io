import { motion } from "framer-motion";

import { ExpandablePanel } from "../components/ExpandablePanel.tsx";
import { Title } from "../components/article/Title.tsx";
import { Text } from "../components/article/Text.tsx";
import { Gallery } from "../components/article/Gallery.tsx";

import pcbImage from "../assets/pcb.png";

import "./Hardware.css";

export const HardwarePage = () => {
  const handleReturnHome = () => {
    window.location.href = "/"; // navigate to home
  };

  return (
    <div className="hardware-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-image">
          <img src={pcbImage} alt="Hero" className="hero-img" />

          {/* Dark overlay */}
          <div className="overlay" />

          {/* Title Overlay */}
          <div className="hero-title"> Hardware </div>

          {/* Fixed Return Home Button */}
          <div className="return-home-container">
            <button className="return-home-button" onClick={handleReturnHome}>
              {/* Left arrow using SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="return-home-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Prompt Section */}
        <div className="scroll-prompt">
          <motion.div
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="scroll-arrow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                animate={{ y: [-8, 0, -8] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Expandable Articles Section */}
      <div className="articles">
        <ExpandablePanel header="Power Distribution Board">
          <Title text="Introduction" />
          <Text>
            Created specifically for UBC's AeroDesign avionics stack, its packed with advanced features not found in hobby grade buck converters.
            The most standout of which is the the dual rail design, ensuring clean and uninterrupted 5V power for on board electronics, while providing
            high current 6V power for optimal servo performance. Aside from providing power, the board is designed to be robust and easily diagonsable,
            featuring individual e-fuse protection with voltage and current readings for each power rail.
          </Text>
          <Gallery
            images={[
              pcbImage,
              pcbImage
            ]}
          />
          <Title text="Schematic" />
          <Text>
            Choosing optimal components out of the vast library of those available was a cruicial part of the design process. Aided by tools such as LTSpice for circuit
            simulation alongside manufacturer websites, a set of components that fit the design criteria was created. This list was further cross-referenced with
            stakeholders in the project, ensuring all design goals were met or exceeded.
          </Text>
          <Title text="Routing" />
          <Text>
            One of the biggest improvements from AeroDesign's previous attempts at a power board is the significant reduction in size and complexity.
            Through many iterations of component placement and routing, the board was reduced from 6 layers and 6900mm² to
            4 layers and 4800mm² while gaining some additional features new to the board such as the dual rail power supply.
          </Text>
        </ExpandablePanel>

        <ExpandablePanel header="Flight Controller">
          <Title text="Introduction" />
          <Text>
            Serving as the brain for an autonomous VTOL aircraft, the flight controller and its sensors requires the utmost precision. Equppied with an array of sensors,
            including IMU, GPS, barometer, and most importantly the STM32H7 chip, this specialized flight controller provides unparalleled precision and processing power.
          </Text>
        </ExpandablePanel>

        <ExpandablePanel header="FPV Quadcopter">
          <Title text="Introduction" />
          <Text>
            intro
          </Text>
        </ExpandablePanel>
      </div>
    </div>
  );
};
