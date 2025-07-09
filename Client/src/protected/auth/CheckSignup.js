import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decryptData } from "../../component/features/Hashing";

const IsCheckSignup = ({ children }) => {
  const [isChecked, setisChecked] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const signupEncrypt = localStorage.getItem("isSignup");
    if (!signupEncrypt) return navigate("/page404");
    const signup = decryptData(signupEncrypt);
    if (!signup) {
      return navigate("/page404");
    }
    setisChecked(true);
  });

  if (!isChecked) return null;
  return children;
};

export default IsCheckSignup;
