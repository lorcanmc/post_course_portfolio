import React from "react";
// import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Header from "../Header";
import ProjectCard from "../ProjectCard";
import alotifyPic from "../../images/alotify.png";
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
                onClick={() => fullpageApi.moveSectionDown()}
              >
                Projects
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
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
