import { useState, createContext, useEffect } from "react";
import { auth } from "../../config/fire-config";

export const usercontext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <usercontext.Provider value={user}>{children}</usercontext.Provider>;
}
