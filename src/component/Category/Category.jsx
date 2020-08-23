import React from 'react';
import style from './Category.module.scss';
import CategoryTitle from './component/CategoryTitle';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const title = this.props.title;
        return (
            <div className={style.category}>
                <CategoryTitle title={title}></CategoryTitle>
            </div>
        )
    }
}

export default Category;