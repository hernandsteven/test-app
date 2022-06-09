import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const citySelectItems = [
  { label: "New York", value: "NY" },
  { label: "Rome", value: "RM" },
  { label: "London", value: "LDN" },
  { label: "Istanbul", value: "IST" },
  { label: "Paris", value: "PRS" },
];
const Vanilla = () => {
  const [city, setCity] = useState("");
  return (
    <>
      <Dropdown
        value={city}
        options={citySelectItems}
        onChange={(e) => setCity(e.value)}
        placeholder="Select a City"
      />
    </>
  );
};

export default Vanilla;
