import React from 'react';
import Nav from '../Nav';
import Category from '../Category';


import style from './App.module.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "digital learning plans",
    };
  }

  // setCurrentPage(pageName) {
  //   this.setState({
  //     currentPage: pageName,
  //   });
  // }

  render() {
    const currentPage = this.state.currentPage;
    return (
      <div className={style.app}>
        <Nav currentPage={currentPage} onNavItemClick={(page) => this.setState({currentPage: page})} />
        <Category title={currentPage}/>
      </div>
    )
  }
}

export default App;
