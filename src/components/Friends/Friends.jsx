import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend';

const Friends = (props) => {

    let friendElemends = props.friends.map (el => <Friend name={el.name} logo={el.logo}/> );

    return(
        <div className={s.content}>
            <div className={s.head}>Friends</div>
            <div className={s.bestFirends}>
                <div className={s.friends}>
                   {friendElemends}
                </div>
            </div>
        </div>
    )
}

export default Friends;