import { motion } from "framer-motion";

import { ExpandablePanel } from "../components/ExpandablePanel.tsx";
import { Title } from "../components/article/Title.tsx";
import { Text } from "../components/article/Text.tsx";
import { Gallery } from "../components/article/Gallery.tsx";

import codeImage from "../assets/code.png";
import consoleImage from "../assets/console.png"
import commandsImage from "../assets/commands.png"
import dataVisImage from "../assets/dataVis.png"
import callibrationImage from "../assets/callibration.png"
import myMoneyMyFutureImage from "../assets/myMoneyMyFuture.png"
import exoplanetChartImage from "../assets/exoplanetChart.png"
import constellationImage from "../assets/constellations.png"

import "./Software.css";

export const SoftwarePage = () => {
  const handleReturnHome = () => {
    window.location.href = "/"; // navigate to home
  };

  return (
    <div className="software-page">
      {/* Hero Section */}
      <div className="hero">
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
            <div className="scroll-text">
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                animate={{ y: [-8, 0, -8] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              Scroll Down for More
            </div>
          </motion.div>
        </div>

        <div className="hero-image">
          <img src={codeImage} alt="Hero" className="hero-img" />

          {/* Dark overlay */}
          <div className="overlay" />

          {/* Title Overlay */}
          <div className="hero-title"> Software </div>

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
      </div>

      {/* Expandable Articles Section */}
      <div className="articles">
        <ExpandablePanel header="Full Stack Thrust Stand Software">
          <Title text="Introduction" />
          <Text>
            I designed a flexible, robust, and automated propeller testing suite from the ground up, starting with nothing but a blank microcontroller without a bootloader.
            The development process can be roughly split into two major parts, the firmware and the software, with the firmware designed to operate standalone if the situation
            ever calls for it.
          </Text>
          <Title text="Firmware" />
          <Text>
            Inspired by the command prompt of modern computers, the microcontroller adopts a console style user interface through serial, allowing the basic functionality
            to be used with nothing but a bare bones serial monitor. The design leverages an arduino bootloader for future maintainability in case additional features must be added.
          </Text>
          <Gallery
            images={[consoleImage, commandsImage]}
          />
          <Title text="Software" />
          <Text>
            To truly create a comprehensive and automated testing suite, an advanced python GUI that abstracts away the console interaction. Through the use of math and graphing libraries such as
            matplotlib, pandas, and opencv, thrust data is easily visualized and processed, eliminating the need for manual data entry.
          </Text>
          <Gallery
            images={[dataVisImage, callibrationImage]}
          />
          <Title text="Custom Scripting Language (AeroScript)" />
          <Text>
            The custom designed scripting language named "AeroScript", built out of simple commands such as "set_throttle", "read_cell_1", and "use_spreadsheet".
            When bundled with a custom lexer, parser, and interpreter becomes an invaluable tool when collecting large amounts of data efficiently. This language is designed
            to be as simple and as quick to code in as possible, making designing custom tests a breeze.
          </Text>
        </ExpandablePanel>

        <ExpandablePanel header="Hackathons">
          <Title text="CIBC My Money My Future" />
          <Text>
            As a major landmark in my programming journey, my team and I came 3rd nationally out of 1000+ competing teams by creating a game to improve the financial literacy of youth using the GoDot game engine.
          </Text>
          <Gallery
            images={[myMoneyMyFutureImage]}
          />
          <Title text="NASA Space Apps" />
          <Text>
            Perhaps a math heavy application, my team and I developed an app capable of visualizing billions of stars and planets through the use of NASA's API.
            However daunting of a task, the serious application of vector calculations allowed for an accurate depiction of foreign planets.
          </Text>
          <Gallery
            images={[exoplanetChartImage, constellationImage]}
          />
        </ExpandablePanel>

        <ExpandablePanel header="UBC Study Sphere">
          <Title text="From the Lead's Perspective" />
          <Text>
            As the team lead during the development of this app, I managed a few of my peers, setting code structure, style expectations, and managing the Git repository. I designed the overall structure
            of the app and coordinated the collaboration and timeline.
          </Text>
          <Title text="From the Technical Perspective" />
          <Text>
            On the more technical side of things, I wrote the network protocol to facilitate Python server and Java client communications. With the server and clients being in different languages, the primary challenge
            was to develop a robust system capable of withstanding various nuances of each programming language.
          </Text>
        </ExpandablePanel>

        <ExpandablePanel header="ROS2 Robotics">
          <Text>
            More details coming soon!
          </Text>
        </ExpandablePanel>
      </div>
    </div>
  );
};
