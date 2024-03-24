import React from "react";
import { Table } from "antd";

export default function All({ scan, loading, error }) {
  // Table columns & specific rendering
  const columns = [
    {
        title: "Employé.e",
        dataIndex: "userName",
        key: "userName"
    },
    {
        title: "Client.e",
        dataIndex: "custName",
        key: "custName"
    },
    {
        title: "Adresse",
        dataIndex: "custAddress",
        key: "custAddress"
    },
    {
        title: "Horaire",
        dataIndex: "time",
        key: "time"
    },
    {
        title: "Début ou fin ?",
        dataIndex: "isStart",
        key: "isStart"
    }
  ];

  // Table config
  const size = "small";
  const bordered = true;
  const tableLayout = "fixed";
  const title = () => "Listing des badgeages des employé.e.s";

  // From Tables.js
  if (error) return <p>...Récupération des données erronée.</p>;

  return (
    <div className="AllStaffTable">
      <Table
        size={size}
        title={title}
        bordered={bordered}
        tableLayout={tableLayout}
        loading={loading}
        dataSource={scan}
        columns={columns}
      />
    </div>
  );
}
