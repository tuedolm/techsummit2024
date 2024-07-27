import React from 'react';

const WavePattern = () => {
  return (
    <div className="relative overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-64"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f4f6"
          fillOpacity="1"
          d="M0,96L48,85.3C96,75,192,53,288,69.3C384,85,480,139,576,160C672,181,768,171,864,160C960,149,1056,139,1152,138.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default WavePattern;
