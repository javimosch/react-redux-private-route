import React from 'react';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login as loginAction } from 'modules/auth';
class Login extends React.Component {
  handleLogin() {
    this.props.login();
  }
  render() {
    return this.props.isAuthenticated ? (
      <Redirect
        to={{
          pathname: '/',
          state: {}
        }}
      />
    ) : (
      <div>
        <button onClick={() => this.handleLogin.apply(this)}>Login</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: loginAction
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Login);
