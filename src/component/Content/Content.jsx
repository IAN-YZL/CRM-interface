import React from 'react';
import Banner from './component/Banner';
import style from './Content.module.scss';
import Intro from './component/Intro';

const Content = () => (
    <div className={style.container}>
        <Banner />
        <Intro />
    </div>
);

export default Content;