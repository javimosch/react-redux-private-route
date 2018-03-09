import React from 'react';
import { ShopsTable } from 'components/ShopsTable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetch as fetchAction } from 'modules/shopManager';

class About extends React.Component {
  componentWillMount() {
    const { fetch } = this.props;
    var r = fetch();
    console.log('fetch', r);
  }
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Did you get here via Redux?</p>
        <ShopsTable data={this.props.shopsList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shopsList: state.shopManager.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetch: fetchAction
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(About);
