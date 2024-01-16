import React from 'react';

const Uncle = ({money}) => {
    return (
        <div>
        <div className='border-2 border-green-500  p-4 rounded'>
            <h1 className='text-3xl'>Uncle Component</h1>
            <h3 className='text-2xl'>Taka:{money}</h3>
        </div>
        </div>
    );
};

export default Uncle;