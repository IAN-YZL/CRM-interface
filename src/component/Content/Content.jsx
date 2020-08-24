import React from 'react';
import Banner from './component/Banner';
import style from './Content.module.scss';

const Content = () => (
    <div className={style.container}>
        <Banner />
    </div>
);

export default Content;