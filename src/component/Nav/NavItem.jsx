import React from 'react';
import style from './Nav.module.scss';
import { ReactComponent as Checklist } from './assets/svg/checklist.svg';
import { ReactComponent as Calendar } from './assets/svg/calendar.svg';
import { ReactComponent as Group } from './assets/svg/group.svg';
import { ReactComponent as Plan } from './assets/svg/plan.svg';

class NavItem extends React.Component {
    constructor(props){
        super(props)
        this.renderSwitch = this.renderSwitch.bind(this);
    }

    renderSwitch(param) {
        switch (param) {
            case "checklist":
                return (
                    <Checklist />
                );
            case "calendar":
                return (
                    <Calendar />
                );
            case "group":
                return (
                    <Group />
                );
            case "digital learning plans":
                return (
                    <Plan />
                );
            default:
                return null;
        }
    }

    render() {
        const functions = this.props.function;
        const isActive = this.props.isActive;

        return (
            <div className={isActive?style.nav_item + " " + style.current:style.nav_item}>
                <div className={style.icon}>
                    {this.renderSwitch(functions)}
                </div>
            </div>
        )
    }
}
export default NavItem;