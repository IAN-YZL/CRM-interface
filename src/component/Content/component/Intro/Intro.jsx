import React from 'react';
import TitleSet from './TitleSet';
import SwitchBtn from './SwitchBtn';
import style from './Intro.module.scss';

const Intro = () => (
    <div className={style.container}>
        <TitleSet />
        <SwitchBtn />
    </div>
);

export default Intro;