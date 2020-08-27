import React from 'react';
import {ReactComponent as Icon} from './assets/svg/drop.svg';
import style from './Intro.module.scss';

const TitleSet = () => (
    <div className={style.title_container}>
        <p>Leadership and Management, 2020</p>
        <Icon />
    </div>
);

export default TitleSet;