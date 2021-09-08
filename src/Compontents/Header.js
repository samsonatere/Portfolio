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
                      <div className="">
                      <section className="header">
                          <img src={HeadImg} alt="img"/>
                          <div className=" header-container">
                              <div className="texts">
                                  <p>
                                  <Bounce left delay={500} duration={2000} cascade>
                                  <h1><strong>Hello, I am D.One</strong></h1>
                                  </Bounce></p>
                                  <p><Bounce right delay={2000} duration={2000} cascade>
                                  <h2>Welcome to my portfolio</h2>
                                  </Bounce></p>
                                  <p><Bounce top delay={4000} duration={2000}>
                                  <a href="https://wa.link/xg8esi" className="btn btn-success "><i class="fab fa-whatsapp"></i> Chat Me</a>
                                  </Bounce></p>
                                  <p><Bounce top delay={4000} duration={2000}>
                                  <a href="mailto:samsonatere24@gmail.com" className="btn btn-warning "><i class="far fa-envelope"></i> Email</a>
                                  </Bounce></p>
                              </div>
                          </div>
                          {/* dark botton section start */}
                          <div className="btnMode">
                              <div className={setClass?"newbtnIcons btnIcons":"btnIcons"}  onClick={darkMode}>
                              <i className="fas fa-moon"></i>
                                  <div className={setClass?"newball ball":"ball"}>
                                  </div>
                                  <i className="fas fa-sun"></i>
                              </div>
                          </div>
                          {/* dark botton sectoon end */}
                      </section>
                      </div>
                  )
              }
          }
      </DataConsumer>
    )
}

export default Header
