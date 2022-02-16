
import './style.css'

function CharacterCard({ characters}) {
    return (
        <div className='card-container'>
            
            
                <article className="card">
                    <div className='info-container'>
                        <div>
                            <img src={characters.image} className='img' />
                        </div>
                        <div className='info'>
                            <div className='info-char'>
                                <h3 className='name-char'>{characters.name}</h3>
                                <div className='name-info'>
                                    <div className={characters.status === 'Alive' ? 'pointAlive': 'pointDead' } id={characters.status != 'Alive' && characters.status != 'Dead' ? 'unknown' : ''} ></div>
                                    <p>{characters.status}-{characters.species}</p>
                                </div>
                            </div>

                            <div className='info-char'>
                                <p className='title'>Last Known location:</p>
                                <p>{characters.location.name}</p>
                            </div>

                            <div className='info-char'>
                                <p className='title'>First seen in:</p>
                                <p className='footer-char'>{characters.origin.name}</p>
                            </div>

                        </div>
                    </div>

                </article>
            
        </div>

    )
}

export default CharacterCard