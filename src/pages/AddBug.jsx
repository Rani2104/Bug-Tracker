import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getBugs, saveBugs } from '../util/localStorHelper';
import BugForm from '../components/BugForm';

const AddBug = () => {
  const navigate = useNavigate();

  const handleAddBug = (bug) => {
    const newBug = { ...bug, id: Date.now().toString() };
    const bugs = getBugs();
    saveBugs([...bugs, newBug]);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Bug</h2>
      <BugForm onSubmit={handleAddBug} />
    </div>
  );
};

export default AddBug;
