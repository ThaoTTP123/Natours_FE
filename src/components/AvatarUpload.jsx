import React, { useState } from 'react';
import { message, Upload } from 'antd';
import { privateAxios } from '../api/axios';
// const BASE_URL='http://localhost:3000/img/users/'
const BASE_URL = 'https://natours-api-com.onrender.com//img/users/';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess('ok');
  }, 0);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const AvatarUpload = ({ photo }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(`${BASE_URL}${photo}`);
  const handleChange = async (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      const formData = new FormData();
      formData.append('photo', info.file.originFileObj);
      const res = await privateAxios.patch('users/update-me', formData);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {/* {loading ? <LoadingOutlined /> : <PlusOutlined />} */}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        name='avatar'
        listType='picture-circle'
        className='avatar-uploader'
        showUploadList={false}
        customRequest={dummyRequest}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='avatar'
            style={{
              width: '100%',
              borderRadius: '50%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};
export default AvatarUpload;
