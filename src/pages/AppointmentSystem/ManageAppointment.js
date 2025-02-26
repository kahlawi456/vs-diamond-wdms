import React, { useState, useEffect } from "react";
import { db } from "../../backend/firebaseConfig";
import Calendar from "react-calendar";
import { ref, onValue, remove, update } from "firebase/database";
import Modal from "react-modal";
import PatientInsuranceForm from "./PatientInsuranceForm";

Modal.setAppElement("#root");

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [insuranceDetails, setInsuranceDetails] = useState(null);
  const [showInsuranceForm, setShowInsuranceForm] = useState(false);
  const [editingAppointmentId, setEditingAppointmentId] = useState(null);

  // Fetch appointments for the selected date
  useEffect(() => {
    if (!selectedDate) return;
    const formattedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    const appointmentsRef = ref(db, `appointments/${formattedDate}`);

    onValue(appointmentsRef, (snapshot) => {
      const data = snapshot.val();
      setAppointments(data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []);
    });
  }, [selectedDate]);

  // Handle date change
  const handleDateChange = (date) => setSelectedDate(date);

  // Handle appointment cancellation
  const handleCancelAppointment = async (id) => {
    if (!window.confirm("Do you want to cancel this appointment?")) return;

    const formattedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    const appointmentRef = ref(db, `appointments/${formattedDate}/${id}`);

    try {
      await remove(appointmentRef);
      setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  // Handle viewing insurance details
  const handleViewInsuranceDetails = (appointment) => {
    setInsuranceDetails(appointment.insuranceDetails);
    setEditingAppointmentId(appointment.id);
    setShowInsuranceForm(true);
  };

  // Handle insurance form submission
  const handleInsuranceFormSubmit = async (formData) => {
    if (editingAppointmentId) {
      const formattedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000).toISOString().split("T")[0];
      const appointmentRef = ref(db, `appointments/${formattedDate}/${editingAppointmentId}`);
      await update(appointmentRef, { insuranceDetails: formData });
      setEditingAppointmentId(null);
      setInsuranceDetails(null);
    }
    setShowInsuranceForm(false);
  };

  // Handle closing the insurance form
  const handleInsuranceClose = () => {
    setShowInsuranceForm(false);
    setEditingAppointmentId(null);
    setInsuranceDetails(null);
  };


  const handleConfirmAppointment = async (id) => {
    const formattedDate = new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000).toISOString().split("T")[0];
    const appointmentRef = ref(db, `appointments/${formattedDate}/${id}`);

    try {
      await update(appointmentRef, { status: "Confirmed" });
      setAppointments((prev) =>
        prev.map((appointment) =>
          appointment.id === id ? { ...appointment, status: "Confirmed" } : appointment
        )
      );
    } catch (error) {
      console.error("Error confirming appointment:", error);
    }
  };

  // Format time in minutes to HH:MM AM/PM format
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = mins < 10 ? `0${mins}` : mins;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "20px" }}>
      <div style={{ width: "350px" }}>
        <h1>Manage Appointments</h1>
        <h2>Select Date:</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />

        <div style={{ width: "400px" }}>
          <h2>Appointments for {selectedDate.toDateString()}</h2>
          <ul style={{ padding: "0", listStyle: "none" }}>
            {appointments.length > 0 && appointments.map((appointment) => (
              <li key={appointment.id} style={{ padding: "10px", border: "1px solid #000", marginBottom: "5px", position: "relative", backgroundColor: "#e0e0e0" }}>
                <button onClick={() => handleCancelAppointment(appointment.id)} style={{ position: "absolute", top: "5px", right: "5px", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", fontSize: "12px" }}>Cancel</button>
                {appointment.insuranceDetails && (
                  <button onClick={() => handleViewInsuranceDetails(appointment)} style={{ position: "absolute", top: "5px", right: "140px", background: "blue", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", fontSize: "12px" }}>Insurance Details</button>
                )}
                <button onClick={() => handleConfirmAppointment(appointment.id)} style={{ position: "absolute", top: "5px", right: "70px", background: "green", color: "white", border: "none", padding: "5px 10px", cursor: "pointer", fontSize: "12px" }}>Confirm</button>
                <div>
                  <b>{appointment.date}</b>
                  <br /> {appointment.services.join(", ")}
                  <br /> <b>Time: {formatTime(parseInt(appointment.time.split(":")[0]) * 60 + parseInt(appointment.time.split(":")[1]))} - {formatTime(parseInt(appointment.time.split(":")[0]) * 60 + parseInt(appointment.time.split(":")[1]) + appointment.duration)}</b>
                  <br /> <b>Status: <span style={{ color: appointment.status === "Confirmed" ? "green" : "orange" }}>{appointment.status}</span></b>
                  <br /> <b>Patient: {appointment.userId}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Modal
        isOpen={showInsuranceForm}
        onRequestClose={handleInsuranceClose}
        contentLabel="Insurance Form Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <PatientInsuranceForm
          onSubmit={handleInsuranceFormSubmit}
          onClose={handleInsuranceClose}
          initialData={insuranceDetails || {}}
        />
      </Modal>
    </div>
  );
};

export default ManageAppointments;