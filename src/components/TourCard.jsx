import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TourCard({ tour }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        borderRadius: '3px',
        overflow: 'hidden',
        boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: '0.3s all',
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          position: 'relative',
          clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 98%)',
          height: '16rem',
        }}
      >
        <div
          style={{
            clipPath: 'polygon(0 0, 100% 0%, 100% 83%, 0% 98%)',
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage:
              'linear-gradient(to right bottom, #7dd56f, #28b487)',
            opacity: 0.7,
          }}
        ></div>
        <img
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          src={`/img/tours/${tour?.imageCover}`}
          alt='Tour'
        />
      </div>
      <div
        style={{
          position: 'absolute',
          textAlign: 'right',
          margin: '0 auto',
          bottom: '18rem',
          right: '3rem',
          color: '#fff',
          textTransform: 'uppercase',
          fontWeight: 300,
          fontSize: '2rem',
          width: '50%',
          zIndex: 10,
        }}
      >
        <span
          style={{
            backgroundImage:
              'linear-gradient(to right bottom, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85))',
            padding: '0.5rem 1rem',
          }}
        >
          {tour.name}
        </span>
      </div>
      <div style={{ padding: '0.5rem 1rem 0.5rem 1rem' }}>
        <div
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: '#777',
          }}
        >
          {tour.difficulty.charAt(0).toUpperCase() +
            tour.difficulty.slice(1) +
            ' ' +
            tour.duration +
            '-Day tour'}
        </div>
        <div
          style={{
            fontStyle: 'italic',
            fontWeight: 'lighter',
            lineHeight: 1.6,
          }}
        >
          {tour.summary}
        </div>
        <Row gutter={20}>
          <Col span={14}>
            <Row gutter={4}>
              <Col span={4}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='1.2rem'
                  viewBox='0 0 384 512'
                  fill='#55c57a'
                >
                  <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
                </svg>
              </Col>
              <Col span={20}>{tour.startLocation.description}</Col>
            </Row>
          </Col>
          <Col span={10}>
            <Row gutter={4}>
              <Col span={6}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='1.2rem'
                  viewBox='0 0 448 512'
                  fill='#55c57a'
                >
                  <path d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' />
                </svg>
              </Col>
              <Col span={18}>
                {new Date(tour.startDates[0]).toLocaleDateString()}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={14}>
            <Row gutter={4}>
              <Col span={4}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='1.2rem'
                  viewBox='0 0 448 512'
                  fill='#55c57a'
                >
                  <path d='M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z' />
                </svg>
              </Col>
              <Col span={20}>{tour.locations.length} stop</Col>
            </Row>
          </Col>
          <Col span={10}>
            <Row gutter={4}>
              <Col span={6}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='1.2rem'
                  viewBox='0 0 448 512'
                  fill='#55c57a'
                >
                  <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
                </svg>
              </Col>
              <Col span={18}>{tour.maxGroupSize}</Col>
            </Row>
          </Col>
        </Row>
      </div>
      <Row
        gutter={20}
        style={{
          padding: '2.5rem 1rem',
          backgroundColor: '#f7f7f7',
          justifyContent: 'space-between',
          color: '#999',
        }}
      >
        <Col
          span={12}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Row>
            <span style={{ fontWeight: 700 }}>${tour?.price}</span>&nbsp;
            <span>per person</span>
          </Row>
          <Row>
            <span style={{ fontWeight: 700 }}>{tour.ratingsAverage}</span>&nbsp;
            <span>rating({tour?.ratingsQuantity})</span>
          </Row>
        </Col>
        <Col span={12}>
          <Button
            shape='round'
            type='primary'
            style={{
              backgroundColor: '#55c57a',
              height: '100%',
              width: '100%',
              fontSize: '1rem',
              fontWeight: 'lighter',
            }}
            onClick={() => navigate(tour._id)}
          >
            Details
          </Button>
        </Col>
      </Row>
    </div>
  );
}
