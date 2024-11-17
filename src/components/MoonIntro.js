import moon from '../img/moon.jpeg';

function MoonIntro(props) {
    return (
        <div id='section0'>
            <h1>about <em className={props.showContents == 0 ? 'show' : null}>moon</em></h1>
            <img className={'moon-main ' + (props.showContents == 0 ? 'show' : null)} src={moon} alt="intro moon image"></img>
        </div>
    )
}

export default MoonIntro;