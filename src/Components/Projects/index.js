import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
} from "react-mdl";
import MiniFooter from "../Footer/footer";
import "../Projects/style.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card
          className="card"
          shadow={0}
          style={{ Minwidth: "400px", margin: "auto" }}
        >
          <CardTitle
            style={{
              color: "#000000",
              height: "196px",
              background:
                "url(https://cdn-images-1.medium.com/max/1000/1*lJ32Bl-lHWmNMUSiSq17gQ.png) center / cover",
            }}
          >
            Html/Css
          </CardTitle>
          <CardText>HTML/CSS Projects</CardText>
          <CardActions border>
            <Button>
              {" "}
              <a
                href="https://github.com/Yasir1986/Modern-Landing-Page"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Github
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={0} style={{ Minwidth: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "196px",
              background:
                "url(data:image/png;base64,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) center / cover",
            }}
          >
            JavaScript
          </CardTitle>
          <CardText>JavaScript Projects</CardText>
          <CardActions border>
            <Button>
              {" "}
              <a
                href="https://github.com/Yasir1986/snake-game-js-for-newbies"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Github
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={0} style={{ Minwidth: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "196px",
              background:
                "url(https://cdn-images-1.medium.com/max/1800/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover",
            }}
          >
            React
          </CardTitle>
          <CardText>React Projects</CardText>
          <CardActions border>
            <Button>
              {" "}
              <a
                href="https://github.com/Yasir1986/Chat-App"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Github
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={0} style={{ Minwidth: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "196px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStzjc2EByAlRc0lMsD5vDanZz4BHBkNFpSvmpz4Bnf9jmVx5oN) center / cover",
            }}
          >
            React/Redux
          </CardTitle>
          <CardText>React/Redux Projects</CardText>
          <CardActions border>
            <Button>
              {" "}
              <a
                href="https://github.com/Yasir1986/Post-Manager-App-with-Redux"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Github
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <Card shadow={0} style={{ Minwidth: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#000000",
              height: "196px",
              background:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfpPNNSWaMJ_uy2ZlxGgTXNVLcRNwgsUk1aRCk20CV5ah_kHLKA) center / cover",
            }}
          >
            MongoDB
          </CardTitle>
          <CardText>MongoDB Projects</CardText>
          <CardActions border>
            <Button>
              {" "}
              <a
                href="https://github.com/Yasir1986/Task-Manager"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Github
              </a>
            </Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }} />
        </Card>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>HTML/CSS</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>React/Redux</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content"> {this.toggleCategories()} </div>
            </Cell>
          </Grid>
        </section>
        <MiniFooter />
      </div>
    );
  }
}

export default Projects;
