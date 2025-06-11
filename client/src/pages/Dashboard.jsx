import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [scholarships, setScholarships] = useState([]);
  const [filteredScholarships, setFilteredScholarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/scholarships/huggingface')
      .then(res => {
        const rawData = res.data;

        // Grouping by Instructions
        const grouped = {};
        rawData.forEach(entry => {
          const title = entry.Instructions;
          if (!grouped[title]) grouped[title] = {};
          grouped[title][entry.Input] = entry.Output;
        });

        const formatted = Object.keys(grouped).map(title => ({
          title,
          ...grouped[title]
        }));

        setScholarships(formatted);
        setFilteredScholarships(formatted);
      });
  }, []);

  // Handle Search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = scholarships.filter(s =>
      s.title.toLowerCase().includes(term)
    );
    setFilteredScholarships(filtered);
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to the Dashboard</h2>
      <input
        type="text"
        placeholder="Search scholarships..."
        className="form-control my-3"
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredScholarships.map((s, index) => (
        <div key={index} className="card my-3 p-3">
          <h5>{s.title}</h5>
          {s.Eligibility && <p><strong>Eligibility:</strong> {s.Eligibility}</p>}
          {s.Benefits && <p><strong>Benefits:</strong> {s.Benefits}</p>}
          {s["Income Limit"] && <p><strong>Income Limit:</strong> {s["Income Limit"]}</p>}
          {s["Age Limit"] && <p><strong>Age Limit:</strong> {s["Age Limit"]}</p>}
          {s["Education Level"] && <p><strong>Education Level:</strong> {s["Education Level"]}</p>}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
