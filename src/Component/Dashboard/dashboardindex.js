// import React from 'react';
// import Table3 from '../Table/table3';
// import Mapbox from '../Map/mapbox';
// import Blog from '../blog';
// import Graph from '../Overview/graph';

// const DashboardIndex = () => {
//   return (
//     <div className="container-fluid bg-gray-900 py-2" style={{ 
//       display: 'flex', 
//       flexDirection: 'row', 
//       justifyContent: 'space-between', 
//       height: '100vh', 
//       padding: '20px', 
//       gap: '20px',
//       alignContent: 'center',
//       overflow: 'hidden'  // Prevents page overflow
//     }}>
      
//       {/* Left Side - Table3 */}
//       <div style={{ width: '28%', minWidth: '300px', maxWidth: '400px' }}>
//         <Table3 />
//       </div>

//       {/* Right Side - Mapbox & Blog */}
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         justifyContent: 'space-between', 
//         width: '72%', 
//         gap: '20px', 
//         overflow: 'hidden' // Prevents right-side overflow
//       }}>
        
//         {/* Mapbox (Larger) */}
//         <div style={{ flex: 1.5, minHeight: '60vh', borderRadius: '15px', overflow: 'hidden' }}>
//           <Mapbox />
//         </div>

//         {/* Graph & Blog Section with Hidden Scrollbar */}
//         <div style={{ 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center', 
//           width: '100%', 
//           overflow: 'hidden' 
//         }}>
          
//           {/* Scrollable Graph */}
//           <div style={{ 
//             flex: 1, 
//             minWidth: '40%', 
//             maxHeight: '35vh', 
//             overflowY: 'auto',
//             scrollbarWidth: 'none' // Hides scrollbar in Firefox
//           }} className="hide-scroll">
//             <Graph />
//           </div>
          
//           {/* Scrollable Blog */}
//           <div style={{ 
//             flex: 1, 
//             minWidth: '40%', 
//             maxHeight: '35vh', 
//             overflowY: 'auto',
//             display: 'flex', 
//             justifyContent: 'flex-end',
//             scrollbarWidth: 'none' // Hides scrollbar in Firefox
//           }} className="hide-scroll">
//             <Blog />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardIndex;




// testing 
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Table3 from '../Table/table3';
import Mapbox from '../Map/mapbox';
import Blog from '../blog';
import Graph from '../Overview/graph';
import Locationselect from '../Table/locationselect';

const DashboardIndex = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration in milliseconds
      offset: 100,     // Offset (in px) from the top before animation starts
      easing: 'ease-in-out', // Easing option
      once: false       // Ensures animations run only once
    });
  }, []);

  return (
    <div className="container-fluid bg-gray-900 py-2" style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      height: '100vh', 
      padding: '20px', 
      gap: '20px',
      alignContent: 'center',
      overflow: 'hidden'  // Prevents page overflow
    }}>
      
      {/* Left Side - Table3 */}
      <div data-aos="fade-right" style={{ width: '28%', minWidth: '300px', maxWidth: '400px' }}>
        <Table3 />
      </div>

      {/* Right Side - Mapbox & Blog */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        width: '72%', 
        gap: '20px', 
        overflow: 'hidden' 
      }}>
        
        {/* Mapbox (Larger) */}
        <div  data-aos="zoom-in-left" style={{ flex: 1.5, minHeight: '60vh', borderRadius: '15px', overflow: 'hidden' }}>
          <Mapbox />
        </div>

        {/* Graph & Blog Section */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          width: '100%', 
          overflow: 'hidden' 
        }}>
          
          {/* Scrollable Graph */}
          <div data-aos="zoom-in" style={{ 
            flex: 1, 
            minWidth: '58%', 
            maxHeight: '35vh', 
            overflowY: 'auto',
            scrollbarWidth: 'none'
          }} className="hide-scroll">
            {/* <Graph /> */}
            <Locationselect/>
          </div>
          
          {/* Scrollable Blog */}
          <div data-aos="zoom-in" style={{ 
            flex: 1, 
            minWidth: '30%', 
            maxHeight: '35vh', 
            overflowY: 'auto', 
            display: 'flex', 
            justifyContent: 'flex-end',
            scrollbarWidth: 'none'
          }} className="hide-scroll">
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;


// testing 




// last edit 
// import React from 'react';
// import Table3 from '../Table/table3';
// import Mapbox from '../Map/mapbox';
// import Blog from '../blog';
// import Graph from '../Overview/graph';

// const DashboardIndex = () => {
//   return (
//     <div className="container-fluid bg-gray-900 py-2" style={{ 
//       display: 'flex', 
//       flexDirection: 'row', 
//       justifyContent: 'space-between', 
//       height: '100vh', 
//       padding: '20px', 
//       gap: '20px' ,
//       alignContent:'center'
//     }}>
      
//       {/* Left Side - Table3 */}
//       <div style={{ width: '30%', minWidth: '300px' }}>
//         <Table3 />
//       </div>

//       {/* Right Side - Mapbox & Blog */}
//       <div style={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         justifyContent: 'space-between', 
//         width: '70%', 
//         gap: '20px' 
//       }}>
//         {/* Mapbox takes all the available space */}
//         <div style={{ flex: 1 ,}}>
//           <Mapbox />
//         </div>

//         {/* Blog positioned at the bottom-right end */}
//         <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end',alignItems:'center' }}>
//           <Graph/>
//           <Blog />
//         </div>
//       </div>

//     </div>
//   );
// };

// export default DashboardIndex;



// import React from 'react'
// import Table from '../Table/table'
// import Mapbox from '../Map/mapbox'
// import './mainrespon.css'
// import Table3 from '../Table/table3'
// import Blog from '../blog'


// const dashboardindex = () => {
//   return (

//     <>
//       <div className='container'>
//         {/* <div style={{ width: '100%', height: '550px', minHeight: '550px', background: 'black' }} id='mapresponsive'>


// </div> */}

//         <div style={{ height: '100%', overflowY: 'scroll' }}>

//           <Table3 />
//         </div>

//      <div style={{display:'flex',flexDirection:'column'}}>
//      <Mapbox />
//      <Blog />
//      </div>
//       </div>




//     </>
//   )
// }

// export default dashboardindex
