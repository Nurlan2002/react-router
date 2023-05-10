import React from 'react'
import { Card, Col,  Row } from 'antd';
// const style = {
//   background: '#0092ff',
//   padding: '8px 0',
// };

const Employees = () => {
  return (
    <>
    
    <Row gutter={16}>
      <Col className="gutter-row" span={6} xs={24} sm={24} md={6} lg={6}>
      <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
      </Col>
      <Col className="gutter-row" span={6}xs={24} sm={24} md={12} lg={6}>
      <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
      </Col>
      <Col className="gutter-row" span={6}xs={24} sm={24} md={12} lg={6}>
      <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
      </Col>
      <Col className="gutter-row" span={6}xs={24} sm={24} md={12} lg={6}>
      <Card
    title="Card title"
    bordered={false}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
      </Col>
    </Row>
    
   
    
      
  </>
);
  
}

export default Employees
