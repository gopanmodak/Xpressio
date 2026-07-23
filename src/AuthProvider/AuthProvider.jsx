import React, { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const [vegetable, setVegetable] = useState([]);

  useEffect(() => {
    fetch("/vegetable.json")
      .then((res) => res.json())
      .then((data) => setVegetable(data));
    console.log(vegetable);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const authInfo = {
    vegetable,
  };
  return (
    <ContextProvider.Provider value={authInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
