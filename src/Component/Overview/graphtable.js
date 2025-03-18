import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const Graphtable = ({ sectors, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Sector</th>
            <th className="p-4 text-left">Cost (in billions)</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sectors.map((sector) => (
            <tr key={sector.id} className="border-b">
              <td className="p-4">{sector.sector}</td>
              <td className="p-4">{sector.cost}</td>
              <td className="p-4 flex gap-2">
                <button
                  onClick={() => onEdit(sector)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(sector.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Graphtable;