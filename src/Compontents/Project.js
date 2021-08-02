import React from 'react';
import Title from './Title';
import {DataConsumer} from '../context/Context';
function Project() {
    return (
        <DataConsumer>
            {
        (value)=>{
            const {setClass} = value
            return(
                <div className="projects">
                    <div className="projects-container">
                    <Title title="project" color={setClass?"red":"gray"}/>
                    <div className="projects-center">
                {value.Projects.map(item=>{
                        return(
                            <div className="single-projects" key={item.id}>
                                <a href={item.extlink} target="_blank" rel="noopener noreferrer">
                                <img src={item.img} alt="img"/>
                                </a>
                                <p>{item.title}</p>
                               <div className="item">
                                   <div className="itemsGit">
                                   <a href={item.gitlink} target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a>
                                   </div>
                                <button className="projectBtn">
                                    <a href={item.extlink} target="_blank" rel="noopener noreferrer">{item.btnTitle}</a>
                                </button>
                               </div>
                            </div>
                        )
                    })
                }
                    </div>
                    </div>
                </div>
    
            )
                }
            }
        </DataConsumer>
    )
}

export default Project
