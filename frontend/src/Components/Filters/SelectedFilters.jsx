import React from 'react';

const SelectedFilters = ({ selectedFilters, onRemoveFilter, onClearAll }) => {
  const hasSelectedFilters = Object.values(selectedFilters).some((arr) => Array.isArray(arr) && arr.length > 0);

  return (
    <div>
        <div>
        <button onClick={onClearAll} className="text-blue-500 ml-4">
            Clear All
          </button>
        </div>
        {hasSelectedFilters && (
      <div className="mb-5">
        <div className="flex flex-wrap gap-2 mt-2">
          {Object.entries(selectedFilters).map(([key, values]) =>
            Array.isArray(values) ? (
              values.map((value) => (
                <span key={value} className="bg-gray-200 px-2 py-1 rounded-full flex items-center">
                  {value}
                  <button onClick={() => onRemoveFilter(key, value)} className="ml-2 text-black">
                    &times;
                  </button>
                </span>
              ))
            ) : null 
          )}
        </div>
      </div>
    )}
    </div>
  );
};

export default SelectedFilters;
