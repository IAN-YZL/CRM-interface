import React from 'react';
import AddNew from './component/AddNew';
import Ticket from './component/Ticket';

class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.plans = [
            {project: "Semester 1, 2019", content: "Certificate 3 in Business Administration"},
            {project: "Semester 2, 2019", content: "Certificate 3 in Business Administration"},
            {project: "Leadership and Management, 2020", content: "12 Activities"},
        ];
        this.state = {
            plans: this.plans,
        };
    }

    render() {
        const plans = this.state.plans;

        return (
            <div>
                <AddNew />
                
                {plans.map((item) => {
                    return (
                        <Ticket project={item.project} content={item.content}/>
                    )
                })}

            </div>
        )
    }
}

export default Plan;