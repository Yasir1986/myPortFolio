import React, { Component } from "react";
import { Grid, Cell, ListItem, ListItemContent, List } from "react-mdl";
import '../Contact/style.css';

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
              <p>I am Front End Developer with knowledge of Back End as well. I love to develop and maintain websites and single page applications. For any kind of inquiry, conatct me :)</p>
            </Cell>

            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr />

            <div className="contact-list">
            <List>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden = "true" ></i>
                    +358458490190
                    </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope" aria-hidden = "true" ></i>
                    yasir.akbar86@hotmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <i className="fa fa-skype" aria-hidden = "true" ></i>
                    MySkypeId
                    </ListItemContent>
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
