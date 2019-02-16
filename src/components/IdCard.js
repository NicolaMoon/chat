import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Ava from './Ava';
import '../css/IdCard.css';

export default class IdCard extends Component {
  render() {
    return (
      <div className="idcard-wrapper">
        <Row>
          <Col span={3}>
            <Ava top={25} left={12} />
          </Col>
          <Col span={21}>
            <p className="idcard-name">Nicola 杨</p>
            <div style={{ display: "inline-block" }}>
              <p className="idcard-description">ENDING OF THE WORLD BEGINS WITH A NEW LIFE!</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}