import React from 'react';
import {ReactComponent as Icon} from './assets/svg/setting.svg';
import style from '../Banner.module.scss';

const SettingButton = () => (
    <div>
        <button className={style.settingBtn}>
        <Icon />
        Plan Settings
        </button>
    </div>
);

export default SettingButton;