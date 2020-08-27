import React from 'react';
import style from './Intro.module.scss';

const SwitchBtn = () => (
    <div className={style.btn_container}>
        <p className={style.btn_name}>Hide Rule</p>
        <label className={style.switch}>
            <input type="checkbox" />
            <span className={style.slider}></span>
        </label>
    </div>
);

export default SwitchBtn;