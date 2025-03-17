// import React from 'react';
// import ReactSpeedometer from 'react-d3-speedometer';


// const Speedmetre = () => {
   
  

//   return (
//     <div style={{ height: '25vh', color: 'white' }} className="bg-gray-800 p-2 rounded-lg shadow-lg flex justify-center">
//     <ReactSpeedometer
//       maxValue={200}
//       value={150}
//       needleColor="red"
//       startColor="green"
//       endColor="red"
//       segments={10}
//       needleTransitionDuration={2000}
//       currentValueText="PROJECT (past 30 days)"
//       textColor="white" // This will change the text color to white
//     />
//   </div>
  
//   );
// };

// export default Speedmetre;


import React, { useEffect, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import axiosInstance from '../../axiosInstance';

const Speedmetre = () => {
  const [selectedDays, setSelectedDays] = useState(30);  
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function findCount() {
      try {
        const response = await axiosInstance.get('/project/getspeedometerData', {
          params: { days: selectedDays },
          headers: {
            'Content-Type': 'application/json',
            "x-company-id": "67ce66294f28f85e4ff91e2c",
          },
        });

        // Ensure the count is set correctly
        const dataCount = response.data?.data ?? 0;
        setCount(Number.isFinite(dataCount) ? dataCount : 0);

      } catch (error) {
        console.error("Error fetching data:", error);
        setCount(0); // Set count to 0 in case of error
      }
    }

    findCount();
  }, [selectedDays]);

  const daysOptions = [2, 10, 20, 30, 40, 50, 60];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-white">
      {/* Dropdown for selecting days */}
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium">Select Days:</label>
        <select 
          className="p-2 rounded text-black"
          value={selectedDays}
          onChange={(e) => setSelectedDays(Number(e.target.value))}
        >
          {daysOptions.map((days) => (
            <option key={days} value={days}>{days} Days</option>
          ))}
        </select>
      </div>

      {/* Speedometer Display */}
      <div className="flex justify-center">
        <ReactSpeedometer
          maxValue={200}
          value={count}
          needleColor="red"
          startColor="green"
          endColor="red"
          segments={10}
          needleTransitionDuration={2000}
          currentValueText={`PROJECT (past ${selectedDays} days)`}
          textColor="white"
        />
      </div>
    </div>
  );
};

export default Speedmetre;

