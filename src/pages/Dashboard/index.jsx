import React from "react";
import styles from "./Dashboard.module.css";

// mui
import { DataGrid } from "@mui/x-data-grid";

// components
import SectionWithHeader from "../../components/SectionWithHeader";

const columns = [
  {
    field: "campaign",
    headerName: "Campaigns",
    width: 150,
    align: "left",
    sortable: true,
  },
  {
    field: "clicks",
    headerName: "Clicks",
    width: 90,
    type: "number",
    sortable: true,
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 140,
    sortable: true,
    type: "number",
    align: "right",
    valueFormatter: (row) => `USD ${row.value.toLocaleString("en-US")}`,
  },
  {
    field: "conversions",
    headerName: "Conversions",
    type: "number",
    sortable: true,
    width: 160,
    align: "right",
  },
  {
    field: "revenue",
    headerName: "Revenue",
    type: "number",
    sortable: true,
    width: 140,
    align: "right",
    valueFormatter: (row) => `USD ${row.value.toLocaleString("en-US")}`,
  },
];

const rows = [
  {
    id: "1",
    campaign: "Cosmetics",
    clicks: 712,
    cost: 4272,
    conversions: 8,
    revenue: 16568,
  },
  {
    id: "2",
    campaign: "Serums",
    clicks: 3961,
    cost: 27331,
    conversions: 115,
    revenue: 362526,
  },
  {
    id: "3",
    campaign: "Facewash",
    clicks: 9462,
    cost: 76831,
    conversions: 123,
    revenue: 266800,
  },
  {
    id: "4",
    campaign: "Shampoos",
    clicks: 439,
    cost: 2151,
    conversions: 5,
    revenue: 11029,
  },
  {
    id: "5",
    campaign: "Conditioners",
    clicks: 1680,
    cost: 3864,
    conversions: 49,
    revenue: 175245,
  },
  {
    id: "6",
    campaign: "Facewash 2",
    clicks: 4878,
    cost: 29370,
    conversions: 189,
    revenue: 623106,
  },
];

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <SectionWithHeader
        heading="Ad Insights"
        infoText="This section contains the data related to created ads"
      >
        <DataGrid rows={rows} columns={columns} autoPageSize={false} />
      </SectionWithHeader>
      <SectionWithHeader
        heading="Ad Insights"
        infoText="This section contains the data related to created ads"
      />
    </div>
  );
};

export default Dashboard;
