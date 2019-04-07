import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

class Header extends PureComponent {
  handleClickMenu = e => {
    e.key === 'SignOut' && this.props.onSignOut();
  };
  render() {
    return (
      <Layout.Header id="layoutHeader">
        <span>header</span>
      </Layout.Header>
    );
  }
}

Header.propTypes = {
  fixed: PropTypes.bool,
};

export default Header;
