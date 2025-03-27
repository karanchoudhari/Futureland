// edited 
import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { useNavigate } from 'react-router-dom';

const Locationselect = ({ onProjectsUpdate }) => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [countryProjects, setCountryProjects] = useState([]);
    const [stateProjects, setStateProjects] = useState([]);
    const [cityProjects, setCityProjects] = useState([]);

    const navigate = useNavigate();

    // Load countries on component mount
    useEffect(() => {
        const allCountries = Country.getAllCountries();
        setCountries(allCountries);
    }, []);

    // Load states when a country is selected
    useEffect(() => {
        if (selectedCountry) {
            const countryStates = State.getStatesOfCountry(selectedCountry);
            setStates(countryStates);
            setSelectedState('');
            setCities([]);
            setSelectedCity('');
            fetchCountryProjects(selectedCountry);
        }
    }, [selectedCountry]);

    // Load cities when a state is selected
    useEffect(() => {
        if (selectedState) {
            const stateCities = City.getCitiesOfState(selectedCountry, selectedState);
            setCities(stateCities);
            setSelectedCity('');
            fetchStateProjects(selectedState);
        }
    }, [selectedState]);

    // Handle country selection
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    // Handle state selection
    const handleStateChange = (e) => {
        setSelectedState(e.target.value);
    };

    // Handle city selection
    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        fetchCityProjects(city);
    };

    // Fetch projects for the selected country
    const fetchCountryProjects = (countryCode) => {
        const fetchedProjects = [
            { id: 1, name: 'Country Project 1' },
            { id: 2, name: 'Country Project 2' },
            { id: 3, name: 'Country Project 2' },
            { id: 4, name: 'Country Project 2' },
            { id: 5, name: 'Country Project 2' },
        ];
        setCountryProjects(fetchedProjects);
    };

    // Fetch projects for the selected state
    const fetchStateProjects = (stateCode) => {
        const fetchedProjects = [
            { id: 1, name: 'State Project 1' },
            { id: 2, name: 'State Project 2' },
        ];
        setStateProjects(fetchedProjects);
    };

    // Fetch projects for the selected city
    const fetchCityProjects = (cityName) => {
        const fetchedProjects = [
            { id: 1, name: 'City Project 1' },
            { id: 2, name: 'City Project 2' },
        ];
        setCityProjects(fetchedProjects);
        if (onProjectsUpdate && typeof onProjectsUpdate === 'function') {
            onProjectsUpdate(fetchedProjects); // Pass projects to parent component
        }
    };

    // Function to handle project click and navigate to Detail page
    const handleProjectClick = (project) => {
        navigate('/detail', { state: { project } });
    };

    return (
        <>
         <div className='mb-8'>
                <h2 className="text-2xl font-bold mb-6 text-white text-start uppercase">Select Location</h2>
                <div className="p-2 bg-gray-800 rounded-2xl shadow-lg max-w-6xl mx-auto">
                    {/* Table Structure */}
                    <div className="overflow-auto w-full bg-gray-800 shadow-md rounded-md" style={{ maxHeight: '500px' }}>
                        <ul className="border border-gray-700 rounded-md overflow-hidden">
                            {/* Table Header - Made sticky */}
                            <li className="flex bg-gray-700 font-semibold text-sm text-gray-200 border-b border-gray-600 sticky top-0 z-10">
                                <div className="flex-1 px-2 py-2 border-r border-gray-600">Country</div>
                                <div className="flex-1 px-2 py-2 border-r border-gray-600">State</div>
                                <div className="flex-1 px-2 py-2">City</div>
                            </li>

                            {/* Table Row - Rest of your content remains the same */}
                            <li className="flex border-b border-gray-600">
                                {/* Country Column */}
                                <div className="flex-1 px-2 py-2 border-r border-gray-600">
                                    <select
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country) => (
                                            <option key={country.isoCode} value={country.isoCode}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    {/* Country Projects */}
                                    {selectedCountry && (
                                        <ul className="mt-2">
                                            {countryProjects.map((project) => (
                                                <li
                                                    key={project.id}
                                                    onClick={() => handleProjectClick(project)}
                                                    className="p-2 hover:bg-gray-600 cursor-pointer transition-colors border-b border-gray-600 text-gray-200"
                                                >
                                                    {project.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* State Column */}
                                <div className="flex-1 px-2 py-2 border-r border-gray-600">
                                    <select
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        disabled={!selectedCountry}
                                        className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
                                    >
                                        <option value="">Select State</option>
                                        {states.map((state) => (
                                            <option key={state.isoCode} value={state.isoCode}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                    {/* State Projects */}
                                    {selectedState && (
                                        <ul className="mt-2">
                                            {stateProjects.map((project) => (
                                                <li
                                                    key={project.id}
                                                    onClick={() => handleProjectClick(project)}
                                                    className="p-2 hover:bg-gray-600 cursor-pointer transition-colors border-b border-gray-600 text-gray-200"
                                                >
                                                    {project.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* City Column */}
                                <div className="flex-1 px-2 py-2">
                                    <select
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        disabled={!selectedState}
                                        className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-200"
                                    >
                                        <option value="">Select City</option>
                                        {cities.map((city) => (
                                            <option key={city.name} value={city.name}>
                                                {city.name}
                                            </option>
                                        ))}
                                    </select>
                                    {/* City Projects */}
                                    {selectedCity && (
                                        <ul className="mt-2">
                                            {cityProjects.map((project) => (
                                                <li
                                                    key={project.id}
                                                    onClick={() => handleProjectClick(project)}
                                                    className="p-2 hover:bg-gray-600 cursor-pointer transition-colors border-b border-gray-600 text-gray-200"
                                                >
                                                    {project.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                            </>
    );
};

export default Locationselect;
// edited 

