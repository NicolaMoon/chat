import React, { Component } from 'react';
import { List, Avatar, Icon, Input } from 'antd';
import '../css/TalkBox.css';

const { TextArea } = Input;

const my_id = 1;
const mockData = [
  {
    id: 1,
    user_id: 2,
    name: "Moon",
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    message: "Hello World",
    time: "12:30",
  },
  {
    id: 2,
    user_id: 1,
    name: "Nicola",
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    message: "Hello Man",
    time: "12:32",
  },
  {
    id: 3,
    user_id: 2,
    name: "Moon",
    avatar_url: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    message: "The time that my journey takes is long and the way of it long.I came out on the chariot of the first gleam of light, and pursued my voyage through the wildernesses of worlds leaving my track on many a star and planet.",
    time: "12:34",
  },
];

export default class TalkBox extends Component {
  render() {
    return (
      <div className="talkbox-wrapper">
        <div className="talkbox-bg">
          <div className="talkbox-messagebox">
            <div className="bar left"></div>
            <div className="bar top"></div>
            <div className="bar right"></div>
            <div className="bar bottom"></div>
            <div className="talkbox-topbar">
              <List.Item actions={[<Icon type="bars" className="talkbox-bars" />]}>
                <List.Item.Meta
                  avatar={<Avatar size={48} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title="Name"
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            </div>
            <div className="talkbox-messages">
              {mockData.map(item => (
                <div className="talkbox-message" key={item.id}>
                  <Avatar src={item.avatar_url} />
                  <p className="msg-title">
                    {item.name}
                    <span>{item.time}</span>
                  </p>
                  <p className={`talkbox-msg ${my_id === item.user_id ? "my-word" : ""}`}>{item.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="talkbox-inputbox">
          <TextArea
            placeholder="Input your message here"
            autosize
          />
        </div>
      </div >
    );
  }
}
