import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render () {
        return (
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://openclipart.org/image/2400px/svg_to_png/277081/Male-Avatar.png"
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                        <h1>landing page / home</h1> 
                        </div>
                    </Cell>
                </Grid> 

                
             
            </div>
        )
    }
}


export default Landing;