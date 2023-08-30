import './Contact.css'
import linkdeln from './linkdeln.avif'
import xbox from './xbox.png'
import gmail from './gmail.png'

function Contact () {
    return (
        <div>
            <div id="title">
                <div id='nameTitle' >Nolen Lawton</div>
                <div id='phone'>586-718-0246</div>
            </div>

            <div id="apps">
                <div><img onClick={() => window.open('mailto:hobonolen@gmail.com?subject=Awesome Website!&body=I had the chance to look at your awesome personal website! Impressive! You are so cool and funny Nolen!')} src={gmail} alt='gmail' /> <div>hobonolen@gmail.com</div> </div>
                <div><a href='https://www.linkedin.com/in/nolen-lawton/' target='_blank' rel='noreferrer'><img src={linkdeln} alt='linkdeln' /></a> <div>nolen-lawton</div></div>
                <div><a href='https://account.xbox.com/en-us/Profile?xr=mebarnav&rtc=1&csrf=EOZ2ijkqYcb2ySH_OlOPA3VUwyc4aXbaSVvzqu7SV9F7_nfBNTtoGszwnpUbgNZu5tnOXG2efSpe52k5nkiAy3s5DII1&wa=wsignin1.0' target='_blank' rel='noreferrer'><img src={xbox} alt='xbox' /></a> <div>hoboken hobos</div> </div>
            </div>
        </div>
    )
}

export default Contact;