import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ScholarshipList() {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/scholarships/huggingface")
      .then((res) => setScholarships(res.data))
      .catch((err) => console.error("Error fetching scholarships:", err));
  }, []);

  return (
    <div className="mt-4">
      <h4>Scholarships (via HuggingFace API)</h4>
      <ul className="list-group">
        {scholarships.map((scholarship, index) => (
          <li key={index} className="list-group-item">
            <strong>{scholarship.Scholarship_Name}</strong><br />
            <span><strong>Eligibility:</strong> {scholarship.Eligibility_Criteria}</span><br />
            <span><strong>Benefits:</strong> {scholarship.Benefits}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScholarshipList;
