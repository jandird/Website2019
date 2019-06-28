import React from 'react';

import './resources/css/About.css';

import me from "./resources/images/me.png";

import java from "./resources/images/skills/java.png";
import kotlin from "./resources/images/skills/kotlin.png";
import python from "./resources/images/skills/python.png";
import html from "./resources/images/skills/html.png";
import css from "./resources/images/skills/css.png";
import js from "./resources/images/skills/js.png";
import spring from "./resources/images/skills/spring.png";
import react from "./resources/images/skills/react.png";
import bootstrap from "./resources/images/skills/bootstrap.png";
import sql from "./resources/images/skills/sql.png";
import git from "./resources/images/skills/git.png";
import photoshop from "./resources/images/skills/photoshop.png";

function About(){

    return(
        <div id="about" className="container-fluid">

            <h1 className="text-center">About Dalip</h1>
            <div id="underline"/>
            <div id="smallUnderline"/>

            <div className="row">
                <div className="col-md-6">
                    <img src={me} alt="me" id="meImg"/>
                    <p id="race" className="text-center">Dalip Jandir - Level 22 Human</p>

                    <div id="dalip-info">
                        <p>Dalip is a 4th year Software Engineering student with a passion for technology and developing
                            applications - Graduating April 2020
                        </p>
                        <p>Class: Full-Stack Developer</p>
                        <p>Quest: Receive a New Grad Full-Stack Developer Offer </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="row skillRow skill-col-1 text-center">
                        <div className="col-sm-4">
                            <img src={java} alt="java" className="skillImg"/>
                            <p>Java</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={kotlin} alt="kotlin" className="skillImg"/>
                            <p>Kotlin</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={python} alt="python" className="skillImg"/>
                            <p>Python</p>
                        </div>
                    </div>

                    <div className="row skillRow skill-col-2 text-center">
                        <div className="col-sm-4">
                            <img src={html} alt="html" className="skillImg"/>
                            <p>HTML</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={css} alt="css" className="skillImg"/>
                            <p>CSS</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={js} alt="js" className="skillImg"/>
                            <p>JS</p>
                        </div>
                    </div>

                    <div className="row skillRow skill-col-3 text-center">
                        <div className="col-sm-4">
                            <img src={spring} alt="spring" className="skillImg"/>
                            <p>Spring</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={react} alt="react" className="skillImg"/>
                            <p>ReactJS</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={bootstrap} alt="bootstrap" className="skillImg"/>
                            <p>Bootstrap</p>
                        </div>
                    </div>

                    <div className="row skillRow skill-col-4 text-center">
                        <div className="col-sm-4">
                            <img src={sql} alt="sql" className="skillImg"/>
                            <p>SQL</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={git} alt="git" className="skillImg"/>
                            <p>Git</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={photoshop} alt="photoshop" className="skillImg" id="photoshop"/>
                            <p>Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;