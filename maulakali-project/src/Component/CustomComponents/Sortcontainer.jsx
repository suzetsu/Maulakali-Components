import React, { useState } from "react";
import "./sortingContainer.scss";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../Shadcn/Shadcn";
// import { Dropdown, Select } from "flowbite-react";
import Select from "react-select";

const Sortcontainer = ({ prices, Default, onSort }) => {
  const [sortDate, setSortDate] = useState();
  const [sortPrice, setSortPrice] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSort = () => {
    if (selectedOption) {
      const sortData = selectedOption ? selectedOption.value : null;
      onSort(sortData);
    }
  };

  return (
    <div className="sorting-container">
      <h1>SORT BY</h1>

      <Select
        name="date"
        options={prices}
        className="basic-multi-select"
        placeholder="Prices"
        isSearchable={false}
        onChange={(option) => setSelectedOption(option)}
      />
      <Select
        name="date"
        options={Default}
        className="basic-multi-select"
        placeholder="Default"
        isSearchable={false}
        onChange={(option) => setSelectedOption(option)}
      />

      <div className="sorting-cases" onClick={handleSort}>
        <p>SORT</p>
      </div>
    </div>
  );
};

export default Sortcontainer;
