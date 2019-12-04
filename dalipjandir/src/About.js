import React from 'react';

import './resources/css/About.css';

import me from "./resources/images/me.png";

import book from "./resources/images/bio.png"
import fullstack from "./resources/images/full-stack.png"
import quest from "./resources/images/quest.png"

import rapidlearning from "./resources/images/rapid-learning.png"
import artsci from "./resources/images/art-sci.png"
import adaptability from "./resources/images/adaptability.png"

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
            <div id="page-top"/>

            <div className="row">
                <h1 className="text-center">Character Info</h1>
            </div>
            <div className="row">
                <div id="underline"/>
            </div>
            <div className="row">
                <div id="smallUnderline"/>
            </div>

            <div className="row">
                <div className="col-md-7">
                    <div className="row">
                        <img src={me} alt="me" id="meImg"/>
                        <h2 id="race" className="text-center">Dalip Jandir</h2>
                    </div>
                    <div id="dalip-info" className="row">
                        <p>
                            <img src={book} alt="bio" className="bio-icons"/>
                            BIOGRAPHY: Dalip is a 4th year Software Engineering student at McMaster University with a
                            passion for technology and developing applications - Graduating April 2020
                        </p>
                        <p>
                            <img src={fullstack} alt="fullstack" className="bio-icons"/>
                            CLASS: Full-Stack Software Engineer
                        </p>
                        <p>
                            <img src={quest} alt="quest" className="bio-icons"/>
                            QUEST: Receive a Software Engineer (New Grad) Offer
                        </p>
                    </div>
                    <div className="row">
                        <h2 className="text-center">Character Traits</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={rapidlearning} alt="rapidlearning" className="trait-img"/>
                            <p className="text-center trait-head">Rapid Learning</p>
                            <p className="text-center trait-text">The ability to quickly pick up and learn new technologies/skills</p>
                        </div>
                        <div className="col-md-4">
                            <img src={artsci} alt="artsci" className="trait-img"/>
                            <p className="text-center trait-head">Artistic Scientist</p>
                            <p className="text-center trait-text">The ability to tackle problems and tasks both creatively and logically</p>
                        </div>
                        <div className="col-md-4">
                            <img src={adaptability} alt="adaptability" className="trait-img"/>
                            <p className="text-center trait-head">Adaptability</p>
                            <p className="text-center trait-text">The ability to adapt to any and all environments</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="row">
                        <h2 className="text-center">Abilities / Skills</h2>
                    </div>
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