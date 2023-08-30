import './Portfollio.css'
import { useState } from 'react';
import arrow from './arrow.png'

import projects from './Projects'


function Portfollio () {
    const [projectIndex, setProjectIndex] = useState(0)
    const [mediaIndex, setMediaIndex] = useState(0)

    const next = (mediaIndex) => {
        if (mediaIndex === projects[projectIndex].media.display.length - 1) {
            setMediaIndex(0)
        } else setMediaIndex(mediaIndex + 1)
    }

    const back = () => {
        if (mediaIndex === 0) {
            setMediaIndex(projects[projectIndex].media.display.length - 1)
        } else setMediaIndex(mediaIndex - 1)
    }

    return (
        <div id='portfollio'>
            <div id='top'>
                <div>{projects[projectIndex].title}</div>
                <div>Projects</div>
            </div>


            <div id="middle" >
                <div>
                    <video src={projects[projectIndex].media.display[mediaIndex]} autoPlay loop/>
                </div>
        

                <div>
                    <div id="list">
                        {projects.map((project, i) => {
                            return <div className={projectIndex === i ? 'yes' : 'no'} onClick={() => {setProjectIndex(i); setMediaIndex(0)}} key={i}>{project.title}<p>{project.descriptions.short}</p></div>
                        })}              
                    </div>

                    <div id='skills'>
                        {projects[projectIndex].skills.website.map((skill, i) => {
                            return <img onClick={() => window.open(skill, '_blank')} src={projects[projectIndex].skills.photo[i]} alt={i} key={i} />
                        })}
                    </div>
                    
                    <div>
                        <div id="description">{projects[projectIndex].descriptions.long}</div>
                    </div>
                </div>
            </div>

            <div id='skills'>
                {projects[projectIndex].skills.website.map((skill, i) => {
                    return <img onClick={() => window.open(skill, '_blank')} src={projects[projectIndex].skills.photo[i]} alt={i} key={i} />
                })}
            </div>

            <div id='mediaSelector'>
                <img alt='back' onClick={() => back()} id='arrow' style={{transform: 'scaleX(-1)'}} src={arrow} />
                
                <div>
                    <div>{projects[projectIndex].media.title[mediaIndex]}</div>

                    <div id='circles'>
                        {projects[projectIndex].media.display.map((skill, i) => {
                            return <div key={i} className={mediaIndex === i ? 'mediaSelected' : ''} id='circle'></div>
                        })}
                    </div>
                </div>

                <img alt='next' onClick={() => next(mediaIndex)} id='arrow' src={arrow} />
            </div>

        </div>
    )
}

export default Portfollio;