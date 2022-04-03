import React from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../Header";
import ProjectCard from "../ProjectCard/";
import alotifyPic from "../../images/alotify.png";
import familiaPic from "../../images/familia.png";
import socPic from "../../images/soq.png";
import bleeterPic from "../../images/bleeter.png";
import hangmanPic from "../../images/hangman.png";

export function Fullpage() {
  return (
    <ReactFullpage
      //fullpage options
      //   licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section app-header">
              <Header text="Lorcan McCullagh"></Header>
              <div className="homepagebuttons">
                <button
                  className="homepagebutton"
                  onClick={() =>
                    (window.open("https://ukla.netlify.app"))
                  }
                >
                  My Team Project
                </button>
                <button
                  className="mainbutton"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Projects
                </button>

                <button
                  className="homepagebutton"
                  onClick={() =>
                    (window.open("https://github.com/lorcanmc"))
                  }
                >
                  My Github
                </button>
              </div>
            </div>
            <div className="section section2">
              <h2 className="react-header">React Projects</h2>
              <br></br>
              <div className="card-container">
                <ProjectCard
                  image={alotifyPic}
                  name="Alotify"
                  desc="A music exploration app - Personal Project"
                  blurb="Designed to recreate the look and feel of Spotify with the functionality to find your favourite songs and add them to your favourites"
                  link="http://alotify-app.netlify.app"
                ></ProjectCard>
                <ProjectCard
                  image={hangmanPic}
                  name="Hangman"
                  desc="A simple game - Personal Project"
                  blurb="Inspired by the success of wordle, I created a hangman game that tracks your progress and responds to your guesses"
                  link="https://reacthangmangame.netlify.app/"
                ></ProjectCard>
              </div>
              <div className="homepagebuttons">
                <button
                  className="homepagebutton"
                  onClick={() => fullpageApi.moveSectionDown()}
                >
                  Full Stack Projects
                </button>
              </div>
            </div>
            <div className="section section3">
              <h2 className="react-header">Full Stack Projects</h2>
              <br></br>
              <div className="card-container">
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
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
