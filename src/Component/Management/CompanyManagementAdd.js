import React, { useState, useEffect, useRef } from 'react';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select'; // Import Select from react-select
import { Plus, Check, X, Edit, Trash } from 'lucide-react'; // Icons from lucide-react

const CompanyManagementAdd = ({ onClose, addCompanyData, editingCompany }) => {
  const [form, setForm] = useState({
    company_name: '',
    company_email: '',
    company_expiry: '',
    password: '',
    permission_location: [], // Ensure this is always an array
  });

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCities, setSelectedCities] = useState([]);
  const [temporarySelections, setTemporarySelections] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // Track which temporary selection is being edited
  const cityDropdownRef = useRef(null);

  // Pre-fill form if editingCompany is provided
  useEffect(() => {
    if (editingCompany) {
      setForm({
        company_name: editingCompany.company_name,
        company_email: editingCompany.company_email,
        company_expiry: editingCompany.company_expiry,
        password: editingCompany.password,
        permission_location: editingCompany.permission_location || [], // Ensure it's an array
      });

      // Pre-fill temporary selections
      setTemporarySelections(editingCompany.permission_location || []);

      // Pre-fill country, state, and cities
      const firstLocation = editingCompany.permission_location?.[0];
      if (firstLocation) {
        const country = Country.getAllCountries().find((c) => c.name === firstLocation.country);
        const state = State.getStatesOfCountry(country?.isoCode).find((s) => s.name === firstLocation.state);

        setSelectedCountry({ value: country?.isoCode, label: country?.name });
        setSelectedState({ value: state?.isoCode, label: state?.name });
        setSelectedCities(firstLocation.cities?.map((city) => ({ value: city, label: city })) || []);
      }
    }
  }, [editingCompany]);

  // console.log(editingCompany,  "ye hai edit company vala data ")

  // Close city dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cityDropdownRef.current && !cityDropdownRef.current.contains(event.target)) {
        setIsCityDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get all countries
  const countries = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  // Get states based on selected country
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  // Get cities based on selected state
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry?.value, selectedState?.value).map((city) => ({
        value: city.name,
        label: city.name,
      }))
    : [];

  // Handle country selection
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedCities([]);
    setError('');
  };

  // Handle state selection
  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCities([]);
    setError('');
  };

  // Handle city selection (add city to selectedCities)
  const handleAddCity = (city) => {
    if (!selectedCities.some((c) => c.value === city.value)) {
      setSelectedCities([...selectedCities, city]);
      setError('');
    }
  };

  // Handle city removal
  const handleRemoveCity = (city) => {
    setSelectedCities(selectedCities.filter((c) => c.value !== city.value));
  };

  // Add or update temporary selection
  const handleAddSelection = () => {
    if (!selectedCountry || !selectedState || selectedCities.length === 0) {
      setError('Please select a country, state, and at least one city.');
      return;
    }

    const newSelection = {
      country: selectedCountry.label,
      state: selectedState.label,
      cities: selectedCities.map((city) => city.label), // Ensure this remains an array
    };

    if (editingIndex !== null) {
      // Update the existing selection if editing
      const updatedSelections = [...temporarySelections];
      updatedSelections[editingIndex] = newSelection;
      setTemporarySelections(updatedSelections);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new selection
      setTemporarySelections([...temporarySelections, newSelection]);
    }

    setForm((prevForm) => ({
      ...prevForm,
      permission_location: temporarySelections,
    }));

    resetFields();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000); // Hide success message after 3 seconds
  };

  // Reset fields after adding to temporary selections
  const resetFields = () => {
    setSelectedCountry(null);
    setSelectedState(null);
    setSelectedCities([]);
    setError('');
  };

  // Handle final submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (temporarySelections.length === 0) {
      setError('Please add at least one location before submitting.');
      return;
    }

    const newCompany = {
      id: editingCompany ? editingCompany.id : Date.now(), // Use existing ID if editing
      ...form,
      permission_location: temporarySelections, // Use the updated temporary selections
    };

    addCompanyData(newCompany); // Add or update company data
    handleReset();
    onClose(); // Close the modal after submission
  };

  // Reset form fields
  const handleReset = () => {
    setForm({
      company_name: '',
      company_email: '',
      company_expiry: '',
      password: '',
      permission_location: [], // Reset to an empty array
    });
    setSelectedCountry(null);
    setSelectedState(null);
    setSelectedCities([]);
    setTemporarySelections([]);
    setError('');
  };

  // Handle edit selection
  const handleEditSelection = (index) => {
    const selection = temporarySelections[index];
    const country = countries.find((c) => c.label === selection.country);
    const state = states.find((s) => s.label === selection.state);

    setSelectedCountry(country);
    setSelectedState(state);
    setSelectedCities(selection.cities.map((city) => ({ value: city, label: city })));
    setEditingIndex(index); // Set the index being edited
  };

  // Handle delete selection
  const handleDeleteSelection = (index) => {
    const updatedSelections = temporarySelections.filter((_, i) => i !== index);
    setTemporarySelections(updatedSelections);
    setForm((prevForm) => ({
      ...prevForm,
      permission_location: updatedSelections,
    }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
        {editingCompany ? 'Edit Company' : 'Add Company'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
        {/* Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Company Name</label>
            <input
              type="text"
              value={form.company_name}
              onChange={(e) => setForm({ ...form, company_name: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
            />
          </div>

          {/* Company Email */}
          <div className="flex flex-col ">
            <label className="text-sm font-semibold mb-1 text-gray-700">Company Email</label>
            <input
              type="email"
              value={form.company_email}
              onChange={(e) => setForm({ ...form, company_email: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company email"
            />
          </div>

          {/* Company Expiry Date */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Company Expiry Date</label>
            <input
              type="date"
              value={form.company_expiry}
              onChange={(e) => setForm({ ...form, company_expiry: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1 text-gray-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>
        </div>

        {/* Location Selection */}
        <div className="space-y-6">
          {/* Country, State, City in Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Country */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-gray-700">Country</label>
              <div className="flex items-center gap-2">
                <Select
                  options={countries}
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  placeholder="Select country..."
                  className="react-select-container flex-1"
                  classNamePrefix="react-select"
                  isClearable
                />
              </div>
            </div>

            {/* State */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-gray-700">State</label>
              <div className="flex items-center gap-2">
                <Select
                  options={states}
                  value={selectedState}
                  onChange={handleStateChange}
                  placeholder="Select state..."
                  className="react-select-container flex-1"
                  classNamePrefix="react-select"
                  isDisabled={!selectedCountry}
                  isClearable
                />
              </div>
            </div>

            {/* City */}
            <div className="flex flex-col relative">
              <label className="text-sm font-semibold mb-1 text-gray-700">City</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1" ref={cityDropdownRef}>
                  <input
                    type="text"
                    value={selectedCities.map((city) => city.label).join(', ')}
                    readOnly
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full cursor-pointer"
                    placeholder="Select cities..."
                  />
                  {isCityDropdownOpen && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.value}
                          className="p-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                          onClick={() => handleAddCity(city)}
                        >
                          <span>{city.label}</span>
                          {selectedCities.some((c) => c.value === city.value) && (
                            <X
                              className="text-red-500 hover:text-red-700"
                              size={16}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveCity(city);
                              }}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleAddSelection}
                  className=" bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center p-1"
                >
                  <Plus className="mr" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success and Error Messages */}
        {showSuccess && (
          <div className="p-3 bg-green-100 text-green-700 rounded-md flex items-center">
            <Check className="mr-2" size={16} /> Selection added successfully!
          </div>
        )}
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md flex items-center">
            {error}
          </div>
        )}

        {/* Temporary Selections */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Temporary Selections</h2>
          {temporarySelections.length === 0 ? (
            <p className="text-gray-500">No selections added yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {temporarySelections.map((selection, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-200 relative">
                  {/* Delete and Edit Icons */}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <Edit
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                      size={16}
                      onClick={() => handleEditSelection(index)}
                    />
                    <Trash
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                      size={16}
                      onClick={() => handleDeleteSelection(index)}
                    />
                  </div>
                  <p className="font-semibold text-gray-800">
                    {selection.country}, {selection.state}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Cities:</strong>
                    {Array.isArray(selection.cities)
                      ? selection.cities.map((city) => city.label).join(', ')
                      : 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Form Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {editingCompany ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyManagementAdd;