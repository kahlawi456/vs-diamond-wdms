import React, { useState } from "react";
import app from "../../backend/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, push } from "firebase/database";
import SignUpForm from "../../components/SignUpForm";

const SignUpPersonnel = () => {
  const [personnelAuthStep, setPersonnelAuthStep] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
    if (username === "personnel" && password === "123456") {
      setPersonnelAuthStep(true);
    } else {
      alert(`Invalid credentials.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingFields = [];

    if (!email) missingFields.push("Email");
    if (!userPassword) missingFields.push("Password");
    if (!userConfirmPassword) missingFields.push("Confirm Password");
    if (!firstName) missingFields.push("First Name");
    if (!lastName) missingFields.push("Last Name");
    if (!address) missingFields.push("Address");
    if (!contactNumber) missingFields.push("Contact Number");
    if (!birthDate) missingFields.push("Birthdate");
    if (!age) missingFields.push("Age");

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(", ")}`);
      return;
    }

    if (contactNumber.toString().length !== 11) {
      alert(`Invalid contact number. Must not be less than or greater than 11 digits. Contact number only contains ${contactNumber.toString().length} digits.`);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email. Please enter a Gmail or Yahoo email.");
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

    alert(`Registration successful for Personnel`);

    const saveData = async () => {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "users/Personnel"));
      try {
        await set(newDocRef, {
          email,
          userPassword,
          firstName,
          middleName,
          lastName,
          address,
          contactNumber,
          civilStatus,
          birthDate,
          age
        });
        navigate("/dashboardPersonnel");
      } catch (error) {
        alert("Error saving data: " + error.message);
      }
    };

    saveData();
  };

  return (
    <div>
      {!personnelAuthStep ? (
        <div>
          <h3>Enter credentials | Personnel Authentication!</h3>
          <h4>Predefined Credentials</h4>
          <div>
            <label><h5>Username: personnel</h5></label>
            <label><h5>Password: 123456</h5></label>
          </div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handlePersonnelAuth}>Submit</button>
        </div>
      ) : (
        <SignUpForm
          title="Signup as Personnel"
          firstName={firstName}
          setFirstName={setFirstName}
          middleName={middleName}
          setMiddleName={setMiddleName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          contactNumber={contactNumber}
          setContactNumber={setContactNumber}
          civilStatus={civilStatus}
          setCivilStatus={setCivilStatus}
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          age={age}
          setAge={setAge}
          email={email}
          setEmail={setEmail}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
          userConfirmPassword={userConfirmPassword}
          setUserConfirmPassword={setUserConfirmPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default SignUpPersonnel;