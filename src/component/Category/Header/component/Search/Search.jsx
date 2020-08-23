import React from 'react';
import style from './Search.module.scss';
import { ReactComponent as Icon } from './assets/svg/search.svg';

const Search = () => (
    <div className={style.search_input}>
        <div className={style.icon}>
            <Icon />
        </div>
        <input name="search" type="search" placeholder="Search" />
    </div>
);

export default Search;