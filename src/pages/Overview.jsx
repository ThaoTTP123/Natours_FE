import React from 'react';
import TourCard from '../components/TourCard';
import { Col, Row } from 'antd';

export default function Overview() {
  return (
    <div style={{ marginTop: '1rem' }}>
      <Row gutter={12}>
        <Col xs={24} md={6}>
          <TourCard />
        </Col>
        <Col xs={24} md={6}>
          <TourCard />
        </Col>
        <Col xs={24} md={6}>
          <TourCard />
        </Col>
        <Col xs={24} md={6}>
          <TourCard />
        </Col>
      </Row>
    </div>
  );
}
