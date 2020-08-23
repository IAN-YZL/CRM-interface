import React from 'react';
import Title from './component/CategoryTitle';
import Filters from './component/Filters';

const Header = (props) => (
    <div>
        <Title title={props.title} />
        <Filters />
    </div>
);

export default Header;