import React from 'react';
import style from './Category.module.scss';
import Header from './Header';
import Plan from './Plan';
import Checklist from './Checklist';
import Calendar from './Calendar';
import Group from './Group';

class Category extends React.Component {
    constructor(props) {
        super(props);
        const pages = [
            {title: "checklist", page: (<Checklist />)},
            {title: "digital learning plans", page: (<Plan />)},
            {title: "calendar", page: (<Calendar />)},
            {title: "group", page: (<Group />)},
        ];
        this.state = {
            pages,
        }
    }

    render() {
        const name = this.props.title;
        const pages = this.state.pages;
        return (
            <div className={style.category}>
                <Header title={name}></Header>
                {pages.map((pageItem) => {
                    if (name !== pageItem.title) {
                        return null;
                    }

                    return (
                        <React.Fragment>
                            {pageItem.page}
                        </React.Fragment>
                    )
                })}
            </div>
        )
    }
}

export default Category;