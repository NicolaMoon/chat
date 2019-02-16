import React, { Component } from 'react';
import { Row, Col, Icon, Input, List, Avatar } from 'antd';
import Ava from './Ava';
import '../css/MessageList.css';

const Search = Input.Search;

const mockData = [
  {
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Name1",
    description: "qqqqqqqqqq",
    time: "12:34",
  },
  {
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Name2",
    description: "qqqqqqqqqq",
    time: "12:00",
  }
];

const mockData2 = [
  {
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Name3",
    description: "qqqqqqqqqq",
    time: "02.13",
  },
  {
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    name: "Name4",
    description: "qqqqqqqqqq",
    time: "2018",
  }
];

export default class MessageList extends Component {
  render() {
    return (
      <div className="messagelist-wrapper">
        <Row>
          <Col span={10}>
            <Ava top={20} left={20} />
          </Col>
          <Col span={14}>
            <p className="my-name">Nicola 杨</p>
            <p className="my-description">ENDING OF THE WORLD BEGINS WITH A NEW LIFE!</p>
          </Col>
        </Row>
        <Row className="g-margin-top-large">
          <Col span={18}>
            <Search
              placeholder="input search name"
              size="small"
              className="messagelist-search"
            />
          </Col>
          <Col span={6}>
            <div className="messagelist-add">
              <Icon type="plus" />
            </div>
          </Col>
        </Row>
        <div className="messagelist-list-box">
          <List
            itemLayout="horizontal"
            dataSource={mockData}
            header="Today"
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={item.name}
                  description={item.description}
                />
                <div className="messagelist-time">{item.time}</div>
                <Icon type="delete" className="messagelist-delete"/>
                <div className="messagelist-list-bg"></div>
              </List.Item>
            )}
          />
          <List
            itemLayout="horizontal"
            dataSource={mockData2}
            header="Earlier"
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar_url} />}
                  title={item.name}
                  description={item.description}
                />
                <div className="messagelist-time">{item.time}</div>
                <Icon type="delete" className="messagelist-delete"/>
                <div className="messagelist-list-bg"></div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}