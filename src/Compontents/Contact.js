import React from 'react'
import Title from './Title';
import {DataConsumer} from '../context/Context';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

function Contact() {

    const ScrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-80
        })
    }
    return (
       <DataConsumer>
           {
               (value) => {
                   const {setClass} = value
                return(
                    <>
                     <Title title="Contact" color={setClass?"orange":"gray"}/>
                     <div class="container">
                        <form name="contact" method="POST" data-netlify="true">
                        <div class="mb-3" >
                            <label class="form-label">Your Name: </label>   
                            <input class="form-control" type="text" name="name" />
                        </div>
                        <div class="mb-3" >
                            <label class="form-label">Your Email: </label>
                            <input class="form-control" type="email" name="email" />
                        </div>
                        <div class="mb-3" >
                            <label class="form-label">Message: </label>
                            <textarea class="form-control" name="message"></textarea>
                        </div>
                        <div>
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                        </form>
                    </div>
                     <div className="contact">
                             <div className="contact-center">
                                 <div className="contact-link">
                                     <div className="links-item">
                                     <h3>Links</h3>
                                        {value.Links.map(item=>{
                                            return(
                                                <ul key={item.id}>
                                               <li >
                                                 <Link to="/" onClick={()=>ScrollToElement(item.scrolling)}>{item.link}</Link>
                                               </li>
                                               </ul>
                                            )
                                        })}
                                     </div>
                                     <div className="contact-media">
                                         <h3>Social Media</h3>
                                             <ul>
                                             <li> <a href="https://www.linkedin.com/in/samson-atere-1778a4127/" target="_blank" rel="noopener noreferce">
                                                 <i className="fab fa-linkedin fa-2x"/></a></li>
                                             <li><a href="https://www.facebook.com/samson2atere/" target="_blank" rel="noopener noreferce">
                                                <i className="fab fa-facebook-square fa-2x"/></a></li>
                                             <li><a href="https://github.com/samsonatere" target="_blank" rel="noopener noreferce">
                                                <i className="fab fa-github-square fa-2x"/></a></li>
                                             <li><a href="http://twitter.com/Atere_dayo" target="_blank" rel="noopener noreferce">
                                                <i className="fab fa-twitter fa-2x"/></a></li>
                                        </ul>
                                        <h3>Hotline</h3>
                                        <li><a href="tel:+2349036649975" target="_blank" rel="noopener noreferce">
                                        <i class="fa fa-phone" aria-hidden="true"></i> (+234)9036649975</a></li>
                                        <li><a href="https://wa.link/xg8esi" target="_blank" rel="noopener noreferce">
                                        <i class="fab fa-whatsapp"></i> WhatsApp</a></li>
                                     </div>
                                 </div>
                             </div>
                     </div>
                     <div className="created">
                         <div className="container copy">
                             <p>&copy;Design by AtereD1 {year()>2020 ? "2020 - ":""}{year()}</p>
                         </div>
                     </div>
                    </>
                   
                )
            }
           }
           
       </DataConsumer>
    )        
}
// year functions
let year = ()=>{
    let year = new Date().getFullYear();
    return year
}
export default Contact
