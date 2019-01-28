import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { serverInstance as axios } from 'dace/dist/runtime/axiosInstance';
import { Head } from 'dace';
import Layout from '../layouts/default';

export default class Users extends Component {
  static propTypes = {
    name: PropTypes.string
  };

  static defaultProps = {
    name: ''
  }

  static async getInitialProps(ctx) {
    let res = {};
    try {
      res = await axios(ctx).get('/api/name');
    } catch (e) {
      console.error(e);
    }
    return res.data;
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Users</title>
        </Head>
        <h1>Users</h1>
        <h2>{this.props.name}</h2>
      </Layout>
    );
  }
}
