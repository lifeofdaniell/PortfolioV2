import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";
import "../styles/projects.css";
import Card1 from "../components/card";
import Card2 from "../components/card2";
import Card3 from "../components/card3";
import Card4 from "../components/card4";
import PreFooter from "../components/prefooter";
import Footer from "../components/footer";
import HeaderPage from "../components/header";

const Projects = () => (
  <div>
    <SEO title="Projects" />
    <HeaderPage />
    <div className="Cards">
      <h2>
        Selected Works <b>🎯</b>
      </h2>
      <p className="brief">
        Cross-section of various projects I've embarked on. Enjoy!
      </p>
      <div className="CardGroup">
        <Link to="/projects/crux">
          <Card1
            title="CRUX Fashion Store App"
            text="UI Design"
            text2="2020"
            image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794285/GatsbyPortfolio/optimized/cover2_sbx2to.jpg"
          />
        </Link>
        <Link to="/projects/unilag">
          <Card2
            title="University of Lagos Students' Portal"
            text="UX Case Study"
            text2="2020"
            image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794280/GatsbyPortfolio/optimized/cover_cdoqnk.jpg"
          />
        </Link>
        <Link to="/projects/designs">
          <Card1
            title="Miscellaneous Designs"
            text="UI Design"
            text2="2019-2020"
            image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1594315574/GatsbyPortfolio/optimized/cover_wtepqo.jpg"
          />
        </Link>
        <Link to="/projects/wecare">
          <Card3
            title="weCare Charity Organisation Website"
            text="Front End Development"
            text2="2020"
            image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593785144/GatsbyPortfolio/cover3_j0uyxt.jpg"
          />
        </Link>
        <Link to="/">
          <Card1
            title="Personal Website"
            text="Front End Development"
            text2="2020"
            image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794268/GatsbyPortfolio/optimized/cover4_wpe3bo.jpg"
          />
        </Link>
        <Link to="/projects/posterfolio">
          <Card1 image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794279/GatsbyPortfolio/optimized/cover7_egcqpe.jpg" />
        </Link>
      </div>
      <div className="Cards2">
        <h2>
          Photography Projects <b> 📸</b>
        </h2>
        <div className="CardGroup2">
          <Link to="/projects/events">
            <Card4
              title="Events Excerpts"
              text="Photography"
              text2="2020"
              image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794289/GatsbyPortfolio/optimized/cover8_p6d7fz.jpg"
            />
          </Link>
          <Link to="/projects/matteblack">
            <Card1
              title="Bloodtype: MatteBlack"
              text="Photography"
              text2="2019"
              image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794282/GatsbyPortfolio/optimized/cover5_tvcv84.jpg"
            />
          </Link>
          <Link to="/projects/portraits">
            <Card1
              title="Portraits"
              text="Photography"
              text2="2018-2020"
              image="https://res.cloudinary.com/areoladaniel-com/image/upload/v1593794284/GatsbyPortfolio/optimized/cover6_d3mwbw.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
    <PreFooter
      title="Let's Work Together!"
      text="Need a designer or a developer? I'm currently available to work on any project. I'll be happy to discuss new patnerships. Let's get in touch!"
    />
    <Footer />
  </div>
);

export default Projects;
