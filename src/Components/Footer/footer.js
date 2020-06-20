import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

class Minifooter extends Component {
  render() {
    return (
      <Footer className="footer" size="mini">
        <FooterSection type="right" title="footer">
          <FooterLinkList>
            <a href="/resume">Resume</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contacts</a>
          </FooterLinkList>
        </FooterSection>
        <p>© 2018 Yasir All Rights Reserved</p>
      </Footer>
    );
  }
}

export default Minifooter;
