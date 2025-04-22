import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ut fuga
          alias tenetur quis quam vitae voluptas animi aperiam expedita.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
          delectus voluptatibus veritatis est numquam nulla cum animi vero sed
          nobis, excepturi aperiam commodi accusamus fugiat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non tempora
          officia in aspernatur eveniet? Reprehenderit fugit commodi ad quidem
          fugiat, minus dolores!
        </p>
      </div>
    </div>
  );
};

export default About;
