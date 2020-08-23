import React from 'react';
import Title from './component/CategoryTitle';
import Filters from './component/Filters';
import Search from './component/Search';

const Header = (props) => (
    <div>
        <Title title={props.title} />
        <Filters />
        <Search />
    </div>
);

export default Header;