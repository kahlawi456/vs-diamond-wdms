import React, { useState } from "react";
import app from "../../backend/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPersonnel = () => {
  // State variables for personnel authentication
  const [personnelAuthStep, setPersonnelAuthStep] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  // State variables for each input field
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const handlePersonnelAuth = () => {
    // Checks if the username and password entered by the user matches the predefined username and password
    if (username === "personnel" && password === "123456") {
      setPersonnelAuthStep(true);
    } else {
      alert(`Invalid credentials.`);
    }
  };

  // Function to HandleSubmit from the form data
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from reloading

    if (contactNumber.toString().length !== 11) {
      alert(`Invalid contact number. Must not be less than or greater than 11 digits. Contact number only contains ${contactNumber.toString().length} digits.`);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email. Please enter a valid email.");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/;
    if (userPassword.toString().length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
    if (!passwordPattern.test(userPassword)) {
      alert("Password must contain an uppercase letter, a lowercase letter, a number, and a special character.");
      return;
    }

    if (userPassword !== userConfirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, userPassword);
      const user = userCredential.user;

      // Save user data in Firebase Realtime Database
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "users/Personnel"));
      await set(newDocRef, {
        email,
        firstName,
        middleName,
        lastName,
        address,
        contactNumber,
        civilStatus,
        birthDate,
        age
      });

      alert(`Registration successful for Personnel`);
      navigate("/dashboardPersonnel");
    } catch (error) {
      alert("Error creating account: " + error.message);
    }
  };

  return (
    <div>
      {/* If the user has not authenticated, show the authentication form */}
      {!personnelAuthStep ? (
        <div>
          <h3>Enter credentials | Personnel Authentication!</h3>
          <h4>Predefined Credentials</h4>
          <div>
            <label><h5>Username: personnel</h5></label>
            <label><h5>Password: 123456</h5></label>
          </div>
          <form onSubmit={handlePersonnelAuth}>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Signup as Personnel</h3>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              maxLength="50"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setFirstName(value.replace(/\b\w/g, (char) => char.toUpperCase()));
                }
              }}
            />

            <label>Middle Name:</label>
            <input
              type="text"
              value={middleName}
              maxLength="50"
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setMiddleName(value.replace(/\b\w/g, (char) => char.toUpperCase()));
                }
              }}
            />

            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              maxLength="50"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setLastName(value.replace(/\b\w/g, (char) => char.toUpperCase()));
                }
              }}
            />
          </div>

          <div>
            <label>Address:</label>
            <input
              type="text"
              value={address}
              maxLength="150"
              required
              onChange={(e) => setAddress(e.target.value)}
            />

            <label>Contact Number:</label>
            <input
              type="text"
              value={contactNumber}
              maxLength="11"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setContactNumber(value);
                }
              }}
            />
          </div>

          <div>
            <label>Civil Status:</label>
            <select
              value={civilStatus}
              onChange={(e) => setCivilStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>

            <label>Birthdate:</label>
            <input
              type="date"
              value={birthDate}
              required
              onChange={(e) => {
                const birthDateValue = e.target.value;
                setBirthDate(birthDateValue);

                const today = new Date();
                const birthDate = new Date(birthDateValue);

                if (birthDate > today) {
                  alert("Birthdate cannot be in the future.");
                  setAge("");
                  return;
                }

                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                const dayDiff = today.getDate() - birthDate.getDate();

                if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                  age--;
                }

                setAge(age);
              }}
            />

            <label>Age:</label>
            <input
              type="text"
              value={age}
              min="1"
              maxLength="3"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setAge(value);
                }
              }}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              maxLength="254"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "300px" }}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              value={userPassword}
              min="8"
              maxLength="32"
              required
              onChange={(e) => setUserPassword(e.target.value)}
            />

            <label>Confirm Password:</label>
            <input
              type="password"
              value={userConfirmPassword}
              min="8"
              maxLength="32"
              required
              onChange={(e) => setUserConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SignUpPersonnel;