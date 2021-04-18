import { useState, useEffect, useMemo } from "react";
import Table from "./Table";
import "./App.css";

function App() {
  const columns = useMemo(() => [
    {
      Header: "Books",
      columns: [
        {
          Header: "Name",
          accessor: book.title,
        },
        {
          Header: "Year of Publishing",
          accessor: book.publishYear,
        },
        {
          Header: "Cover Price",
          accessor: book.coverPrice,
        },
        {
          Header: "ISBN",
          accessor: book.ISBN,
        },
        {
          Header: "Status",
          accessor: book.status,
        },
      ],
    },
  ]);

  getTableData = () => {};
  return useEffect(() => {});
}

export default App;
