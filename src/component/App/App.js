import React from 'react';
import Nav from '../Nav';
import Category from '../Category';

import style from './App.module.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "checklist",
    }
  }

  render() {
    const currentPage = this.state.currentPage;
    return (
      <div className={style.app}>
        <Nav currentPage={currentPage} />
        <Category />
      </div>
    )
  }
}

export default App;
