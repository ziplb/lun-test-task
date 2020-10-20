import React from "react";

import Input from "../input/input";

import "./autocomplete.css";

const Autocomplete = ({ ...rest }) => {
  return <Input {...rest} />;
};

export default Autocomplete;
