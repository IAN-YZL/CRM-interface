import React from 'react';
import NavItem from './NavItem';
import style from './Nav.module.scss';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.functions = [
            "checklist", "calendar", "group", "digital learning plans"
        ];
        this.state = {
            functions: this.functions
        };
    }

    render() {
        const functions = this.state.functions;
        const currentPage = this.props.currentPage;

        return (
            <div className={style.nav}>
                {functions.map((item) => {
                    console.log((currentPage===item), item);
                    return (
                        <NavItem function={item} isActive={(currentPage===item)}/>
                    )
                })}
            </div>
        )
    }
}

export default Nav;