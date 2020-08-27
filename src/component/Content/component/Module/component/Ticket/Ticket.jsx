import React from 'react';
import style from './Ticket.module.scss';

const Ticket = (props) => (
    <div className={style.container}>
        <div className={style.no}><p>{props.no}</p></div>
        <div>
            <p className={style.title}>{props.module}</p>
            <p className={style.detail}>{props.detail}</p>
        </div>
    </div>
);

export default Ticket;