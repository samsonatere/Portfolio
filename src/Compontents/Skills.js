import React from 'react'
import Title from './Title';
import {DataConsumer} from '../context/Context';

function Skills() {
    return (
<DataConsumer>
{
    (value)=>{
        const {setClass} = value
    return(
        <div className="skills">
            <div className="container">
            <Title title="Skill" color={setClass?"orange":"gray"}/>
            <div className="skills-center">
                <div className={setClass?"dark-mode-orange":"skills-web"}>
                    <h4>Web Development Skills</h4>
                    { value.Devskills.map(item=>{
                        return(
                            <li key={item.id}>
                                <h3>{item.title}</h3> <span className="bar"><span className={item.percent}>
                                    <p>{item.number}</p></span></span>
                            </li>
                        )
                    })
                    }
                </div>
                <div className={setClass?"dark-mode-orange":"skills-physics"}>
                    <h4>Physics and Electronics Skills</h4>
                    { value.Physics.map(item=>{
                        return(
                            <li key={item.id}>
                                <h3>{item.title}</h3> <span className="bar"><span className={item.percent}>
                                    <p>{item.number}</p></span></span>
                            </li>
                        )
                    })
                    }
                </div>
                <div className={setClass?"dark-mode-orange":"skills-soft"}>
                    <h4> Soft-skills and Management skills</h4>
                    { value.Soft.map(item=>{
                        return(
                            <li key={item.id}>
                                <h3>{item.title}</h3> <span className="bar"><span className={item.percent}>
                                    <p>{item.number}</p></span></span>
                            </li>
                        )
                    })
                    }
                </div>
            </div>
            </div>
        </div>
            
        
        
    )
    }
}
</DataConsumer>
    )
}

export default Skills
