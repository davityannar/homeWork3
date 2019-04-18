import React from 'react';
import './CardItem.scss'

export default ({ poster_path, title, release_date, genres }) => {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={poster_path} />
            </div>
            <div className='card-description'>
                <p className='card-film-name'>{title}<span className='card-year'>{release_date && release_date.slice(0, 4)}</span></p>
                <p className='card-genre'>{ genres.join(' & ')}</p>
            </div>
        </div>
    )
}
