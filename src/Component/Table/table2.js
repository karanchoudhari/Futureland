import { useState } from "react";

const sectorsData = [
  { name: "Railway", count: 5, details: [
    { project: "Express Line" },
    { project: "Metro Expansion" },
    { project: "Freight Corridor" },
    { project: "Bullet Train" },
    { project: "City Rail" }
  ]},
  { name: "Highways", count: 7, details: [
    { project: "Golden Highway" },
    { project: "Express Route" },
    { project: "Ring Road" },
    { project: "High Speed Highway" },
    { project: "Tunnel Pass" }
  ]}
];

const statesData = [
  { name: "Rajasthan", count: 5, details: [
    { project: "Solar Park" },
    { project: "Smart City" },
    { project: "Wind Farm" },
    { project: "Desert Road" },
    { project: "Water Conservation" }
  ]},
  { name: "Mumbai", count: 5, details: [
    { project: "Solar Park" },
    { project: "Smart City" },
    { project: "Wind Farm" },
    { project: "Desert Road" },
    { project: "Water Conservation" }
  ]},
];

const projectsData = [
  { name: "Mega Dam", count: 3, details: [
    { project: "Blue River Dam" },
    { project: "Hydro Power Plant" },
    { project: "Irrigation Project" }
  ]}
];

function CollapsibleCard({ title, data }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg" style={{width:'100%'}}>
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            className="w-full text-left p-3 bg-gray-200 rounded-lg font-medium"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.name} - {item.count}
          </button>
          <div
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
              overflowX: 'scroll',
              transition: "max-height 0.5s ease-in-out, padding 0.3s ease-in-out",
              background: "#f3f4f6",
              padding: openIndex === index ? "12px" : "0px",
              borderRadius: "8px",
              marginTop: "8px",
              
            }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Project Name</th>
                </tr>
              </thead>
              <tbody>
                {item.details.map((detail, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2">{detail.project}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="container-fluid overflow-x-auto bg-gray-700 min-h-screen p-8 flex flex-col lg:flex-row gap-5">
   <div style={{width:'50%',height:'500px'}}>
       {/* Left Section */}
       <div className="w-full lg:w-2/3 flex flex-col gap-5 overflow-x-auto">
        <CollapsibleCard  title="Sectors" data={sectorsData} />
        <CollapsibleCard title="States" data={statesData} />
        <CollapsibleCard title="Biggest Projects" data={projectsData} />
      </div>
   </div>

      {/* Right Section - Map */}
      <div className="w-full lg:w-2/3 bg-gray-800 p-6 rounded-2xl shadow-lg flex items-center justify-center h-[600px] lg:h-[800px]">
        <h2 className="text-xl font-semibold text-white">Active Users Map</h2>
      </div>
    </div>
  );
}
