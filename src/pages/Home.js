import React, { Component } from 'react'
import { Layout } from 'antd';
import MessageList from '../components/MessageList';
import TalkBox from '../components/TalkBox';
import '../css/Home.css';

const { Sider, Content } = Layout;

export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
      <Layout>
        <Sider>
          <MessageList />
        </Sider>
        <Content>
          <TalkBox />
        </Content>
      </Layout>
      </div>
    );
  }
}
