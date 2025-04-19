import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBugs, deleteBugById } from '../util/localStorHelper';

const Home = () => {
  const [bugs, setBugs] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setBugs(getBugs());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this bug?')) {
      deleteBugById(id);
      setBugs(getBugs());
    }
  };

  const filteredBugs = bugs.filter((bug) =>
    bug.title.toLowerCase().includes(search.toLowerCase()) &&
    (statusFilter ? bug.status === statusFilter : true) &&
    (priorityFilter ? bug.priority === priorityFilter : true)
  );

  return (
    <div>
      <div>
        <button onClick={() => navigate('/add-bug')}>Add Bug</button>
        <input className='search'
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
          <option value="">All Status</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
        <select onChange={(e) => setPriorityFilter(e.target.value)} value={priorityFilter}>
          <option value="">All Priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <table border="1" cellPadding="8px">
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Assigned To</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBugs.map((bug) => (
            <tr key={bug.id}>
              <td>{bug.title}</td>
              <td>{bug.priority}</td>
              <td>{bug.status}</td>
              <td>{bug.assignedTo}</td>
              <td>
                <button onClick={() => navigate(`/bug/${bug.id}`)}>View</button>
                <button onClick={() => navigate(`/edit-bug/${bug.id}`)}>Edit</button>
                <button onClick={() => handleDelete(bug.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredBugs.length === 0 && (
            <tr><td colSpan="5">No bugs found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
