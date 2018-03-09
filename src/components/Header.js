import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import { logout as logoutAction } from 'modules/auth';
// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: navy;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.header`
  padding: 2em;
  background: #0074d9;
`;

const F = styled.label`
  font-size: 16px;
  color: white;
  padding: 5px;
  margin-right: 5px;
`;

class Header extends React.Component {
  async handleLogout() {
    await this.props.logout();
    push('/login');
  }
  render() {
    return this.props.isAuthenticated ? (
      <Wrapper>
        <Title>Header</Title>
        <div>
          <Link to="/">
            <F>Overview</F>
          </Link>
          <Link to="/whitelist">
            <F>Whitelist</F>
          </Link>
          <Link to="/blacklist">
            <F>Blacklist</F>
          </Link>
          <Link to="/settings">
            <F>Settings</F>
          </Link>
          <button onClick={() => this.handleLogout.apply(this)}>
            <F>Logout</F>
          </button>
        </div>
      </Wrapper>
    ) : (
      <div />
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout: logoutAction
    },
    dispatch
  );
export default connect(mapStateToProps, mapDispatchToProps)(Header);
