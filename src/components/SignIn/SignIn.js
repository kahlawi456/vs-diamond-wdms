import React, { useState } from "react";
import app from "../../firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const db = getDatabase(app);

    try {
      // References for both Patient and Personnel
      const patientRef = ref(db, "users/Patient");
      const personnelRef = ref(db, "users/Personnel");

      // Get data from both nodes
      const [patientSnap, personnelSnap] = await Promise.all([
        get(patientRef),
        get(personnelRef),
      ]);

      let user = null;
      let userType = "";

      // Check in Patient node
      if (patientSnap.exists()) {
        const patients = Object.values(patientSnap.val());
        user = patients.find(
          (patient) => patient.email === email && patient.userPassword === password
        );
        if (user) userType = "Patient";
      }

      // If not found in Patient, check Personnel
      if (!user && personnelSnap.exists()) {
        const personnel = Object.values(personnelSnap.val());
        user = personnel.find(
          (person) => person.email === email && person.userPassword === password
        );
        if (user) userType = "Personnel";
      }

      // Handle Sign In Results
      if (user) {
        alert(`Sign in successful as ${userType}!`);
        // Redirect or handle based on userType if needed
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h3>Sign In</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>

  
  );
};

export default SignIn;
