import { useState } from "react";
import "./App.css";
import FormInputComponent from "./components/FormInputComponent";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    dob: "",
    document: "",
    password: "",
    cpassword: "",
  });

  const inputfields = [
    {
      id: 1,
      name: "firstname",
      placeholder: "First Name",
      label: "First Name",
      type: "text",
      required: true,
      pattern: "([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){3,20}",
      errorMessage:
        "First must be 3-12 characters without any special character",
    },
    {
      id: 2,
      name: "lastname",
      placeholder: "Last Name",
      label: "Last Name",
      type: "text",
      required: true,
      pattern: "([a-zA-Z',.-]+( [a-zA-Z',.-]+)*){3,20}",
      errorMessage:
        "Last must be 3-12 characters without any special character",
    },
    {
      id: 3,
      name: "email",
      placeholder: "Email",
      label: "Email",
      type: "email",
      required: true,
      pattern: "^([A-Za-z]|[0-9])+$+.",
      errorMessage: "Please enter a valid Email",
    },
    {
      id: 4,
      name: "phone",
      placeholder: "Phone",
      label: "Phone",
      type: "tel",
      pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
      required: true,
      errorMessage: "Please enter an valid Phone",
    },
    {
      id: 5,
      name: "dob",
      placeholder: "Date of Birth",
      label: "Date of Birth",
      type: "date",
      required: true,
    },
    {
      id: 6,
      name: "document",
      placeholder: "Upload Document",
      label: "Upload Document",
      type: "file",
    },
    {
      id: 7,
      name: "password",
      placeholder: "Password",
      label: "Password",
      type: "password",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,25}$",
      errorMessage:
        "Password Must be atlest 10 characters and it should include number, letter and special characters",
    },
    {
      id: 8,
      name: "cpassword",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      type: "password",
      pattern: values.password,
      required: true,
      errorMessage: "Password does not match",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <>
      <div className="container">
        <div className="col-md-2"></div>
        <div className="col-md-8 form-container">
          <div className="card ">
            <div className="card-header text-center">
              <h2>React Form Validation</h2>
            </div>
            <div className="card-body">
              <div className="form-box">
                <form action="#" onSubmit={handleFormSubmit}>
                  {inputfields.map((input) => (
                    <FormInputComponent
                      key={input.id}
                      {...input}
                      onChange={onChange}
                      value={values[input.name]}
                    />
                  ))}

                  <input
                    className="btn btn-info"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
}

export default App;
