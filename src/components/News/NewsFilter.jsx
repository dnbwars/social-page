import react from "react";
import s from './NewsFilter.module.css'

const NewsFilter = (props) => {
    return (
        <ul>
            <li className={s.filterItem}>{props.filter}</li>
            <li className={s.filterItem}>{props.filter}</li>
        </ul>
    )
}

export default NewsFilter;