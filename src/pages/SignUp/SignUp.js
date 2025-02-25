import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate(); // Navigate to a page

  // State variable for user role
  const [selectUser, setSelectUser] = useState(null);

  return (
    <div>
          <h2>Select Role:</h2>
          <button onClick={() => navigate("SignUpPersonnel")}>
            Personnel
          </button>
          <button onClick={() => navigate("SignUpPatient")}>
            Patient
          </button>
    </div>
  );
};

export default SignUp;