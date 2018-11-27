import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import {
  View
} from 'react-native';

import Home from '../views/home';

import {connect} from 'react-redux';
import styles from '../styles/main.js';



class Authenticated extends Component {
  render() {
    var props = this.props;
    var match = props.match;
    return (
      <Switch>
        <Route exact  path={match.url} component={Home}/>
      </Switch>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(Authenticated);

