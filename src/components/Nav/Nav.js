import './Nav.css'
import logo from './Screenshot 2023-08-12 at 3.37.15 PM.png'
import { useState } from 'react';

function Nav () {
    const [option, setOption] = useState(1)



    return (
        <div id='nav'>

            <div id='header'>
                <img id='logo' src={logo} alt='NL'/>
                <div id='name' >Nolen Lawton</div>
            </div>

            <div id='pages'>
                <div onClick={() => setOption(1)} className={option === 1 ? 'option selected' : 'option' } >About Me</div>
                <div onClick={() => setOption(2)} className={option === 2 ? 'option selected' : 'option' } >Portfollio</div>
                <div onClick={() => setOption(3)} className={option === 3 ? 'option selected' : 'option' } >Contact</div>
            </div>
        </div>
    )
}

export default Nav ;