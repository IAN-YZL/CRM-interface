import React from 'react';
import NavItem from './NavItem';
import checklist from './assets/checklist.png';
import calendar from './assets/calendar.png';
import group from './assets/group.png';
import plan from './assets/plan.png';


class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.functions = [
            {function: "checklist", icon: checklist},
            {function: "calendar", icon: calendar},
            {function: "group", icon: group},
            {function: "plan", icon: plan},
        ];
        this.state = {
            functions: this.functions
        };
    }

    render() {
        const functions = this.state.functions;

        return (
            <div>
                {functions.map((item) => {
                    return (
                        <NavItem icon={item.icon}>{item.function}</NavItem>
                    )
                })}
            </div>
        )
    }
}

export default Nav;