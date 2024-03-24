import React, { useState, useEffect } from "react";

// Antd CSS
import "./scan.css";

// Scan Api service
import { scanService } from '@/_services';
import { API_URL } from "../../_utils/constants";
import { createAntdKeys } from "../../_utils/table";
// Scan Table
import All from "../Scan/Tables/All";

export default function ScanTables() {
//   Data
  const [scanAll, setScanAll] = useState([]);
//   States
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  /**
   * Get all scan from API.
   */
  useEffect(() => {
    // Get all scans
    scanService.getAllScans(API_URL)
      .then((response) => {
        const scanFromApi = response.data;
        // Transform uid property into key property because ants table needs it.
        const scanAll = createAntdKeys(scanFromApi);
        setScanAll(scanAll);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Do it only on the first render

  /**
   * Put staff vars into different tables
   */
  return (
    <div className="StaffTables">
      <All scan={scanAll} loading={isLoading} error={isError} />
    </div>
  );
}