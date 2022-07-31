import React from 'react';
import s from './Friends.module.css'
import Friend from './Friend';
import StoreContext from '../../StoreContext';

const Friends = () => {

    return(
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState();   
                
                let friendElemends = state.sidebar.friends.map (el => <Friend name={el.name} logo={el.logo} status={el.status}/> );


                <div className={s.content}>
                    <div className={s.head}>Friends</div>
                        <div className={s.bestFirends}>
                        <div className={s.friends}>
                        {friendElemends}
                    </div>
                    </div>
                </div> 
                
            }
            }
    </StoreContext.Consumer>
    )
}

export default Friends;