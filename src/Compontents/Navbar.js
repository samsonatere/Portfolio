import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {scroller} from 'react-scroll';
import {DataConsumer} from '../context/Context';
import logo from '../images/logo.png';

function Navbar() {

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
               (value)=>{
                   const {handleOpenSideNav,OpenSidebar,handleCloseSideNav,ShowHeader,setClass} = value
                return(
                    <NavWrapper className={setClass?"dark-nav":""} show={OpenSidebar} position={ShowHeader}>
                        <div className="header-container">
                            <nav>
                                <div className="logoBtn">
                                   <Link to="/" onClick={handleCloseSideNav}><img src={logo} alt="Logo"/></Link>
                                   <div className="btn" onClick={handleOpenSideNav}>
                                       <div className="bar"></div>
                                       <div className="bar"></div>
                                       <div className="bar"></div>
                                   </div>
                                </div>
                                <ul className="link" onClick={handleCloseSideNav}>
                                    {value.Links.map(link=>{
                                        return(
                                            <li key={link.id}><Link to="/" onClick={()=>ScrollToElement(link.scrolling)}>{link.link}</Link></li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </NavWrapper>
                )
               }
           }


       </DataConsumer>
    )
}
const NavWrapper = styled.div`
position:sticky !important;
top:0 !important;
z-index:500;
background: ${props => props.position?'rgba(0,0,0,0.8)':'#000'};
opacity:1;
transition:all 0.5s ease-in-out;

.logoBtn img{
    display:block;
    padding:0 0;
    width:100px;
    height:50px; 
}
.header-container{
    width:100%;
    z-index:500;
}
.bar{
    width:35px;
    margin:5px;
    padding:2px;
    background:#fff;
}
.btn{
    border: 1px solid #f6f6f6;
    display:inline-block;
    cursor:pointer;
}
.logoBtn{
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    border-bottom:1px solid red;
}
.link{
    transition:all 0.5s ease-in-out;
    position:fixed; 
    top:76px;
    bottom:0;
    left:0;
    right:0:;
    background:rgba(0,0,0,0.5);
    width:400px;
    transform:${props=>props.show?"translate(0%)":"translate(-100%)"};
}
.link li a{
    color:#fff;
    text-tranform:capitalize;
    padding:10px;
    display:block;
    transition:all 0.5s ease-in-out;
    border:1px solid transparent;
    border-bottom:1px solid transparent;
    font-size:18px;
    font-family:  sans-serif;

}
.link li a:hover{
    color:#3950b4;
    padding:10px 25px;
    border-bottom:1px solid #ff0000;
    background:rgba(0,0,0,0.9);
}
// responsive
@media screen and (min-width:660px){
    .link{
        transition: all 0s ease-in-out !important;
    }
}
@media screen and (min-width:664px){
    .header-container{
        margin:0 auto;
        width:100%;
    }
    .btn{
        display:none;
    }
    nav{
        display:flex;
        position:relative;
        justify-content:space-between;
        padding:0;
        max-width:1180px;
        margin:0 auto;
    }
    .link{
        position:relative;
        transition:all 0s ease-in-out !important;
        display:flex;
        margin-right:10px;
        justify-content:space-between;
        top:auto;
        align-items:center;
        width:auto;
        background: transparent;
        transform:${props=>props.show?"translate(0%)":"translate(0%)"};
    }
    .link li a{
        display:inline-block;
        margin:0 2px;
        height:auto;
        padding:10px;

    }
    .link li a:hover{
        padding:10px;
        margin:0 2px;
        border:1px solid #3950b4;
        background:transparent;
        
    }
    .logoBtn{
        border-bottom:0;
    }
}
@media screen and (min-width:960){
    .logoBtn img{
        display:block;
        padding:0;
    }
}


`
export default Navbar
