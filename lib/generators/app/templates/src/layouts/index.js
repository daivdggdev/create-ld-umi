import React, { Component } from 'react'
import withRouter from 'umi/withRouter'

@withRouter
class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <BaseLayout>{children}</BaseLayout>
    )
  }
}

export default Layout
