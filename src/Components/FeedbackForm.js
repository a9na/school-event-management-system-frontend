import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ eventId, userId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/feedback', { eventId, userId, content })
      .then(response => {
        alert('Feedback submitted!');
      })
      .catch(error => {
        console.error('There was an error submitting the feedback!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Your Feedback"
        required
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
