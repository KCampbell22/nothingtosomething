import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfInquiry, setDateOfInquiry] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("dateOfInquiry", dateOfInquiry);
    formData.append("email", email);
    formData.append("comment", comment);

    fetch("./src/form.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data); // Success or error message returned by the PHP script
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Reset form fields
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setDateOfInquiry("");
    setEmail("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="dateOfInquiry">Date of Inquiry:</label>
        <input
          type="date"
          id="dateOfInquiry"
          value={dateOfInquiry}
          onChange={(e) => setDateOfInquiry(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Additional Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
