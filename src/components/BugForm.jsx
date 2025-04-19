import React, { useState } from 'react';

const BugForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [status, setStatus] = useState(initialData.status || 'Open');
  const [priority, setPriority] = useState(initialData.priority || 'Medium');
  const [assignedTo, setAssignedTo] = useState(initialData.assignedTo || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !assignedTo) {
      alert('Please fill all required fields.');
      return;
    }

    onSubmit({ title, description, status, priority, assignedTo });
    if (!initialData.id) {
      setTitle('');
      setDescription('');
      setStatus('Open');
      setPriority('Medium');
      setAssignedTo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="text"
        placeholder="Title *"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Description *"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="text"
        placeholder="Assigned To *"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        required
      />

      <button type="submit">Save Bug</button>
    </form>
  );
};

export default BugForm;
