import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class AuthGuard extends React.Component {
  render() {
    const Cmp = this.props.component;
    return this.props.isAuthenticated ? (
      <Cmp />
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: {}
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
