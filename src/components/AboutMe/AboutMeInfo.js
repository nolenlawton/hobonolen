import html from '../Portfollio/Skills/HTML.svg'
import css from '../Portfollio/Skills/CSS.svg'
import js from '../Portfollio/Skills/JavaScript.svg'
import react from '../Portfollio/Skills/React.svg'
import node from '../Portfollio/Skills/NodeJS.svg'
import redux from '../Portfollio/Skills/Redux.svg'
import sql from '../Portfollio/Skills/PostgreSQL.svg'
import git from '../Portfollio/Skills/Git.svg'
import api from '../Portfollio/Skills/API.png'
import aws from '../Portfollio/Skills/AWS.svg'
import mui from '../Portfollio/Skills/MUI.png'
import fl from './flStudio.png'



function AboutMeInfo ({props}) {

    const canvas = props

    const skills = { photo: [html, css, js, react, node, redux, sql, git, mui, aws, api], website: ['https://html.com/html5/L', 'https://www.css3.com/', 'https://www.javascript.com/', 'https://react.dev/', 'https://nodejs.org/en', 'https://redux.js.org/', 'https://www.postgresql.org/', 'https://git-scm.com/', 'https://mui.com/', 'https://aws.amazon.com/', '']}

    return (
        <>
            <div className={canvas === 'left' ? 'showCoder' : 'hideCoder'} id='codingInfo' > 
                <div>I am a full-stack developer who is currently looking for work. I started learning to code in <b>July of 2022</b> where I found Prime Digital Academy. At this bootcamp I learned front-end and back-end JavaScript starting with JQuery and making our way to React. Before aquiring my full-stack certification, I worked on solo and client projects to prove what I learned throughout. (projects are posted in my portfollio.) Since graduating, I have worked on personal projects while job searching.</div>
                <div id="codeSkills">
                    {skills.photo.map((skill, i) => {
                        return <img onClick={() => window.open(skills.website[i], '_blank')} src={skill} alt={i} key={i} />
                    })}
                </div>
            </div> 

            <div className={canvas === 'right' ? 'showProducer' : 'hideProducer'} id='producerInfo' > 
                <div>In my free time I like to learn how to produce music! This is something I have played around with since highschool but would like to take the next step in mastering these skills. Right now I use <b>FL Studio 20</b> but have dabbled with Ableton in the past. I look forward to expanding this website to host some of my projects.</div>
                <img src={fl} alt='fl studio'/>
            </div> 
        </>
    )
}

export default AboutMeInfo