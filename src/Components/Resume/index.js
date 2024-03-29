import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import "../Resume/style.css";

class Resume extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}>
            <img
              src="https://praveenmp.github.io/avatar2.jpg"
              alt="avatar"
              style={{ height: "200px" }}
            />
          </div>

          <h2 style={{ paddingTop: "2rem" }}>Yasir Akbar</h2>
          <h4 style={{ color: "grey" }}>Front End Developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Yasir is a hard-working Front End developer with 4+ year's
            experience in Front End Development and moderate knowledge of Back
            End Development as well. He has been active in agile software
            development/Scrum and Kanban, for different single page
            applications, websites, CMS and projects for many famous
            international and UK e-commerce brands.
          </p>
          <p>
            Yasir is especially interested in building scalable websites and
            apps on different platforms utilizing microservice architecture. He
            excels in JavaScript, React/Redux, TypeScript, Next.js, WordPress and Unit
            Testing, especially Jest, HTML5/CSS3 and Node/Express/MongoDB,
            Python, Git, Npm, Nx and webpack.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Address</h5>
          <p>UK/Finland</p>
          <h5>Linkedin</h5>
          <p>https://www.linkedin.com/in/yasir-akbar-2b534513b/</p>
          <h5>Github</h5>
          <p>https://github.com/Yasir1986</p>
          <h5>Email</h5>
          <p>yasir.akbar86@hotmail.com</p>
          <h5>WebSite</h5>
          <p>
            <a
              href="https://inquisitive-bubblegum-e18eba.netlify.app/"
              alt="portfolio"
              style={{ color: "black" }}
            >
              https://inquisitive-bubblegum-e18eba.netlify.app/
            </a>
          </p>
        </Cell>
        <Cell className="resume-right-col" col={8}>
          <h2>Education</h2>

          <Education
            startYear={2020}
            endYear={2020}
            schoolName="Udemy"
            Degree="The Complete JavaScript abd Node.js Course"
          />

          <Education
            startYear={2018}
            endYear={2018}
            schoolName="Integrify"
            Degree="Front End Developer Crash Course"
          />

          <Education
            startYear={2017}
            endYear={2017}
            schoolName="Udemey"
            Degree="Full Stack Developer Course"
          />

          <Education
            startYear={2016}
            endYear={2016}
            schoolName="Coursea"
            Degree="Front End Developer Course"
          />

          <Education
            startYear={2008}
            endYear={2012}
            schoolName="Kajaani University of Applied Sciences"
            Degree="International Business in BBA"
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Experience</h2>

          <Experience
            startYear={2022}
            endYear={"Present"}
            jobName="React Developer at Nbrown"
            jobDescription="White Labeling and implementing Monorepo for Nbrown, an upcoming online e-commerce shopping brand, SimplyBe, and Jacamo. Following best practices with agile methodologies, using the latest technology to be ahead of the market."
          />

          <Experience
            startYear={2021}
            endYear={2021}
            jobName="Front End React Developer at Sharp Gaming"
            jobDescription="Scrum/Kanban and following best practices to build and modify state of art Single page application/online games SPA and CMS for one of the biggest and reknown online brands of UK in gaming industry."
          />

          <Experience
            startYear={2020}
            endYear={2020}
            jobName="Front End Developer at Bloc Digital"
            jobDescription="3 month contract for developing and testing local city railway website and mobile app for android."
          />

          <Experience
            startYear={2019}
            endYear={2020}
            jobName="Full Stack Developer at Cognizant"
            jobDescription="Front End, Back End and Agile software development using React and Node.js for different web-based applications for famous brands/clients, such as Boots."
          />

          <Experience
            startYear={2019}
            endYear={2019}
            jobName="Software Developer at Vainu.io"
            jobDescription="Building a spin-off of their real product with stripe integration using React, ES6, styled-components and material-ui."
          />

          <Experience
            startYear={2018}
            endYear={2018}
            jobName="Front End Developer at Integrify"
            jobDescription="Real Life assement project for Integrify Using React/Redux and Nodejs/Express."
          />

          <Experience
            startYear={2016}
            endYear={2018}
            jobName="Freelancer.com"
            jobDescription="Several freelancing projects on Front End use HTML/CSS, WordPress, Jquery, Bootstrap and JavaScript."
          />

          <Experience
            startYear={2015}
            endYear={2018}
            jobName="Founder at Myphone.fi"
            jobDescription="Develop and maintain a full e-commerce website with an online Finnish banking payment system and PayPal."
          />

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Skills</h2>

          <div className="skills-wrapper">
            <Skills skill="Typescript" progress={80} />

            <Skills skill="React/Redux" progress={85} />

            <Skills skill="Next.js" progress={88} />

            <Skills skill="JavaScript/ES6" progress={85} />

            <Skills skill="Unit Testing(Jest)" progress={80} />

            <Skills skill="HTML/CSS" progress={95} />

            <Skills skill="Material-UI/Bootstrap" progress={90} />

            <Skills skill="Monorepo/Nx" progress={75} />

            <Skills skill="Nodejs/Express" progress={55} />

            <Skills skill="Git / Npm / Webpack / Gulp" progress={92} />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Resume;
