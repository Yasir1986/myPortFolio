import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';


class Minifooter extends Component {
    render() {
        return (
            <Footer size="mini">
    <FooterSection type="middle">
        <FooterLinkList>
            <a href="/resume">Resume</a>
            <a href="/about">About Me</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contacts</a>
        </FooterLinkList>
    </FooterSection>
</Footer>
        )
    }
}

export default Minifooter;