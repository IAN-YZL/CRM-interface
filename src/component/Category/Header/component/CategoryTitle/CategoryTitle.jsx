import React from 'react';
import {ReactComponent as Icon} from './assets/svg/expand.svg';
import style from './CategoryTitle.module.scss';

const CategoryTitle = (props) => (
    <div className={style.title}>
        <p>{props.title}</p>
        <div className={style.icon}>
            <Icon />
        </div>
    </div>
);

export default CategoryTitle;