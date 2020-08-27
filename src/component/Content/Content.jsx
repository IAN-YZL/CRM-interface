import React from 'react';
import Banner from './component/Banner';
import style from './Content.module.scss';
import Intro from './component/Intro';
import Module from './component/Module';

const Content = () => (
    <div className={style.container}>
        <Banner />
        <Intro />
        <Module />
    </div>
);

export default Content;