import React from 'react';

const NavItem = (props) => (
    <button>
        <img src={props.icon} alt={props.children}/>
    </button>
);

export default NavItem;