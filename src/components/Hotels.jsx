import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import DateRangePicker from "./DateRangePicker";
import TravelerSelection from "./TravelerSelection";

const Hotels = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const citiesCache = useRef(null); 

  const config = {
    cUrl: "https://api.countrystatecity.in/v1/countries/IN/cities",
    ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
  };

  const fetchCities = async () => {
    setLoading(true);
    try {
      const response = await axios.get(config.cUrl, {
        headers: { "X-CSCAPI-KEY": config.ckey },
      });
      citiesCache.current = response.data; 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestions(true);

    if (citiesCache.current) {
      const filteredCities = citiesCache.current
        .filter((city) =>
          city.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .slice(0, 6);

      setSuggestions(filteredCities);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    setShowSuggestions(false);
  };

  return (
    <>
      {/* Search Input */}
      <div className="relative flex-1 min-w-8 mb-4 lg:mb-0">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter your destination"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        {showSuggestions && query && (
          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-lg mt-1 shadow-lg z-10">
            {loading ? (
              <div className="p-2 text-center">Loading...</div>
            ) : suggestions.length > 0 ? (
              suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 cursor-pointer hover:bg-gray-100 transition duration-300"
                >
                  {suggestion.name}
                </div>
              ))
            ) : (
              <div className="p-2 text-center">No results found</div>
            )}
          </div>
        )}
      </div>

      {/* DateRangePicker */}
      <DateRangePicker />

      {/* TravelerSelection */}
      <TravelerSelection />

      {/* Search Button */}
      <button className="flex items-center bg-blue-600 text-white py-3 px-5 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        <FaSearch className="mr-2 text-lg" /> Search
      </button>
    </>
  );
};

export default Hotels;
