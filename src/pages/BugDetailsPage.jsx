import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBugById } from '../util/localStorHelper';

const BugDetailsPage = () => {
  const { id } = useParams();
  const [bug, setBug] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const found = getBugById(id);
    if (!found) {
      navigate('/');
    } else {
      setBug(found);
    }
  }, [id, navigate]);

  if (!bug) return null;

  return (
    <div>
      <h2>Bug Details</h2>
      <p><strong>Title:</strong> {bug.title}</p>
      <p><strong>Description:</strong> {bug.description}</p>
      <p><strong>Status:</strong> {bug.status}</p>
      <p><strong>Priority:</strong> {bug.priority}</p>
      <p><strong>Assigned To:</strong> {bug.assignedTo}</p>
      <button onClick={() => navigate(-1)}> Back</button>
    </div>
  );
};

export default BugDetailsPage;
