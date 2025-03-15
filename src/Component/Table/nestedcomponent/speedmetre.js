import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const Speedmetre = () => {
  return (
    <div style={{ height: '25vh', color: 'white' }} className="bg-gray-800 p-2 rounded-lg shadow-lg flex justify-center">
    <ReactSpeedometer
      maxValue={200}
      value={150}
      needleColor="red"
      startColor="green"
      endColor="red"
      segments={10}
      needleTransitionDuration={2000}
      currentValueText="PROJECT (past 30 days)"
      textColor="white" // This will change the text color to white
    />
  </div>
  
  );
};

export default Speedmetre;
