import React from "react";
import styles from "./Dashboard.module.css";

// components
import SectionWithHeader from "../../components/SectionWithHeader";
import AdInsightsTable from "../../components/AdInsightsTable";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <AdInsightsTable />
      <SectionWithHeader
        heading="Ad Insights"
        infoText="This section contains the data related to created ads"
      />
    </div>
  );
};

export default Dashboard;
