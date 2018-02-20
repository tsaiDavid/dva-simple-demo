import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TodoList from '../components/TodoList';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <TodoList />
      </ul>
    </div>
  );
}

export default connect()(IndexPage);
