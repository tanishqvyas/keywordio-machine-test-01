import React from "react";

// components
import SectionWithHeader from "../SectionWithHeader";
import AggregateRow from "../AggregateRow";

// mui
import { DataGrid } from "@mui/x-data-grid";

// constants
import { columnsFormat1 } from "../../constants/columnFormats.constants";

// mocks
import { rows } from "../../__mocks__";

const AdInsightsTable = () => {
  let finalRow = rows.reduce(
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

  return (
    <SectionWithHeader
      heading="Ad Insights"
      infoText="This section contains the insights related to created ads"
    >
      <DataGrid
        aria-label="Insights table"
        density="comfortable"
        rows={rows}
        columns={columnsFormat1}
        autoPageSize={false}
        hideFooterPagination={true}
        hideFooter={true}
      />
      <AggregateRow
        row={finalRow}
        columnFormat={columnsFormat1}
        totalCellWidth={columnsFormat1[0].width}
      />
    </SectionWithHeader>
  );
};

export default AdInsightsTable;
