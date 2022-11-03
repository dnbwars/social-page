import React from 'react';
import s from './Map.module.css'

const Map = (props) => {

    return(

        <div className={s.content}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40595.17712736977!2d30.798643199999994!3d50.511872000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1661683092073!5m2!1sru!2sua"></iframe>
        </div>
    )
}

export default Map;