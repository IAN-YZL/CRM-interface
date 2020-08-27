import React from 'react';
import Ticket from '../../../Category/Plan/component/Ticket';
import SettingButton from './component/SettingButton';
import NewModule from './component/NewModule';
import style from './Banner.module.scss';

const Banner = () => (
    <div>
        <Ticket content="Hi" project="Leadership" />
        <div className={style.btnContainer}>
            <SettingButton />
            <NewModule />
        </div>

    </div>
);

export default Banner;