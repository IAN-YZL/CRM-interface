import React from 'react';
import Ticket from './component/Ticket';

class Module extends React.Component {
    constructor(props){
        super(props);
        const modules = [
            {module: "Dealing with customer complaints", details: "Excellent customer service is the cornerstone of any good business"},
            {module: "Provide First Aid", details: "Knowing the basics of first aid is crucial in a work environment where emergencies can happen at times..."},
            {module: "Introduction to First Aid", details: "Learning Course"},
        ]
        this.state = {
            modules,
        }
    }

    render() {
        const modules = this.state.modules;
        let count = 0;

        return(
            <div>
                {modules.map((item) => {
                    count++;
                    return(
                        <Ticket no={count} module={item.module} detail={item.details} />
                    )
                })}
            </div>
        )
    }
}

export default Module