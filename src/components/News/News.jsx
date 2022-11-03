import React from 'react';
import s from './News.module.css'
import NewsFilter from './NewsFilter';


const News = (props) => {
    return(
        <div className={s.content}>
            <div className={s.newsContainer}>
                <div className={s.newsFilters}>
                    <NewsFilter filter={props.state.filter}/>
                </div>
            </div>
        </div>
    )
}

export default News;