import "./App.css";
// import { motion } from "framer-motion";


import ProjectCard from "../ProjectCard/";
import alotifyPic from "../../images/alotify.png";
import familiaPic from "../../images/familia.png";
import socPic from "../../images/soq.png";
import bleeterPic from "../../images/bleeter.png";
import hangmanPic from "../../images/hangman.png";
import { Fullpage } from "../fullpageexample";

function App() {
  return (
    <div className="App">
      {/* <motion.header
        initial={{ y: -350 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 30 }}
      >
        <Header text="Lorcan McCullagh"></Header>
      </motion.header> */}
      <Fullpage></Fullpage>

      <div className="main">
        <h2 className="react-header">Full Stack Projects</h2>
        <br></br>
        {/* <div className="card-container">
          <ProjectCard
            image={familiaPic}
            name="Familia"
            desc="A socia media app for families - Group Project"
            blurb="Designed to create a closed social media site where families would be safe to post private pictures and info to other family members. Built over 4 weeks in a team of 6 students"
            link="https://ukla.netlify.app"
          ></ProjectCard>
          <ProjectCard
            image={socPic}
            name="School of quizzes"
            desc="A quiz app to test coding knowledge - Group Project"
            blurb="A platform for other School Of Code bootcampers to challenge what they have learnt"
            link="https://school-of-quizzes.netlify.app/"
          ></ProjectCard>
          <ProjectCard
            image={bleeterPic}
            name="Bleeter"
            desc="A social app to connect with others - Personal Project"
            blurb="A simple project creating a site where users can post and read posts by others. Designed to look like twitter"
            link="https://bleeter-app.netlify.app"
          ></ProjectCard>
        </div> */}

        <br></br>
      </div>
    </div>
  );
}

export default App;
