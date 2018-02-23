import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TodoList from '../components/TodoList';
import { Link } from 'dva/router';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        <Link to="/pups">Dogs</Link>
        <TodoList />
      </ul>
    </div>
  );
}

export default connect()(IndexPage);
