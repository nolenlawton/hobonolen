import './AboutMe.css'
import mountain from './mountainC.PNG'
import AboutMeInfo from './AboutMeInfo'
import { useState } from 'react'

function AboutMe () {
    const [canvas, setCanvas] = useState('home')

    return(
        <>
        <div id='middlePage' className={canvas === 'home' ? 'scrollHome' : canvas === 'left' ? 'scrollLeft' : canvas === 'right' ? 'scrollRight' : 'scrollDown'}>
            <div id='centerPage'> 
                <div id='left'>
                    <div>My full name is Maurice Nolen Lawton but I've always gone by Nolen!</div>
                    <div>I was born in Madison, Wisconsin, and was raised throughout the midwest, primarily Minneapolis, Minnesota.</div>
                    <div> I am a <b>full-stack engineer</b> and aspiring <b>music producer</b>. Click below to see more.</div>
                </div>
                <img id='mountain' src={mountain} alt='mountain' />

                <div id='right'>
                    <div>In my free time I like to walk my dogs Bear and Maple! Whether its around the block or the Minehaha dog park, they love to get dirty!</div>
                    <div>I love sports, whether its playing or watching! I am huge fan of Minnesota teams! {'(sadly)'}</div>
                    <div>I like to play games with friends whether its a board game or online, but I like winning even more ;)</div>
                </div>
            </div>    

            <div id='bottom'>
                <div className={canvas === 'left' ? 'bc' : 'ac'}  onClick={() => {setCanvas('left')}} id='coder' >{`< coder />`}</div>
                <div className={canvas === 'home' ? 'bh' : 'ah'} onClick={() => setCanvas('home')} id='home' >about me</div>
                <div className={canvas === 'right' ? 'bp' : 'ap'} onClick={() => {setCanvas('right')}} id='producer' >producer</div>
            </div>
        </div>

        <AboutMeInfo props={canvas} />

        </>

    )
}

export default AboutMe;