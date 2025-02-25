import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../backend/firebaseConfig";
import DOMPurify from "dompurify"; // Add DOMPurify for sanitizing inputs

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSignIn = async () => {
    try {
      // Sanitize inputs
      const sanitizedEmail = DOMPurify.sanitize(email);
      const sanitizedPassword = DOMPurify.sanitize(password);

      // Validate email and password
      if (!sanitizedEmail || !sanitizedPassword) {
        alert("Invalid email or password.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedEmail)) {
        alert("Invalid email format.");
        return;
      }

      if (sanitizedPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, sanitizedEmail, sanitizedPassword);
      const user = userCredential.user;

      // Fetch user type from the database
      const db = getDatabase(app);
      const patientRef = ref(db, `users/Patient`);
      const personnelRef = ref(db, `users/Personnel`);

      const [patientSnap, personnelSnap] = await Promise.all([get(patientRef), get(personnelRef)]);

      let userData = null;
      let userType = null;

      if (patientSnap.exists()) {
        const patients = patientSnap.val();
        for (const key in patients) {
          if (patients[key].email === sanitizedEmail) {
            userData = patients[key];
            userType = "Patient";
            break;
          }
        }
      }

      if (!userData && personnelSnap.exists()) {
        const personnel = personnelSnap.val();
        for (const key in personnel) {
          if (personnel[key].email === sanitizedEmail) {
            userData = personnel[key];
            userType = "Personnel";
            break;
          }
        }
      }

      if (userData) {
        alert(`Sign in successful as ${userType}!`);
        // Store user data in localStorage
        localStorage.setItem("currentUser", JSON.stringify({ ...user, userType }));

        if (userType === "Patient") {
          navigate("/dashboardPatient");
        } else if (userType === "Personnel") {
          navigate("/dashboardPersonnel");
        }
      } else {
        alert("User data not found.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <h3>Sign In</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;