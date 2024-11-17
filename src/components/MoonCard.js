import star from '../img/star-square.png';
import moonFront from '../img/moon-front.png';
import moonBack from '../img/moon-back.png';
import earth from '../img/earth.png'



function MoonCard() {
    return (
        <section id='section2' className='content-item'>
            <div className='moon-card'>
                <figure className='moon-card-front'>
                <img className='star' src={star} alt="Moon Navigation" />;
                <img className='moon-front' src={moonFront}></img>
                <figcaption>Front</figcaption>
                </figure>
                <figure className='moon-card-back'>
                <img className='star' src={star}></img>
                <img className='moon-back' src={moonBack}></img>
                <img className='earth' src={earth}></img>
                <figcaption>Back</figcaption>
                </figure>
            </div>
        </section>
    )
}

export default MoonCard;