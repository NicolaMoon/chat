import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from "react-router-dom";
import '../css/SlideBar.css';

const { Sider } = Layout;

class SlideBar extends Component {
  state = {
    selectedKeys: [],
    menus: [
      {
        key: "message",
        type: "message",
        name: "Message",
      },
      {
        key: "friends",
        type: "contacts",
        name: "Friends",
      },
      {
        key: "me",
        type: "idcard",
        name: "Me",
      }
    ],
  }

  componentDidMount() {
    this.updateMenu();
  }

  updateMenu = () => {
    const { menus } = this.state;
    const pathname = this.props.location.pathname;
    const selectedKeys = [];
    menus.map(menu => {
      if (`/${menu.key}` === pathname) selectedKeys.push(menu.key);
    });
    console.log(selectedKeys);
    this.setState({ selectedKeys });
  }

  handleClickMenu = ({ item = {} }) => {
    const { props: { data = {} } } = item;
    const selectedKeys = [];
    selectedKeys.push(data.key);
    this.props.history.push({
      pathname: `/${data.key}`,
    });
    console.log(data.key, this.props.history, selectedKeys);
    this.setState({ selectedKeys });
  }

  render() {
    const { selectedKeys, menus } = this.state;
    return (
      <div className="slidebar-wrapper">
        <Layout>
          <Sider
            theme="light"
            collapsed
          >
            <Menu
              className="slidebar-menu"
              defaultSelectedKeys={["message"]}
              selectedKeys={selectedKeys}
              mode="inline"
              onClick={this.handleClickMenu}
            >
              {menus.map(item => (
                <Menu.Item key={item.key} data={item}>
                  <Icon type={item.type} theme="filled" className="slidebar-menu-icon" />
                  <span>{item.name}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            {this.props.children}
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(SlideBar);
