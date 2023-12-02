import React, { useEffect, useState } from 'react';
import TourCard from '../components/TourCard';
import { Col, Row } from 'antd';
import axios from '../api/axios';
export default function Overview() {
  const [tours, setTours] = useState([]);
  const fetchTours = async () => {
    const res = await axios.get('tours');
    setTours(res.data.data.doc);
    console.log(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <div style={{ marginTop: '1rem', padding: '0 50px' }}>
      <Row gutter={[72, 32]}>
        {tours.map((tour) => (
          <Col key={tour._id} xs={24} md={8}>
            <TourCard tour={tour} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
