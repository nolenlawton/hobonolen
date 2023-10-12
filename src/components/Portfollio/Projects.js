import html from './Skills/HTML.svg'
import css from './Skills/CSS.svg'
import js from './Skills/JavaScript.svg'
import react from './Skills/React.svg'
import node from './Skills/NodeJS.svg'
import redux from './Skills/Redux.svg'
import sql from './Skills/PostgreSQL.svg'
import git from './Skills/Git.svg'
import api from './Skills/API.png'
import mui from './Skills/MUI.png'
import aws from './Skills/AWS.svg'

import hobtropolisHome from './Hobtropolis/Hobtropolis Home.mp4'
import game1 from './Hobtropolis/Master Mind.mp4'
import game2 from './Hobtropolis/Castle Moonlight.mp4'
import leaderboard from './Hobtropolis/Leaderboard.mp4'

import hobstopHome from './Hobstop/Hobstop Home.mp4'
import schedule from './Hobstop/Schedule.mp4'
import roster from './Hobstop/Roster.mp4'
import standings from './Hobstop/Standings.mp4'

import units from './BabyKnow/Units.mp4'
import unit from './BabyKnow/Unit.mp4'
import registrants from './BabyKnow/Registrants.mp4'
import lessons from './BabyKnow/Lessons.mp4'
import myPath from './BabyKnow/My Path.mp4'
import myStudents from './BabyKnow/My Students.mp4'

import nutube from './Nutube/nutube.mp4'
import desktop from './Nutube/desktop.mp4'
import mobile from './Nutube/mobile.mp4'


const projects = [
    {   title: 'Hobtropolis', 
        descriptions: {short: 'An online arcade with some of my favorite games!', long: 'An online retro arcade containing remixes to some of my favorite childhood games. Show off your skills on the global leaderboards or try to top your personal bests! Special thanks to Prime Digital Academy for the boost to start my first personal project. I plan to expand and create more games in the world of Hobtropolis.'}, 
        media: { display: [hobtropolisHome, game1, game2, leaderboard], title: ['Home and Profile Selection Pages', 'Master Mind Game', 'Castle Moonlight Game', 'Leaderboard Page']},
        skills: { photo: [html, css, js, react, node, redux, sql, git], website: ['https://html.com/html5/', 'https://www.css3.com/', 'https://www.javascript.com/', 'https://react.dev/', 'https://nodejs.org/en', 'https://redux.js.org/', 'https://www.postgresql.org/', 'https://git-scm.com/'] }
    },
    {   title: 'Hobstop', 
        descriptions: {short: 'A place for all things NBA. Stats, Standings and More!', long: 'A new hot spot for everything NBA. Select your favorite team to see their schedule, stats and roster, or see where they stand in the ranks of the NBA. Special thanks to API NBA for all data. (The demo is split up awkwardly due to limits from the free API plan) I plan to add streaming to live games and highlights to past games.' }, 
        media: {display: [hobstopHome, schedule, roster, standings], title: ['Home (Teams) Page', 'Team Page (Schedule)', 'Team Page (Roster)', 'Standings Page']},
        skills: { photo: [html, css, js, react, node, redux, sql, git, api], website: ['https://html.com/html5/', 'https://www.css3.com/', 'https://www.javascript.com/', 'https://react.dev/', 'https://nodejs.org/en', 'https://redux.js.org/', 'https://www.postgresql.org/', 'https://git-scm.com/', 'https://rapidapi.com/api-sports/api/api-nba'] }
    },
    {   title: 'Baby Know', 
        descriptions: {short: 'Learning Management System (LMS) and Course Creator', long: 'Baby Know is a learning management system (LMS) that hosts content for the Baby Know: Bodies, Hearts & Minds program, which provides new parents with a holistic approach to their child’s development. The application is built for three types of users: administrators, students and teachers. The Baby Know program includes information, tools and strategies to create strong parent-child relationships, incorporating developmental milestones and nurturing the emotional well-being of all family members. Parents learn through video lectures, demonstrations, and activities, covering all aspects of development.'}, 
        media: {display: [units, unit, registrants, lessons, myPath, myStudents], title: ['Units Page (admin)', 'Unit Page (admin)', 'Registrants Page (admin)', 'Units - Lessons Page (student)', 'My Path Page (students)', 'My Students Page (teacher)']},
        skills: { photo: [html, css, js, react, node, redux, sql, git, mui, aws], website: ['https://html.com/html5/L', 'https://www.css3.com/', 'https://www.javascript.com/', 'https://react.dev/', 'https://nodejs.org/en', 'https://redux.js.org/', 'https://www.postgresql.org/', 'https://git-scm.com/', 'https://mui.com/', 'https://aws.amazon.com/'] }
    },
    // {   title: 'Nutube', 
    //     descriptions: {short: 'A YouTube Clone using CSS', long: 'NuTube is a clone of YouTube I created to practice my css skills. The goal was to practice responsive web design and follow basic UI practices on a well-known popular website. I hope to include this responsive design in projects moving forward.'}, 
    //     media: {display: [nutube, desktop, mobile], title: ['Responsive', 'Desktop', 'Mobile']},
    //     skills: { photo: [html, css, js, react, git, mui], website: ['https://html.com/html5/L', 'https://www.css3.com/', 'https://www.javascript.com/', 'https://react.dev/', 'https://git-scm.com/', 'https://mui.com/'] }
    // },
]

export default projects