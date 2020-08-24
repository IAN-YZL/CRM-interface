import React from 'react';
import Ticket from '../../../Category/Plan/component/Ticket';
import SettingButton from './component/SettingButton';
import NewModule from './component/NewModule';

const Banner = () => (
    <div>
        <Ticket content="Hi" project="Leadership" />
        <SettingButton />
        <NewModule />
    </div>
);

export default Banner;