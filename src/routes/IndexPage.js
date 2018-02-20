import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TodoList from '../components/TodoList';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <ul className={styles.list}>
        <TodoList />
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
