import React from 'react';
import style from '../Ticket.module.scss';

const Information = (props) => (
    <div className={style.text}>
        <p className={style.title}>{props.children}</p>
        <p className={style.content}>{props.content}</p>
    </div>
);

export default Information;