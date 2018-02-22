import React, { PureComponent } from 'react';
// import { connect } from 'dva';
import PupsList from '../components/PupsList';

export default class PupsPage extends PureComponent {
  render () {
    return (
      <div> 
        <PupsList />
      </div>
    );
  }
}
