import React from "react";

const ReportCard = ({ report }) => {
  const getStatusClass = (status) => {
    return {
      Received: "badge-received",
      "Under Review": "badge-review",
      Investigating: "badge-investigating",
      Resolved: "badge-resolved",
    }[status] || "";
  };

  return (
    <div className="report-card">
      <div className="card-top">
        <h3>{report.type}</h3>
        <span className={`status-badge ${getStatusClass(report.status)}`}>
          {report.status}
        </span>
      </div>

      <div className="tracking">
        Tracking Code: <strong>{report.trackingCode}</strong>
      </div>

      <div className="meta">
        <span>{report.date}</span> • <span>{report.location}</span>
      </div>

     
    </div>
  );
};

export default ReportCard;
