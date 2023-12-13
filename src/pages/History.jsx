import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { privateAxios } from '../api/axios';

export default function History() {
  // const { user, isSuccess } = useSelector((state) => state.auth);
  // if (!isSuccess) return <Skeleton />;
  const [tours, setTours] = useState([]);
  const fetchUserTours = async () => {
    const res = await privateAxios.get('tours/my-tours');
    // setTours(res.data.doc);
    console.log(res);
  };
  useEffect(() => {
    fetchUserTours();
  });
  return (
    <div className='w-[70vw] min-h-[400px] bg-white m-auto mt-5 p-6'>
      <div className='flex justify-between items-center'></div>
    </div>
  );
}
