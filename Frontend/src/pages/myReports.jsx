import React, { useState } from "react";
import ReportCard from "../components/reports/reportCard";
import "../styles/myReport.css";
import { Link } from "react-router-dom";

const MOCK_REPORTS = [
  { id: 1, type: "Domestic Violence", status: "Under Review", trackingCode: "SAFE-2024-001", date: "Dec 20, 2024", location: "New York, NY" },
  { id: 2, type: "Workplace Harassment", status: "Investigating", trackingCode: "SAFE-2024-002", date: "Dec 18, 2024", location: "Los Angeles, CA" },
  { id: 3, type: "Digital Abuse", status: "Received", trackingCode: "SAFE-2024-003", date: "Dec 15, 2024", location: "Chicago, IL" },
];

const STATUSES = ["All Reports", "Received", "Under Review", "Investigating", "Resolved"];

const ReportsDashboard = () => {
  const [activeStatus, setActiveStatus] = useState("All Reports");

  const filteredReports =
    activeStatus === "All Reports"
      ? MOCK_REPORTS
      : MOCK_REPORTS.filter((r) => r.status === activeStatus);

  const summaryCounts = MOCK_REPORTS.reduce(
    (acc, report) => {
      acc.total++;
      if (report.status === "Received") acc.received++;
      if (report.status === "Under Review") acc.underReview++;
      if (report.status === "Investigating") acc.investigating++;
      if (report.status === "Resolved") acc.resolved++;
      return acc;
    },
    { total: 0, received: 0, underReview: 0, investigating: 0, resolved: 0 }
  );

  return (
    <div className="reports-container">
      {/* HEADER */}
      <header className="reports-header">
       <Link to="/"><span className="back-link">← Back Home</span></Link> 
        <h1>Your Reports</h1>
        <p>Track, monitor and follow up on the reports you’ve submitted anonymously.</p>
      </header>

      <div className="reports-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">

          <div className="side-card">
            <h3 className="side-title">Filters</h3>
            <div className="status-filter">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  className={`status-btn ${activeStatus === s ? "active" : ""}`}
                  onClick={() => setActiveStatus(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="side-card summary-card">
            <h3 className="side-title">Summary</h3>
            <ul className="summary-list">
              <li><span>Total Reports</span> <strong>{summaryCounts.total}</strong></li>
              <li><span>Received</span> <strong>{summaryCounts.received}</strong></li>
              <li><span>Under Review</span> <strong>{summaryCounts.underReview}</strong></li>
              <li><span>Investigating</span> <strong>{summaryCounts.investigating}</strong></li>
              <li><span>Resolved</span> <strong>{summaryCounts.resolved}</strong></li>
            </ul>
          </div>
        </aside>

        {/* REPORTS LIST */}
        <main className="reports-list">
          {filteredReports.length ? (
            filteredReports.map((r) => <ReportCard key={r.id} report={r} />)
          ) : (
            <p className="empty-message">No reports found for "{activeStatus}"</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ReportsDashboard;
