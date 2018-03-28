import React from 'react';

const FilterSelect = ({ name, label, value, options, onChange }) => (
  <select
    name={name}
    onChange={onChange}
    value={value}
  >
    <option value="">Select {label}</option>
    {options.map(option => (
      <option key={option._id} value={option.slug}>{option.name}</option>
    ))}
  </select>
);

export default FilterSelect;
