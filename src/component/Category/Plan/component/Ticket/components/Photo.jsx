import React from 'react';
import photo from './assets/sample.jpg';
import style from '../Ticket.module.scss';

const Photo = () => (
    <div>
        <img className={style.photo} src={photo} alt="avatar" />
    </div>
);

export default Photo;