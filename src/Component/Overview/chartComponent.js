// import React, { useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
// import { getChartData } from '../../FeatureRedux/chartReducer/donatchartget';
// import { useDispatch, useSelector } from 'react-redux';

// // Register Chart.js elements
// ChartJS.register(ArcElement, Tooltip, Legend, Title);

// const ChartComponent = () => {
//   const dispatch = useDispatch();

//   const chartData = useSelector((state) => state.getChartData);
//   console.log("this is chart data" , chartData)

//   // console.log("we are in comopnnent Chart component ")

//   useEffect(() => {
//     dispatch(getChartData());
//     console.log("dispatched the api ")
//   }, [dispatch ]);



//   console.log("Fetched API Data:", chartData);

//   // Extract API data (handling case when it's undefined)
//   const sectors = chartData.data.sectors || {};
//   const monetaryRange = chartData.data.MonetaryRange || {};

//   // Convert API data to chart format
//   const sectorsData = {
//     labels: Object.keys(sectors),
//     datasets: [
//       {
//         data: Object.values(sectors),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//       },
//     ],
//   };

//   const moneyData = {
//     labels: Object.keys(monetaryRange),
//     datasets: [
//       {
//         data: Object.values(monetaryRange),
//         backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'],
//         hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'],
//       },
//     ],
//   };

//   // Chart Options
//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { position: 'bottom' },
//       title: { display: true, text: 'Doughnut Chart' },
//     },
//   };

//   return (
//     <div className="flex flex-wrap gap-16 justify-center p-10">
//       {/* Sectors Pie Chart */}
//       <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
//         <h2 className="text-center mb-4 text-2xl font-semibold">Sectors Data</h2>
//         {Object.keys(sectors).length > 0 && chartData.Loading!=false  && chartData.isSuccess!=false  ? (
//           <Doughnut data={sectorsData} options={options} />
//         ) : (
//           <p className="text-center">Loading...</p>
//         )}
//       </div>

//       {/* Monetary Ranges Pie Chart */}
//       <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
//         <h2 className="text-center mb-4 text-2xl font-semibold">Monetary Ranges</h2>
//         {Object.keys(monetaryRange).length > 0 && chartData.Loading!=false  && chartData.isSuccess!=false  ? (
//           <Doughnut data={moneyData} options={options} />
//         ) : (
//           <p className="text-center">Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChartComponent;


import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { getChartData } from '../../FeatureRedux/chartReducer/donatchartget';
import { useDispatch, useSelector } from 'react-redux';

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ChartComponent = () => {
  const dispatch = useDispatch();

  // Redux state
  const { data, loading, error, isSuccess } = useSelector((state) => state.getChartData);

  useEffect(() => {
    dispatch(getChartData());
  }, [dispatch]);

  // console.log(`this is the data ${JSON.stringify(data , null , " ")}`);

  // Handle API data safely
  const sectors = data?.data.sectors || {};
  const monetaryRange = data?.data.MonetaryRange || {};

  // Prepare chart data
  const sectorsData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const moneyData = {
    labels: Object.keys(monetaryRange),
    datasets: [
      {
        data: Object.values(monetaryRange),
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Doughnut Chart' },
    },
  };

  return (
    <div className="flex flex-wrap gap-16 justify-center p-10">
      {/* Sectors Pie Chart */}
      <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold">Sectors Data</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : isSuccess && Object.keys(sectors).length > 0 ? (
          <Doughnut data={sectorsData} options={options} />
        ) : (
          <p className="text-center">No Data Available</p>
        )}
      </div>

      {/* Monetary Ranges Pie Chart */}
      <div className="w-96 h-96 bg-white shadow-lg p-10 rounded-lg">
        <h2 className="text-center mb-4 text-2xl font-semibold">Monetary Ranges</h2>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : isSuccess && Object.keys(monetaryRange).length > 0 ? (
          <Doughnut data={moneyData} options={options} />
        ) : (
          <p className="text-center">No Data Available</p>
        )}
      </div>
    </div>
  );
};

export default ChartComponent;
