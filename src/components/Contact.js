import React from "react";
import useContactModel from "../models/model.js";

const Contact = ({ onRemove }) => {
  const model = useContactModel();
  return (
    <div>
      <label>
        Name: <input {...model.inputProps.name} />
      </label>
      <label>
        Email: <input {...model.inputProps.email} />
      </label>
      <button onClick={onRemove}>Remove</button>
      {model.error && <p>{model.error}</p>}
    </div>
  );
};
export default Contact;
