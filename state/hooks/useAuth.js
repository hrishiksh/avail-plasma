import { useState } from "react";
import { auth, db } from "../../config/fire-config";

const useAuth = () => {
  const [user, setUser] = useState(null);

  const createUserDocument = (user) =>
    db
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then(() => {
        setUser(user);
      })
      .catch((err) => {
        return { err };
      });

  const signup = ({ name, email, password }) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        auth.currentUser.sendEmailVerification();
        return createUserDocument({ uid: resp.user.uid, email, name });
      })
      .catch((err) => {
        return { err };
      });
  };
  return { user, signup };
};

export default useAuth;
