import moonFront from '../img/moon-front.png';

function MoonTerrain(props) {
    return (
        <section id='section1' className='content-item'>
            <img src={moonFront}></img>
            
            <div className='terrain-wrap'>
                <div className='terrain-item sea'>
                <div className={'line ' + (props.showContents == 1 ? 'show' : null)}>
                    <div className='diagonal'></div>
                    <div className='horizon'></div>
                </div>
                <h2 className={props.showContents == 1 ? 'show' : null}>MARIA <em className={props.showContents == 1 ? 'show' : null}>dark terrain</em></h2>
                <p className={props.showContents == 1 ? 'show' : null}>mare, plural maria, any flat, dark plain of lower elevation on the Moon. The term, which in Latin means “sea,” was erroneously applied to such features by telescopic observers of the 17th century. In actuality, maria are huge basins containing lava flows marked by craters, ridges, faults, and straight and meandering valleys called rilles and are devoid of water.</p>
                </div>

                <div className='terrain-item mountain'>
                <div className={'line ' + (props.showContents == 1 ? 'show' : null)}>
                    <div className='diagonal'></div>
                    <div className='horizon'></div>
                </div>
                <h2 className={props.showContents == 1 ? 'show' : null}>HIGH LANDS <em className={props.showContents == 1 ? 'show' : null}>bright terrain</em></h2>
                <p className={props.showContents == 1 ? 'show' : null}>Regions on the moon's surface that are brightly colored except for the sea are called highlands. Continents are densely packed with craters. The minerals that make up the continent appear relatively bright because they are similar to plagioclase plagioclase, which is mainly rich in calcium and aluminum.</p>
                </div>

                <div className='terrain-item craters'>
                <div className={'line ' + (props.showContents == 1 ? 'show' : null)}>
                    <div className='diagonal'></div>
                    <div className='horizon'></div>
                </div>
                <h2 className={props.showContents == 1 ? 'show' : null}>CRATER <em className={props.showContents == 1 ? 'show' : null}>recessed terrain</em></h2>
                <p className={props.showContents == 1 ? 'show' : null}>impacts. The International Astronomical Union currently recognizes 9,137 craters, of which 1,675 have been dated</p>
                </div>
            </div>
        </section>
    )
}

export default MoonTerrain;