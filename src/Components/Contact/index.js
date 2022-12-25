import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";
import MiniFooter from "../Footer/footer";
import "../Contact/style.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Yasir Akbar</h2>
              <img
                src="https://praveenmp.github.io/avatar2.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
              <p>
                I am Front End Developer with 4+ year's expereince in UK biggest
                online e-commerce websites. I love to develop and maintain
                websites and single page applications. For any kind of inquiry,
                conatct me :)
              </p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />

              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "20px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-linkedin" aria-hidden="true" />
                      <a
                        style={{ color: "black" }}
                        href="https://www.linkedin.com/in/yasir-akbar-2b534513b/"
                        target="-blank"
                      >
                        www.linkedin.com/in/yasir-akbar-2b534513b/
                      </a>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "20px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <a
                        style={{ color: "black" }}
                        href="https://github.com/Yasir1986"
                        target="-blank"
                      >
                        yasir.akbar86@hotmail.com
                      </a>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "20px", fontFamily: "Anton" }}
                    >
                      <i className="fa fa-github" aria-hidden="true" />
                      <a
                        style={{ color: "black" }}
                        href="https://github.com/Yasir1986"
                        target="-blank"
                      >
                        {" "}
                        https://github.com/Yasir1986
                      </a>
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
        <MiniFooter />
        </div>
    );
  
  }
}

export default Contact;
