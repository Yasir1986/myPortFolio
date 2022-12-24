import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from './Components/main';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    const myPortFolio = "MyportFolio";
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link to="/" className="main-link">
                {myPortFolio}
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/" />
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="MyPortFolio">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
