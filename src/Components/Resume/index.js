import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

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
                    <h4 style={{color: 'grey'}}>Programmer</h4>
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
                    <Cell className="resume-right-col" col={8}Right Side></Cell>
                </Grid>
            </div>
        )
    }
}


export default Resume;