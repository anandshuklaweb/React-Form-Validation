import React, { useState } from "react";

const FormInputComponent = (props) => {
  const [inputLeave, setInputLeave] = useState(false);
  const { label, onChange, errorMessage, id, ...otherProps } = props;

  const handleInputLeave = (e) => {
    setInputLeave(true);
  };

  return (
    <div className="formInputComponent">
      <div className="form-group">
        <label htmlFor="first_name">{label}</label>
        <input
          className="form-control"
          {...otherProps}
          onBlur={handleInputLeave}
          inputLeave={inputLeave.toString()}
          onChange={onChange}
          onFocus={() => otherProps.name === "cpassword" && setInputLeave(true)}
        />
        <div className="valid-feedback">{errorMessage}</div>
      </div>
    </div>
  );
};

export default FormInputComponent;
