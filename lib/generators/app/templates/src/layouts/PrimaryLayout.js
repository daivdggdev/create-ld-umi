import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'umi/withRouter';
import { Layout } from 'antd';

@withRouter
class PrimaryLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Layout>{children}</Layout>
      </Fragment>
    );
  }
}

PrimaryLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrimaryLayout;
