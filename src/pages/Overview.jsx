import React, { useEffect, useState } from 'react';
import TourCard from '../components/TourCard';
import { Col, Pagination, Row } from 'antd';
import axios from '../api/axios';
export default function Overview() {
  const [tours, setTours] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const fetchTours = async () => {
    const res = await axios.get(`tours?page=${page}&limit=6`);
    setTours(res.data.doc);
    const total = Math.ceil(res.data.total / 5) * 10;
    setTotalPages(total);
  };
  useEffect(() => {
    fetchTours();
  }, [page]);
  return (
    <div style={{ marginTop: '1rem', padding: '0 50px' }}>
      <Row gutter={[72, 32]}>
        {tours.map((tour) => (
          <Col key={tour._id} xs={24} md={8}>
            <TourCard tour={tour} />
          </Col>
        ))}
      </Row>
      <Row justify={'center'} style={{ margin: '2rem 0' }}>
        <Pagination
          defaultCurrent={1}
          total={totalPages}
          onChange={(num) => {
            setPage(num);
          }}
          current={page}
        />
      </Row>
    </div>
  );
}
