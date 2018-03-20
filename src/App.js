import React, { Component } from 'react';
import logo from './logo.png';
import styles from './App.modules.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
