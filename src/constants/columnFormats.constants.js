export const columnsFormat1 = [
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
    align: "right",
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

export const columnsFormat2 = [
  {
    field: "group",
    headerName: "Group",
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
    align: "right",
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
