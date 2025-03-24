import React, { useState } from 'react'
import DropdownOptions from './DropdownOptions'
import './Dropdown.css'

const Dropdown = ({ options }) => {    // options state를 props로 전달받음
  /* state */
  const [isOpen, setIsOpen] = useState(false);                  // 드롭박스가 열려있는 상태 state (bool)
  const [selectedOption, setSelectedOption] = useState(null);   // 선택된 옵션 state (object)

  /* handler */
  const handleClick = () => {                   // 드롭다운 클릭
    setIsOpen((prevIsOpen) => !prevIsOpen);     // set 열림 or 닫힘 -> reRender
  }

  const handleSelect = (option) => {            // 옵션 클릭 (optons state를 전달받음)
    setSelectedOption(option);                  // set 선택된 옵션에 올라온 option state를 전달
    setIsOpen(false);                           // 드롭다운 닫음
  }

  /* render */
  return (
    <>
      <div className="dropdown" onClick={handleClick} >
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {isOpen && <DropdownOptions               // 드롭다운이 열려 있다면, DropdownOptions render
        options={options}                       // props로 options state를 전달
        handleSelect={handleSelect}             // props로 handleSelect 함수를 전달
      />}
    </>
  )
};

export default Dropdown
