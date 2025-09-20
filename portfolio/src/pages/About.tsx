import { motion } from "framer-motion";

import { ExpandablePanel } from "../components/ExpandablePanel.tsx";
import { Title } from "../components/article/Title.tsx";
import { Text } from "../components/article/Text.tsx";
import { Gallery } from "../components/article/Gallery.tsx";

import fpvImage from "../assets/fpv.jpg";
import mcrAeroImage from "../assets/mcrAero.png";
import advAeroImage from "../assets/advAero.png"
import aeroBothImage from "../assets/aeroBoth.png"

import { TopBar } from "../components/TopBar";

import "./About.css";

export const AboutPage = () => {
  const handleReturnHome = () => {
    window.location.href = "/"; // navigate to home
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero">
        {/* Scroll Prompt Section */}
        <div className="spacer"> </div>

        <TopBar />

        <div className="hero-image">
          <img src={fpvImage} alt="Hero" className="hero-img" />

          {/* Dark overlay */}
          <div className="overlay" />

          {/* Title Overlay */}
          <div className="hero-title"> Andrew Yeh </div>

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
        <ExpandablePanel header="About Me">
          <Title text="Introduction" />
          <Text>
            Hello everyone, welcome to the new and improved version of my site, I'm glad you found this little corner of the internet.
            I am a third year computer engineering student at UBC. A few words to describe me would be dedicated, hands on, and goal oriented.
            I have experience building and organizing various engineering tasks in and out of academic settings.
            Please take a look around at my various projects and some past experiences and see if anything interests you.
            For any inquiries, please do not hesitate to contact me through LinkedIn or Email. Hope you enjoy the site!
          </Text>
        </ExpandablePanel>

        <ExpandablePanel header="Design Team">
          <Title text="AeroDesign" />
          <Text>
            My participation and leadership in SAE AeroDesign is a major part of my university career. Current I am a lead in the avionics division,
            working on a variety of both hardware and software equipment. This experience provided me with an immense amount of engineering and soft skills.
            Allowing me to hone my abilities in tools such as Altium, Python, and SolidWorks while leading a team and participating in shaping the team
            as a whole. I would like to thank my team members and mentors for such a supportive environment.
          </Text>
          <Title text="Competition and Test Flights" />
          <Text>
            A few pictures from test flights, just a trip to a nearby airfield to find out how well designed our planes are. Both planes flew well and the team
            scored a podium finish at the SAE AeroDesign competition.
          </Text>
          <Gallery
            images={[
              mcrAeroImage,
              advAeroImage,
              aeroBothImage
            ]}
          />
        </ExpandablePanel>

        <ExpandablePanel header="Work Experience">
          <Title text="Swim Instructor" />
          <Text>
            Aside from the usual engineering business I also worked as a swimming instructor with the City of Edmonton. Although it was only for a short year
            before moving away to Vancouver, I learned a lot of interpersonal skills from the job, being the first time I was immersed in a professional work setting.
            From negotiating with parents to designing a lesson plan, I am grateful for the time I spent working with peers and students.
          </Text>
        </ExpandablePanel>
      </div>
    </div>
  );
};
