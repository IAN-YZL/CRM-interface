import React from 'react';
import Ticket from '../../../Category/Plan/component/Ticket';
import SettingButton from './component/SettingButton';

const Banner = () => (
    <div>
        <Ticket content="Hi" project="Leadership" />
        <SettingButton />
    </div>
);

export default Banner;