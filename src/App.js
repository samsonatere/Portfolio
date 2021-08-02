
import './App.css';
import {Element} from 'react-scroll';
import Navbar from './Compontents/Navbar';
import About from './Compontents/About';
import Contact from './Compontents/Contact';
import Header from './Compontents/Header';
import Skills from './Compontents/Skills';
import Project from './Compontents/Project';
import {Route} from 'react-router-dom'
import {DataConsumer} from './context/Context'

function App() {
  return (
    <DataConsumer>
      {
        value=>{
          const {setClass}=value
          return(
            <div className={setClass?"dark-mode-black":"App"}>

            <Navbar/>
            <Element name="Home">
            <Route exact path="/" component={Header}/>
            </Element>
            <Element name="About">
            <Route exact path="/" component={About}/>
            </Element>
            <Element name="Skills">
            <Route exact path="/" component={Skills}/>
            </Element>
              <Element name="Projects">
              <Route exact path="/" component={Project}/>
            </Element>
            <Element name="Contact">
            <Route exact path="/" component={Contact}/>
            </Element>
        </div>
          )
        }
      }
    </DataConsumer>
   
  );
}

export default App;
