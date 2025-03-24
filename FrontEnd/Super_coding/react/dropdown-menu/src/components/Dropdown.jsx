import React, { useState } from 'react'
import DropdownOptions from './DropdownOptions'
import './Dropdown.css'

const Dropdown = ({ options }) => {
  /* state */
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  /* handler */
  const handleClick = () => {   // 드롭다운 클릭
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  const handleSelect = (option) => {  // 옵션 클릭
    setSelectedOption(option);
    setIsOpen(false);
  }

  /* render */
  return (
    <>
      <div className="dropdown" onClick={handleClick} >
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {isOpen && <DropdownOptions 
        options={options} 
        handleSelect={handleSelect}
      />}
    </>
  )
};

export default Dropdown
