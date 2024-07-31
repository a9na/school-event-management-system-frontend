import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ eventId, userId }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/registrations', { eventId, userId, email })
      .then(response => {
        alert('Successfully registered!');
      })
      .catch(error => {
        console.error('There was an error registering!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
