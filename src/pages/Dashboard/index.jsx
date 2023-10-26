import React from "react";
import styles from "./Dashboard.module.css";

// components
import AdInsightsWithDonut from "../../components/AdInsightsWithDonut";
import AdInsightsTable from "../../components/AdInsightsTable";

const Dashboard = () => {

  return (
    <div className={styles.container}>
      <AdInsightsTable />
      <AdInsightsWithDonut />
    </div>
  );
};

export default Dashboard;
