import React from "react";

const FilterButtons = ({ filterType, setFilterType }) => {
  // Define an array of filter options
  const filterOptions = ["all", "nigiri", "sashimi", "sushi roll"];
  return (
    <div>
      <div className="hidden mobile-screen:flex space-x-4">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`${
              filterType === option
                ? "bg-lightOrange text-white font-bold"
                : "bg-gray-200 text-gray-700"
            } px-12 py-2 rounded hover:bg-lightOrange hover:text-white`}
            onClick={() => setFilterType(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="  mobile-screen:hidden flex space-x-2">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={`${
              filterType === option
                ? "bg-lightOrange text-white font-bold"
                : "bg-gray-200 text-gray-700"
            } px-4 py-2 rounded hover:bg-lightOrange hover:text-white`}
            onClick={() => setFilterType(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
