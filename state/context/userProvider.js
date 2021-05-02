import { useState, createContext } from "react";

export const usercontext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <usercontext.Provider value={[user, setUser]}>
      {children}
    </usercontext.Provider>
  );
}
