import React from 'react';
import Nav from '../Nav';
import Category from '../Category';
import Content from '../Content';


import style from './App.module.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "digital learning plans",
    };

    this.setCurrentPage = this.setCurrentPage.bind(this);
  }

  setCurrentPage(pageName) {
    this.setState({
      currentPage: pageName,
    });
  }

  render() {
    const currentPage = this.state.currentPage;
    return (
      <div className={style.app}>
        <Nav currentPage={currentPage} onNavItemClick={this.setCurrentPage} />
        <Category title={currentPage}/>
        <Content />
      </div>
    )
  }
}

export default App;
