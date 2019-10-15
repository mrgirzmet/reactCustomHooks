import { useState } from "react";

const useContactModel = ({ defaultValue = {} } = {}) => {
  const [name, setName] = useState(defaultValue.name || "");
  const [email, setEmail] = useState(defaultValue.email || "");

  return {
    error: name === "" ? "Please enter a name" : undefined,
    inputProps: {
      name: {
        value: name,
        onChange: e => setName(e.target.value)
      },
      email: {
        value: email,
        onChange: e => setEmail(e.target.value)
      }
    }
  };
};

export default useContactModel;
