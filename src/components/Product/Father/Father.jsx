import React from 'react';
import Borther from '../Borther/Borther';

const Father = () => {
    return (
        <div>
            <div className='border-2 border-green-500 p-4 rounded'>
            <h1 className='text-3xl'>Father Component</h1>
            <h3 className='text-2xl'>Taka: </h3>
            <Borther></Borther>
            </div>
            
        </div>
    );
};

export default Father;