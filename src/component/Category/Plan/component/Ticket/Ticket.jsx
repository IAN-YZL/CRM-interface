import React from 'react';
import Photo from './components/Photo';
import Information from './components/Information';
import style from './Ticket.module.scss';

const Ticket = (props) => (
    <div className={style.container}>
        <Photo />
        <Information content={props.content}>{props.project}</Information>
    </div>
);

export default Ticket;