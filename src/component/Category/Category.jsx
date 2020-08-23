import React from 'react';
import style from './Category.module.scss';
import Header from './Header';
import Plan from './Plan';
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const title = this.props.title;
        return (
            <div className={style.category}>
                <Header title={title}></Header>
                <Plan />
            </div>
        )
    }
}

export default Category;