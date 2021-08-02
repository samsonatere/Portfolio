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
    <Title title="About" color={setClass?"red":"gray"}/>
    <div className="about-center">
        <div className="about-logo">
            <img src={MyPd} alt="img"/>
        </div>
        <div className={setClass?"about-text dark-mode-white":"about-text"}>
            <div className={setClass?"dark-mode-orange":"profile"}>
                <h2>My profile</h2>
            </div>
            <div className="name">
                <p><span className={setClass?"dark-mode-orange":""}>name:</span> Samson Dayo Atere</p>
            </div>
            <div className="age">
                <p><span className={setClass?"dark-mode-orange":""}>birthday:</span> 9, September</p>
            </div>
            <div className="address">
                <p><span className={setClass?"dark-mode-orange":""}>address:</span> 9, Ajike close, Amje Alimosho, Lagos.</p>
            </div>
            <div className="email">
                <p><span className={setClass?"dark-mode-orange":""}>email:</span><a href="mailto:samsonatere24@gmail.com"> samsonatere24@gmail.com</a></p>
            </div>
            <div className="phone">
                <p><span className={setClass?"dark-mode-orange":""}>mobile no:</span > <a href="tel:+2349036649975">+2349036649975</a>, +2348036350437</p>
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
    <div className={setClass?"dark-mode-lightwhite generally":"generally"}>
        <span>Geneally,</span><p>I am a Software Developer with a background in Physics and Electronics. 
            I see technology has a canvas upon which the human imagination is painted and a tools to solve diverse problems.
            I'm proficient in Python/PHP and work daily with popular frameworks (Django/Laravel) 
            Having work with a team of developers i know the need for teamwork and communication. I am open to solving problems with you</p>
    <div className="certificate">
        <h4>My Certificate</h4>
        <p>* B.Sc.(Hons) Physics and Electronics at Adekule Ajasin University</p>
        <p>* Member of Nigerian Institute of Management Certificate</p>
        <p>* Jobberman Soft-Skills Certificate</p>
        <p>* The Fundamental of Digital Marketing skills (Google Digital Skills for Africa).</p>
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
