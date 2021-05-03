import { auth, db } from "../../config/fire-config";

const useAuth = () => {
  const signup = ({ name, email, password }) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => {
        auth.currentUser.sendEmailVerification();
      })
      .catch((err) => {
        return { err };
      });
  };
  return { signup };
};

export default useAuth;
