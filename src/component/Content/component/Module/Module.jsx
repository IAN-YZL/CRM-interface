import React from 'react';
import Ticket from './component/Ticket';
import style from './Module.module.scss';
import NewModule from '../Banner/component/NewModule';

class Module extends React.Component {
    constructor(props){
        super(props);
        const modules = [
            {module: "Dealing with customer complaints", details: "Excellent customer service is the cornerstone of any good business"},
            {module: "Provide First Aid", details: "Knowing the basics of first aid is crucial in a work environment where emergencies can happen at times sdevelra sacscasd adwawascal"},
            {module: "Introduction to First Aid", details: "Learning Course"},
        ]
        this.state = {
            modules,
            currentTicket: null,
        }

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseOver(number) {
        this.setState({
            currentTicket: number,
        })
    }

    mouseLeave() {
        this.setState({
            currentTicket: null,
        })
    }

    render() {
        const modules = this.state.modules;
        const currentTicket = this.state.currentTicket;
        let count = 0;

        return(
            <div className={style.container}>
                {console.log(currentTicket)}
                {modules.map((item) => {
                    count++;
                    return(
                        <Ticket no={count} module={item.module} detail={item.details} mouseOverFunc={this.mouseOver} mouseLeaveFunc={this.mouseLeave} isActive={currentTicket === count} />
                    )
                })}
                <NewModule />
            </div>
        )
    }
}

export default Module