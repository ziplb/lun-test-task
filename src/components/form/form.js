import React from "react";

import "./form.css";

const Form = ({ children, ...rest }) => (
  <form className="Form" {...rest}>
    {children}
  </form>
);

Form.Row = ({ children }) => <div className="Form-row">{children}</div>;

export default Form;
