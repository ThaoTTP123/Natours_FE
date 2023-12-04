import { useEffect, useState } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import axios, { privateAxios } from '../api/axios';
import { Avatar, Button, Col, Rate, Row } from 'antd';
import TourMap from '../components/Map';
import { useSelector } from 'react-redux';
const OverviewBox = ({ icon, name, value }) => (
  <div
    style={{
      display: 'flex',
      gap: '1.4rem',
      alignItems: 'center',
    }}
  >
    <div>{icon}</div>
    <div
      style={{
        textTransform: 'uppercase',
        fontSize: '0.8rem',
        fontWeight: '700',
        color: '#777',
      }}
    >
      {name}
    </div>
    <div style={{ fontSize: '0.8rem', fontWeight: '500', color: '#999' }}>
      {value}
    </div>
  </div>
);
const ReviewCard = ({ review }) => {
  return (
    <Row
      style={{
        width: '300px',
        height: '250px',
        backgroundColor: '#fff',
        padding: '1rem',
        scrollSnapAlign: 'center',
        borderRadius: '5px',
        boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.15)',
        WebkitBoxShadow: '0 1.5rem 4rem rgba(0, 0, 0, 0.15)',
      }}
    >
      <Col span={24}>
        <Row
          gutter={50}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Avatar
            src={`img/users/${review.user.photo}`}
            size={64}
            style={{ marginRight: '1rem' }}
          />
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#777',
            }}
          >
            {review.user.name}
          </p>
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <p
            style={{
              fontSize: '0.8rem',
              marginBottom: '2rem',
              fontStyle: 'italic',
              fontWeight: 400,
              color: '#999',
            }}
          >
            {review.review}
          </p>
        </Row>
      </Col>
      <Col span={24}>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
          <Rate disabled defaultValue={review.rating} />
        </Row>
      </Col>
    </Row>
  );
};
export default function TourDetails() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const fetchTour = async () => {
    const res = await axios.get(`tours/${id}`);
    setTour(res.data.doc);
  };
  useEffect(() => {
    fetchTour();
  }, []);
  return (
    <>
      {/* Banner Section */}
      <Row
        style={{
          position: 'relative',
          height: '30rem',
        }}
      >
        <div
          style={{
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
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '35%',
            WebkitTransform: 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: 300,
            fontSize: '5rem',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span
            style={{
              backgroundImage:
                'linear-gradient(to right bottom, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85))',
              padding: '0.5rem 1rem',
            }}
          >
            {tour?.name}
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '15%',
            WebkitTransform: 'translate(-50%, -50%)',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: '5rem',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='1.2rem'
                  viewBox='0 0 384 512'
                  fill='#fff'
                >
                  <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
                </svg>
              </div>
              <div>{tour?.startLocation.description}</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='1.2rem'
                  viewBox='0 0 512 512'
                  fill='#fff'
                >
                  <path d='M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z' />
                </svg>
              </div>
              <div>{new Date(tour?.startDates[0]).toLocaleDateString()}</div>
            </div>
          </Row>
        </div>
      </Row>
      {/* Over View Section */}
      <Row>
        {/* Quick Fact Section */}
        <Col
          span={12}
          style={{
            display: 'flex',
            backgroundColor: '#ebebeb',
            flexDirection: 'column',
            gap: '2rem',
            padding: '5rem 0 10rem 0',
          }}
        >
          <div
            style={{
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}
          >
            <div
              style={{
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(to right bottom, #7dd56f, #28b487)',
                WebkitBackgroundClip: 'text',
                backgroundColor: '',
                margin: '1rem 0',
              }}
            >
              Quick facts
            </div>
            <OverviewBox
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  width='25'
                  viewBox='0 0 448 512'
                  fill='#55c57a'
                >
                  <path d='M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z' />
                </svg>
              }
              name={'Next date'}
              value={
                /* {tour?.startDates.map((el) => {
                  if (Date.now() < new Date(el))
                    return new Date(el).toLocaleDateString();
                })} */
                new Date(tour?.startDates[0]).toLocaleString('en', {
                  month: 'long',
                  year: 'numeric',
                })
              }
            />
            <OverviewBox
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  width='22.5'
                  fill='#55c57a'
                  viewBox='0 0 576 512'
                >
                  <path d='M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z' />
                </svg>
              }
              name={'Difficulty'}
              value={tour?.difficulty}
            />
            <OverviewBox
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  width='25'
                  viewBox='0 0 448 512'
                  fill='#55c57a'
                >
                  <path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z' />
                </svg>
              }
              name={'Participants'}
              value={tour?.maxGroupSize + ' ' + 'People'}
            />
            <OverviewBox
              icon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20'
                  width='25'
                  viewBox='0 0 576 512'
                  fill='#55c57a'
                >
                  <path d='M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z' />
                </svg>
              }
              name={'Rating'}
              value={tour?.ratingsAverage + '/5'}
            />
          </div>
          <div
            style={{
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.8rem',
            }}
          >
            <div
              style={{
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(to right bottom, #7dd56f, #28b487)',
                WebkitBackgroundClip: 'text',
                backgroundColor: '',
                margin: '1rem 0',
              }}
            >
              Your Tour Guides
            </div>
            {tour?.guides.map((guide) => (
              <OverviewBox
                key={guide._id}
                icon={<Avatar src={`img/users/${guide.photo}`} size={64} />}
                name={guide.role === 'lead-guide' ? 'Lead guide' : 'guide'}
                value={guide.name}
              />
            ))}
          </div>
        </Col>
        {/* About The Tour Section */}
        <Col
          span={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fcfcfc',
            padding: '5rem 0',
          }}
        >
          <div style={{ padding: '0 2rem' }}>
            <div
              style={{
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: 'transparent',
                backgroundImage:
                  'linear-gradient(to right bottom, #7dd56f, #28b487)',
                WebkitBackgroundClip: 'text',
                backgroundColor: '',
                margin: '1rem 0',
                textAlign: 'center',
              }}
            >
              About {tour?.name} tour
            </div>
            <div
              style={{
                lineHeight: '1.8rem',
                fontWeight: '400',
                color: '#777',
                fontStyle: 'italic',
              }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati nihil incidunt earum ducimus saepe natus, repudiandae
                doloremque accusantium quaerat vitae, porro adipisci officiis
                asperiores ipsa! Quaerat repellat sint quod impedit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
                animi illum sapiente, quibusdam iusto nisi porro sequi nostrum,
                temporibus nobis inventore numquam! Dolores dolore dignissimos,
                aperiam pariatur tenetur molestiae voluptas?
              </p>
            </div>
          </div>
        </Col>
      </Row>
      {/* Picture Preview Section */}
      <Row
        style={{
          display: ['-webkit-box', '-ms-flexbox', 'flex'],
          marginTop: 'calc(0px - 9vw)',
          position: 'relative',
          zIndex: 1000,
        }}
      >
        {tour?.images.map((pic, i) => (
          <Col xs={24} md={8} key={i}>
            <img
              src={`img/tours/${pic}`}
              style={{
                width: '100%',
                height: '110%',
                paddingTop: '15%',
                paddingBottom: '15%',
              }}
            />
          </Col>
        ))}
      </Row>
      {/* Map Section */}
      {/* <Row
        style={{
          position: 'relative',
          height: '50rem',
          marginTop: '-9vw',
        }}
      >
        {tour?.locations && <TourMap locations={tour.locations} />}
      </Row> */}
      {/* Reviews List */}
      <Row
        style={{
          display: ['-webkit-box', '-ms-flexbox', 'flex'],
          position: 'relative',
          marginTop: '-9vw',
          background: 'linear-gradient(to right bottom, #7dd56f, #28b487)',
          padding: '3rem 0',
        }}
      >
        <div
          style={{
            padding: '5rem 2rem',
            overflowX: 'scroll',
            display: 'grid',
            gridAutoFlow: 'column',
            gap: '6rem',
            scrollSnapType: 'x mandatory',
            msScrollSnapType: 'mandatory',
            scrollSnapAlign: 'center',
          }}
        >
          {tour?.reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>
      </Row>
      {/* Booking Inviting */}
      <Row
        style={{
          marginTop: '-9vw',
          padding: '3rem',
          paddingBottom: '11rem',
          paddingTop: 'calc(10rem + 9vw)',
          backgroundColor: '#f7f7f7',
        }}
      >
        <div
          style={{
            position: 'relative',
            maxWidth: '105rem',
            minWidth: '70rem',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: '#fff',
            padding: '6rem 5rem ',
            borderRadius: '2rem',
            WebkitBoxShadow: '0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15)',
            boxShadow: '0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              transform: 'translate(-15%, -30%)',
            }}
          >
            <Avatar.Group size={150}>
              <Avatar src='img/logo-green-round.png' style={{ zIndex: 3 }} />
              <Avatar
                src={`img/tours/${tour?.images[0]}`}
                style={{
                  marginLeft: '-75px',
                  zIndex: 2,
                  boxShadow: '1rem 0.5rem 3rem rgba(0, 0, 0, 0.15)',
                }}
              />
              <Avatar
                src={`img/tours/${tour?.images[1]}`}
                style={{
                  marginLeft: '-75px',
                  zIndex: 1,
                  boxShadow: '1rem 0.5rem 3rem rgba(0, 0, 0, 0.15)',
                }}
              />
            </Avatar.Group>
          </div>
          <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Col
              span={19}
              style={{
                paddingLeft: '15rem',
              }}
            >
              <h2
                style={{
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  backgroundImage:
                    'linear-gradient(to right, #7dd56f, #28b487)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  letterSpacing: '0.1rem',
                  lineHeight: 1.3,
                  display: 'inline-block',
                }}
              >
                What are you waiting for?
              </h2>
              <div style={{ fontWeight: 400, color: '#999' }}>
                {tour?.duration} days. 1 adventure. Infinite memories. Make it
                yours today!
              </div>
            </Col>
            <Col span={5}>
              <Button
                type='primary'
                shape='round'
                style={{
                  backgroundColor: '#55c57a',
                  color: '#fff',
                  width: '-webkit-fill-available',
                  textTransform: 'uppercase',
                  fontSize: '1rem',
                  fontWeight: '400',
                  height: '100%',
                  padding: '8px 0',
                }}
                onClick={async () => {
                  if (user) {
                    try {
                      const res = await privateAxios.get(
                        `bookings/checkout-session/${tour._id}`
                      );
                      window.location.href = res.data.session.url;
                    } catch (error) {
                      // if (error.response.status === 401) navigate('/login');
                      console.log(error);
                    }
                  }
                  navigate(`/login?booking`, { state: { tourId: tour._id } });
                }}
              >
                {user ? 'Book tour now!' : 'Login for booking!'}
              </Button>
            </Col>
          </Row>
        </div>
      </Row>
    </>
  );
}
