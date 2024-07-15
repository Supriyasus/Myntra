import React, { useState } from 'react';
import './Filters.css';

interface FilterOption {
  label: string;
}

const Filters: React.FC = () => {
  const [filters, setFilters] = useState<{ [key: string]: string[] }>({
    price: [],
    color: [],
  });

  const filterOptions: { [key: string]: FilterOption[] } = {
    price: [
      { label: '$0 - $50' },
      { label: '$51 - $100' },
      { label: '$101 - $150' },
      { label: '$151+' },
    ],
    color: [
      { label: 'blue' },
      { label: 'purple' },
      { label: 'red' },
    ],
  };

  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setExpandedFilter(expandedFilter === filter ? null : filter);
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h2>FILTERS</h2>
        <button
          className="clear-all"
          onClick={() =>
            setFilters({
              price: [],
              color: [],
            })
          }
        >
          CLEAR ALL
        </button>
      </div>
      {Object.keys(filterOptions).map((filter) => (
        <div key={filter} className="filter-item">
          <div className="filter-label" onClick={() => toggleFilter(filter)}>
            {filter.toUpperCase()}
            <span className={`expand-icon ${expandedFilter === filter ? 'expanded' : ''}`}>▼</span>
          </div>
          {expandedFilter === filter && (
            <div className="filter-options">
              {filterOptions[filter as keyof typeof filterOptions].map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="checkbox"
                    id={`${filter}-${index}`}
                    checked={filters[filter].includes(option.label)}
                    onChange={() => {}} 
                  />
                  <label htmlFor={`${filter}-${index}`}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
