import './Nav.css'
import logo from './Screenshot 2023-08-12 at 3.37.15 PM.png'
import resume from './Nolens Resume.pdf'
import githubLogo from './github.png'
import linkdelnLogo from './linkdeln.png'
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Nav () {
    const [option, setOption] = useState(window.location.pathname)
    const navigate = useNavigate()

    return (
        <div id='nav'>

            <div id='header'>
                <img id='logo' src={logo} alt='NL'/>
                <div id='name' >Nolen Lawton</div>
            </div>

            <div id='pages'>
                <div onClick={() => {setOption('/'); navigate('/') }} className={option === '/' ? 'option selected' : 'option' } >About Me</div>
                <div onClick={() => {setOption('/portfollio'); navigate('/portfollio') }} className={option === '/portfollio' ? 'option selected' : 'option' } >Portfollio</div>
                <div onClick={() => {setOption('/contact'); navigate('/contact') }} className={option === '/contact' ? 'option selected' : 'option' } >Contact</div>
                
                <div>
                    <img onClick={() => window.open('https://www.linkedin.com/in/nolen-lawton/', '_blank')} id='linkdeln' src={linkdelnLogo} alt='Linkdeln' />
                    <img onClick={() => window.open('https://github.com/nolenlawton', '_blank')} src={githubLogo} alt='GitHub' />
                </div>

                <span onClick={() => window.open(resume, '_blank')}>My Resume</span>
                
                
            </div>
            
        </div>
    )
}

export default Nav ;