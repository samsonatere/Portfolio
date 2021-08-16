import React from 'react';
import Title from './Title';
import {DataConsumer} from '../context/Context';
import MyPd from  '../images/bb.jpg'


function About() {
    return (
        <DataConsumer>
    {
        (value)=>{
            const {setClass}= value
            return(
    <section className="about">
<div className="container">
    <Title title="About" color={setClass?"orange":"gray"}/>
    <div className="row about-center">
        <div className="col-lg-4 about-logo">
            <img src={MyPd} alt="img"/>
        </div>
        <div className={setClass?"about-text dark-mode-white":"col-lg-8 about-text"}>
            <div className={setClass?"dark-mode-orange":"profile"}>
                <h2>My profile</h2>
            </div>
            <div className="details">
                <p><span className={setClass?"dark-mode-orange":""}>name:</span> Samson Dayo Atere</p>
            </div>
            <div className="details">
                <p><span className={setClass?"dark-mode-orange":""}>location:</span> Lagos, nigeria.</p>
            </div>
            <div className="details">
                <p><span className={setClass?"dark-mode-orange":""}>email:</span><a href="mailto:samsonatere24@gmail.com"> samsonatere24@gmail.com</a></p>
            </div>
            <div className="details">
                <p><span className={setClass?"dark-mode-orange":""}>mobile no:</span > <a href="tel:+2349036649975">+2349036649975</a>, +2348036350437</p>
            </div>
            <div className="cv">
                <p><a class="btn btn-primary" href="https://drive.google.com/file/d/1wuftftGD_PDaVI3ZqdCI0QTWoetZCmNC/view">Download Resume</a></p>
            </div>
            <div className="social-media">
               <a href="https://www.linkedin.com/in/samson-atere-1778a4127/" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-linkedin"/></a>

                   <a href="https://www.facebook.com/samson2atere/" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-facebook-square"/></a>

                   <a href="https://github.com/samsonatere" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-github-square"/></a>
                   <a href="http://twitter.com/Atere_dayo" target="_blank" rel="noopener noreferce">
                   <i className="fab fa-twitter"/></a>
            </div>
        </div>
    </div>
    <div className={setClass?"dark-mode-lightwhite generally":"row generally"}>
        <div className ="col-lg-12 me">
        <span>Geneally,</span><p>I am an enthusiastic and auto-didactic Software Developer with an educational background in Physics and Electronics. 
            Expertise in Object-Oriented Design and Analysis, Database modeling/design, building robust enterprise web applications and backend services/APIs 
            using the core Python(Django) technology stacks to solve problems in education, health, the banking/financial services and custom business process automation.</p>
            <p>I see technology has a canvas upon which the human imagination is painted and a tools to solve diverse problems.</p>
             <p>Having work with a team of developers i know the need for teamwork and communication. I am open to solving problems with you</p>
        </div>
        <div className="col-lg-12 certificate">
            <h4>My Certificate</h4>
            <p>&#x2192; B.Sc.(Hons) Physics and Electronics at Adekule Ajasin University</p>
            <p>&#x2192; Member of Nigerian Institute of Management Certificate</p>
            <p>&#x2192; Website Design and Development (SideHustle)</p>
            <p>&#x2192; Jobberman Soft-Skills Certificate</p>
            <p>&#x2192; The Fundamental of Digital Marketing skills (Google Digital Skills for Africa).</p>
        </div>
    </div>
</div>
    </section>
            )
        }
    }
        </DataConsumer>
    )
}

export default About
