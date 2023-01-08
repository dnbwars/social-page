import React from 'react';
import s from './Music.module.css'
import MusicFilter from './Musicfilter/MusicFilter';

const Music = (props) => {
    let musicElements = props.myMusic.musicFilter.map (d => <MusicFilter name={d.name} /> );
    debugger
    return(
        <div className={s.content}>
            {musicElements}
        </div>
    )
}

export default Music;