import React from 'react';

export default function AppButton({ children, handleOnclick, styles }) {
  return (
    <button
      style={{
        ...styles,
      }}
      onClick={handleOnclick}
      className='bg-green text-white hover:bg-green-500 transition-colors font-light text-[1rem] uppercase w-full h-full rounded-full'
    >
      {children}
    </button>
  );
}
