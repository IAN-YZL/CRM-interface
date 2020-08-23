import React from 'react';
import {ReactComponent as FilterIcon} from './assets/svg/filter.svg';
import {ReactComponent as DropIcon} from './assets/svg/drop.svg';
import style from './Filters.module.scss';

const Filters = () => (
    <div className={style.filter}>
        <div className={style.filter_icon}>
            <FilterIcon />
        </div>
        <p>Filter</p>
        <div className={style.drop_icon}>
            <DropIcon />
        </div>
    </div>
);

export default Filters;