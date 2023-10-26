import React, { useState } from "react";
import styles from "./AdInsightsWithDonut.module.css";

// mui
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// icons
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import BackupTableIcon from "@mui/icons-material/BackupTable";

// components
import SectionWithHeader from "../SectionWithHeader";

// constants
import { donutLabels } from "../../constants/form.constants";

// charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdInsightsWithDonut = () => {
  // states
  const [showChart, setShowChart] = useState(true);
  const [chartBy, setChartBy] = useState("clicks");

  const handleToggleChange = () => {
    setShowChart((prev) => !prev);
  };

  const getData = (chartBy, dummy) => {
    const total = dummy.reduce((total, cur) => total + cur[chartBy], 0);

    const preparedData = {
      // preparing the label as per percentage
      labels: dummy.map(
        (item) =>
          `${item.group} ${((item[chartBy] / total) * 100).toFixed(2)} %`
      ),
    };

    // preparing data set
    preparedData["datasets"] = [
      {
        label: "",
        data: dummy.map((item) => item[chartBy]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ];

    return preparedData;
  };

  const dummy = [
    {
      group: "Male",
      clicks: 348,
      cost: 12528,
      conversions: 42,
      revenue: 62118,
    },
    {
      group: "Female",
      clicks: 692,
      cost: 24912,
      conversions: 35,
      revenue: 5175,
    },
    {
      group: "Unknown",
      clicks: 105,
      cost: 3943,
      conversions: 3,
      revenue: 4489,
    },
  ];

  const data = getData(chartBy, dummy);

  return (
    <div className={styles.container}>
      <SectionWithHeader
        heading="Ad Insights"
        infoText="This section contains the data related to created ads"
        others={
          showChart && (
            <TextField
              id="outlined-basic"
              select
              variant="standard"
              placeholder="Select a lable that best suits your ad"
              type="text"
              value={chartBy}
              onChange={(e) => {
                setChartBy(e.target.value);
              }}
            >
              {donutLabels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )
        }
      >
        {showChart ? (
          <div
            style={{
              width: "100%",
              maxHeight: "50vh",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Doughnut
              data={data}
              options={{
                plugins: {
                  legend: {
                    position: "right",
                  },
                },
              }}
            />
          </div>
        ) : (
          <div>Table</div>
        )}
      </SectionWithHeader>
      <div className={styles.toggle}>
        <ToggleButtonGroup
          color="primary"
          value={showChart}
          exclusive
          onChange={handleToggleChange}
          aria-label="insights representation"
        >
          <ToggleButton value={true} aria-label="insights donut chart">
            <DonutLargeIcon />
          </ToggleButton>
          <ToggleButton value={false} aria-label="insights data table">
            <BackupTableIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default AdInsightsWithDonut;
