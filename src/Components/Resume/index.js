import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import "../Resume/style.css";

class Resume extends Component {
  render() {
    return (
      <div>
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
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Yasir is a hard-working Full Stack developer. With around 4 year's
              experience in Front End Development and moderate knowledge about
              Back End Development as well. He has been active in agile software
              development for different web-based applications, websites, and
              famous brands.
            </p>
            <p>
              Yasir is especially interested in building scalable websites and
              apps on different platforms utilizing microservice architecture.
              He excels in JavaScript, WordPress and Unit Testing especially
              React/Redux, Jest, HTML5/CSS3 and Node/Express/MongoDB, and Python.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Finland/UK</p>
            <h5>Linkedin</h5>
            <p>https://www.linkedin.com/in/yasir-akbar-2b534513b/</p>
            <h5>Github</h5>
            <p>https://github.com/Yasir1986</p>
            <h5>Email</h5>
            <p>yasir.akbar86@hotmail.com</p>
            <h5>WebSite</h5>
            <p>
              <a
                href="https://myportfolio06.herokuapp.com/"
                alt="portfolio"
                style={{ color: "black" }}
              >
                https://myportfolio06.herokuapp.com/
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
              startYear={2019}
              endYear="Present"
              jobName="Full Stack Developer at Cognizant"
              jobDescription="Front End, Back End and Agile software developemnt using React and Node.js for different web-based applications websites for famous brands/clients"
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Software Developer at Vainu.io"
              jobDescription="Building a spin-off of their real product with stripe integration using React, ES6, styled-components and material-ui"
            />

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Front End Developer at Integrify"
              jobDescription="Real Life assement project for Integrify Using React/Redux and Nodejs/Express"
            />

            <Experience
              startYear={2016}
              endYear={2018}
              jobName="Freelancer.com"
              jobDescription="Several freelancing project on Front End using HTML/CSS, Wordpress, Jquey, Bootstrap and JavaScript"
            />

            <Experience
              startYear={2015}
              endYear={2018}
              jobName="Founder at Myphone.fi"
              jobDescription="Develop and maintain fully e-commerce website with online Finnish Banking payment system and Paypal"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>

            <Skills skill="HTML/CSS" progress={95} />

            <Skills skill="JavaScript/ES6" progress={85} />

            <Skills skill="React/Redux" progress={80} />

            <Skills skill="Material-ui/Bootstrap" progress={90} />

            <Skills skill="Nodejs/Express" progress={75} />

            <Skills skill="Python" progress={35} />

            <Skills skill="Unit Testing(Jest)" progress={76} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
