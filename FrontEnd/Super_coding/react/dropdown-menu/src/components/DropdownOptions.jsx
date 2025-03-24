import React from 'react'
import './DropdownOptions.css'

const DropdownOptions = ({ options, handleSelect }) => {

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="dropdown-options" onClick={() => handleSelect(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>{renderedOptions}</div>
  )
}

export default DropdownOptions
