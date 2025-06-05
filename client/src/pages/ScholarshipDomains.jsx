import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const domains = [
  {
    title: "School-Level Scholarships",
    description: "For students from Class 1 to 10 including NMMS and Pre-Matric schemes.",
    link: "/scholarships/school",
  },
  {
    title: "Undergraduate Scholarships",
    description: "Scholarships for students pursuing bachelor's degrees across streams.",
    link: "/scholarships/undergraduate",
  },
  {
    title: "Engineering Scholarships",
    description: "For students pursuing B.Tech, B.E., and related technical degrees.",
    link: "/scholarships/engineering",
  },
  {
    title: "Medical Scholarships",
    description: "Support for MBBS, BDS, and other medical stream students.",
    link: "/scholarships/medical",
  },
  {
    title: "Commerce & Management",
    description: "Scholarships for B.Com, BBA, MBA, and related domains.",
    link: "/scholarships/commerce",
  },
  {
    title: "Postgraduate Scholarships",
    description: "Scholarships for students pursuing master's programs in any discipline.",
    link: "/scholarships/postgraduate",
  },
];

const ScholarshipDomains = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary mb-5 fw-bold">Explore Scholarship Categories</h1>
      <div className="row g-4">
        {domains.map((domain, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{domain.title}</h5>
                <p className="card-text flex-grow-1">{domain.description}</p>
                <a href={domain.link} className="btn btn-outline-primary mt-3 align-self-start">
                  View Scholarships
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipDomains;