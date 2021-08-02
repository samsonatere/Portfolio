import React from 'react'
import HeadImg from '../images/logo4.png';
import {DataConsumer} from '../context/Context';
import Bounce from 'react-reveal/Bounce'

function Header() {
    return (
      <DataConsumer>
          {
              (value)=>{
                  const {setClass,darkMode} = value;
                  return(
                      <section className="header">
                          <img src={HeadImg} alt="img"/>
                          <div className="header-container">
                              <div className="texts">
                                  <Bounce left delay={500} duration={2000} cascade>
                                  <h1>hello, i am atere samson</h1>
                                  </Bounce>
                                  <Bounce right delay={2000} duration={2000} cascade>
                                  <h2>welcome to my portfolio</h2>
                                  </Bounce>
                                  <Bounce top delay={4000} duration={2000}>
                                  <a href="mailto:samsonatere24@gmail.com" className="contactBtn ">contact</a>
                                  </Bounce>
                              </div>
                          </div>
                          {/* dark botton section start */}
                          <div className="btnMode">
                              <div className={setClass?"newbtnIcons btnIcons":"btnIcons"}  onClick={darkMode}>
                              <i className="fas fa-moon"></i>
                                  <div className={setClass?"newball ball":"ball"}>
                                  </div>
                                  <div className=""></div>
                                  <i className="fas fa-sun"></i>
                              </div>
                          </div>
                          {/* dark botton sectoon end */}
                      </section>
                  )
              }
          }
      </DataConsumer>
    )
}

export default Header
