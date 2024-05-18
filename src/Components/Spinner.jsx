// src/components/Spinner.js
import React from 'react';

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 border-t-orange-500 animate-spin"></div>
        </div>
    );
}

export default Spinner;
