import React from 'react'

import "./resources/css/ContactMe.css"
import linkedIn from "./resources/images/linkedIn.png";
import github from "./resources/images/github.png";

function ContactMe() {
    return (
        <div id="contact-me" className="container-fluid">
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" className="polygon">
                <path d="M0 0 L50 100 L100 0 Z" fill="#171f29" stroke="#171f29"/>
            </svg>

            <div className="row">
                <p className="text-center" id="ci">Contact Me</p>
            </div>
            <div className="row">
                <div id="ci-underline"/>
            </div>
            <div className="row">
                <div id="ci-smallUnderline"/>
            </div>
            <div id="hire-me" className="row">
                <p className="text-center">
                    Want to hire me? Go ahead and send a message. <br/>
                    If not that's cool too. I'm into tech, basketball, video games, and anime.
                </p>
            </div>
            <form target="_blank" action="https://formspree.io/meqogyye" method="POST">
                <input type="name" name="name" className="form-control contact-box" id="name-input" placeholder="Name"/>
                <input type="email" name="_replyto" className="form-control contact-box" id="email-input" placeholder="E-mail"/>
                <textarea name="message" className="form-control contact-box" id="message-input" rows="3" placeholder="Message"/>
                <button id="submit" type="submit" className="btn">Submit</button>
            </form>
            <div className="row">
                <div className="center-div">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dalip-jandir/">
                        <img src={linkedIn} alt="linkedIn" className="portfolio-btn"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jandird">
                        <img src={github} alt="github" className="portfolio-btn"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;