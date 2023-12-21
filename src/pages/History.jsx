import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getToken, privateAxios } from '../api/axios';
import { Space, Table, Tag } from 'antd';
export default function History() {
  const [tours, setTours] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchUserTours = async () => {
    const res = await privateAxios.get('tours/my-tours');
    setTours(
      res.data.tours.map((row) => ({
        Name: row.name,
        Address: row.startLocation.address,
        Price: row.price,
        startDate: new Date(row.startDates[0]).toLocaleDateString(),
      }))
    );
    setloading(false);
  };
  useEffect(() => {
    getToken().then(() => {
      fetchUserTours();
    });
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      width: 150,
    },
    {
      title: 'Price',
      dataIndex: 'Price',
      width: 150,
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      width: 150,
    },
  ];

  return (
    <div className='w-[70vw] min-h-[400px] bg-white m-auto mt-5 p-6'>
      <div className='flex justify-between items-center'>
        <div>
          {loading ? (
            <Skeleton />
          ) : (
            <Table
              columns={columns}
              dataSource={tours}
              pagination={false}
              scroll={{ y: 240 }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
