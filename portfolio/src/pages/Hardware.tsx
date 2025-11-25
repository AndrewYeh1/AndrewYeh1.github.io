import { motion } from "framer-motion";
import { useEffect } from "react";

import { ExpandablePanel } from "../components/ExpandablePanel.tsx";
import { Title } from "../components/article/Title.tsx";
import { Text } from "../components/article/Text.tsx";
import { Gallery } from "../components/article/Gallery.tsx";

import pcbImage from "../assets/pcb.png";
import threeDPcb from "../assets/3dPcb.png"
import sch1 from "../assets/sch1.png"
import sch2 from "../assets/sch2.png"
import sch3 from "../assets/sch3.png"
import sch4 from "../assets/sch4.png"
import sch5 from "../assets/sch5.png"
import sch6 from "../assets/sch6.png"
import sch7 from "../assets/sch7.png"
import sch8 from "../assets/sch8.png"
import aerialImage from "../assets/aerial.png"
import foggyDroneImage from "../assets/foggyDrone.jpg"
import thrustStandControllerImage from "../assets/thrustStandController.jpg"
import thrustStandSchematicImage from "../assets/thrustStandSchematic.png"

import { TopBar } from "../components/TopBar";

import "./Hardware.css";

export const HardwarePage = () => {
  const handleReturnHome = () => {
    window.location.href = "/"; // navigate to home
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight - 100,
        behavior: "smooth",
      });
    }, 500); // adjust delay as needed (ms)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="hardware-page">
      {/* Hero Section */}
      <div className="hero">
        <TopBar />
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
          </Text>
          <Text>
            - 6V servo rail for optimal servo performance
          </Text>
          <Text>
            - 5V avionics rail to provide clean uninterrupted power for onboard avionics
          </Text>
          <Text>
            - E-fuse protection for both servo rails to protect from shorts
          </Text>
          <Text>
            - 4 ADCs to collect detailed current and voltage data for monitoring
          </Text>
          <Title text="Schematic" />
          <Text>
            Choosing optimal components out of the vast library of those available was a crucial part of the design process. Aided by tools such as LTSpice for circuit
            simulation alongside manufacturer websites, a set of components that fit the design criteria was created. This list was further cross-referenced with
            stakeholders in the project, ensuring all design goals were met or exceeded.
          </Text>
          <Gallery
            images={[
              sch1,
              sch2,
              sch3,
              sch4,
              sch5,
              sch6,
              sch7,
              sch8
            ]}
          />
          <Title text="Routing" />
          <Text>
            One of the biggest improvements from AeroDesign's previous attempts at a power board is the significant reduction in size and complexity.
            Through many iterations of component placement and routing, the board was reduced from 6 layers and 6900mm² to
            4 layers and 4800mm² while gaining some additional features new to the board such as the dual rail power supply.
          </Text>
          <Gallery
            images={[
              pcbImage,
              threeDPcb
            ]}
          />
        </ExpandablePanel>

        <ExpandablePanel header="FPV Quadcopter">
          <Title text="Introduction" />
          <Text>
            Although not the most advanced of my projects, this served as an introduction to the aerospace industry and a kick start to my career. I learned many
            basic skills such as soldering and CAD alongside microcontroller protocols such as UART and I2C. This project also gave me a strong understanding of managing
            multiple high powered RF devices with limited space.
          </Text>
          <Gallery
            images={[
              aerialImage,
              foggyDroneImage
            ]}
          />
        </ExpandablePanel>

        <ExpandablePanel header="Thrust Stand Microcontroller">
          <Title text="Introduction" />
          <Text>
            A custom designed microcontroller using the ATMEGA32U4 chip. The design incorporates the capabilities to read currents up to 50A and voltages up to 30V with
            dedicated ADCs to reading load cells with less than 1% error.
          </Text>
          <Gallery
            images={[
              thrustStandControllerImage,
              thrustStandSchematicImage
            ]}
          />
          <Title text="Design" />
          <Text>
            The need for this project arose from the desire to replace the unreliable set of patchwork Arduinos connected to a set of sensors on a breadboard. Thrust testing, being
            an integral part of AeroDesign's engineering process for building planes required an accurate and efficient way to collect data. This project aimed to address the issue
            while bringing various performance uplifts. The most major of the improvements is the high precision 24-bit HX711 load cell amplifier and ADC. For the power power measurements, a modest 10%
            uplift in max current capacity but a 10x improvement in accuracy with the use of a high precision voltage divider and operational amplifiers.
            Additionally, a new torque measurement feature was incorporated into the design, allowing for more detailed analysis on propulsion performance.
          </Text>
        </ExpandablePanel>

        <ExpandablePanel header="Flight Controller">
          <Title text="Introduction" />
          <Text>
            Serving as the brain for an autonomous VTOL aircraft, the flight controller and its sensors requires the utmost precision. Equipped with an array of sensors,
            including IMU, GPS, barometer, and most importantly the STM32H7 chip, this specialized flight controller provides unparalleled precision and processing power.
          </Text>
          <Text>
            More details comming soon!
          </Text>
        </ExpandablePanel>
      </div>
    </div>
  );
};
