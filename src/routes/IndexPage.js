import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
// import TodoList from '../components/TodoList';
import PupsList from '../components/PupsList';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <ul className={styles.list}>
        {/* <TodoList /> */}
        <PupsList />
      </ul>
    </div>
  );
}

export default connect()(IndexPage);
