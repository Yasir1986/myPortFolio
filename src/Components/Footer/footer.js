import React, { Component } from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import "../Footer/style.css";

class Minifooter extends Component {
  render() {
    return (
      <div className="minifooter">
        <Footer className="footer" size="mini" style={{ padding: "5px"}}>
          <FooterSection type="right" title="footer">
            <FooterLinkList style={{ padding: "5px"}}>
              <a
                href="https://github.com/Yasir1986"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/yasir-akbar-2b534513b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://www.facebook.com/yasir.akbar86"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </FooterLinkList>
          </FooterSection>
          <p className="footerText">© 2023 Yasir Akbar All Rights Reserved</p>
        </Footer>
      </div>
    );
  }
}

export default Minifooter;
