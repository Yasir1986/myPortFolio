import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render () {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img 
                    src="https://openclipart.org/image/2400px/svg_to_png/277081/Male-Avatar.png"
                    alt = "avatar"
                    style= {{height: '200px'}}
                    />
                    </div>

                    <h2 style={{paddingTop: '2rem'}}>Yasir Akbar</h2>
                    <h4 style={{color: 'grey'}}>Front End Developer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Address</h5>
                    <p>Hacker Way Menlo Park, 94025</p>
                    <h5>Phone</h5>
                    <p>+358458490190</p>
                    <h5>Email</h5>
                    <p>yasir.akbar86@hotmail.com</p>
                    <h5>WebSite</h5>
                    <p>www.yasirakbar.com</p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>

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

                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Experience</h2>

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

                    
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                    <h2>Skills</h2>

                    <Skills 
                        skill="HTML/CSS"    
                        progress={100}           
                    />

                     <Skills 
                        skill="JavaScript"    
                        progress={75}           
                    />

                     <Skills 
                        skill="React/Redux"    
                        progress={80}           
                    />

                     <Skills 
                        skill="Nodejs/Express"    
                        progress={45}           
                    />

                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;