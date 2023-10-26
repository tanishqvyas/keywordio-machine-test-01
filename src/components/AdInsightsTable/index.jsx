import React from "react";

// components
import SectionWithHeader from "../SectionWithHeader";

// mui
import { DataGrid } from "@mui/x-data-grid";

// constants
import { columnsFormat1 } from "../../constants/columnFormats.constants";

// mocks
import { rows } from "../../__mocks__";

const AdInsightsTable = () => {
  const finalRow = rows.reduce(
    (accumulator, curObj) => {
      return {
        clicks: accumulator.clicks + curObj.clicks,
        cost: accumulator.cost + curObj.cost,
        conversions: accumulator.conversions + curObj.conversions,
        revenue: accumulator.revenue + curObj.revenue,
      };
    },
    {
      clicks: 0,
      cost: 0,
      conversions: 0,
      revenue: 0,
    }
  );

  const aggregate = {
    id: "aggr",
    campaign: "Total",
    ...finalRow,
  };

  return (
    <SectionWithHeader
      heading="Ad Insights"
      infoText="This section contains the insights related to created ads"
    >
      <DataGrid
        rows={[...rows, aggregate]}
        columns={columnsFormat1}
        autoPageSize={false}
        hideFooterPagination={true}
        hideFooter={true}
      />
    </SectionWithHeader>
  );
};

export default AdInsightsTable;
