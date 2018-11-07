import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Yasir Akbar</h2>
              <img
                src="https://openclipart.org/image/2400px/svg_to_png/277081/Male-Avatar.png"
                alt="avatar"
                style={{ height: "250px" }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />

            <div className="contact-list">
            <List>
                <ListItem>
                  <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">Aaron Paul</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                </ListItem>
              </List>
            </div>
              
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
