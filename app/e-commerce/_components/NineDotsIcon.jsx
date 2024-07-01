// NineDotsIcon.js
import React from 'react';

const NineDotsIcon = () => {
  return (
    <div className="grid grid-cols-3 gap-1 w-6 h-6 ">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div>
      ))}
    </div>
  );
};

export default NineDotsIcon;
