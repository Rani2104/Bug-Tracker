import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBugs, getBugById, saveBugs } from '../util/localStorHelper';
import BugForm from '../components/BugForm';

const EditBug = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bug, setBug] = useState(null);

  useEffect(() => {
    const existingBug = getBugById(id);
    if (existingBug) {
      setBug(existingBug);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleUpdateBug = (updatedBug) => {
    const bugs = getBugs();
    const updatedList = bugs.map((bug) =>
      bug.id === id ? { ...updatedBug, id } : bug
    );
    saveBugs(updatedList);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Bug</h2>
      {bug && <BugForm onSubmit={handleUpdateBug} initialData={bug} />}
    </div>
  );
};

export default EditBug;
