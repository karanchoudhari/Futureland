import React, { useState, useEffect } from 'react';

const FiltBox = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [company, setCompany] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const allSuggestions = ['Site Inspection', 'Equipment Check', 'Fire Safety', 'Structural Audit', 'Electrical Inspection', 'Plumbing Check'];

  useEffect(() => {
    setSuggestions(allSuggestions);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ search, type, company });
  };

  const handleReset = () => {
    setSearch('');
    setType('');
    setCompany('');
    onFilter({ search: '', type: '', company: '' });
  };

  const filteredSuggestions = (suggestions || []).filter((sug) =>
    sug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-2 p-4 bg-gray-100 rounded mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by Inspection Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-48"
        />
        {search && filteredSuggestions.length > 0 && (
          <ul className="absolute bg-white border rounded mt-1 max-h-32 overflow-y-auto w-48 z-10">
            {filteredSuggestions.map((sug, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => setSearch(sug)}
              >
                {sug}
              </li>
            ))}
          </ul>
        )}
      </div>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded w-48"
      >
        <option value="">All Types</option>
        <option value="Safety">Safety</option>
        <option value="Maintenance">Maintenance</option>
        <option value="Audit">Audit</option>
      </select>
      <input
        type="text"
        placeholder="Filter by Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="border p-2 rounded w-48"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Apply Filter
      </button>
      <button
        type="button"
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default FiltBox;
