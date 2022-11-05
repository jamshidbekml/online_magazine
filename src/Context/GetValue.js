import React, { createContext, useState } from "react";

export const GetValue = createContext();

const Value = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <GetValue.Provider value={[value, setValue]}>{children}</GetValue.Provider>
  );
};

export default Value;
