import React, { Component } from 'react';
import  { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    
    constructor(props) {
    super(props);
    this.state = { activeTab : 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                 <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1000/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover'}}>HTML/CSS</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                 </CardText>
             <CardActions border>
                 <Button colored>Github</Button>
            </CardActions>
                <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div><h1>This is JavaScript</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activeTab === 3 ) {
            return (
                <div><h1>This is React/Redux</h1></div>
            )
        } else if (this.state.activeTab === 4 ) {
            return (
                <div><h1>This is MangoDB</h1></div>
            )
        }
    } 

    render () {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple >
                <Tab>HTML/CSS</Tab>
                <Tab>JavaScript</Tab>
                <Tab>React</Tab>
                <Tab>React/Redux</Tab>
                <Tab>MangoDB</Tab>
            </Tabs>

            <section className="projects-grid">
                <Grid className="projects-grid">
                <Cell col={12}>
                    <div className="content"> {this.toggleCategories()} </div>
                </Cell>
                </Grid>
                
            </section>
            </div>
        )
    }
}


export default Projects;