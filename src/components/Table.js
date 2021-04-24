import { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Buttons from "./Buttons";

const Table = () => {
  const [books, setBooks] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [status, setStatus] = useState(false);
  const getData = async () => {
    let url = "http://localhost:8080/api/books/getall";
    const response = await axios.get(url);
    console.log("response", response);
    setBooks(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderHeader = () => {
    let headerElement = [
      "Select",
      "Title",
      "Year of Publishing",
      "ISBN",
      "Cover Price",
      "Status",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  const renderBody = () => {
    return (
      books &&
      books.map((bks) => {
        return (
          <tr key={bks._id}>
            <td className="selectBook">
              <input
                type="radio"
                name="bookSelected"
                onChange={() => {
                  setSelectedId(bks._id);
                  if (bks.status === "in") {
                    setStatus(true);
                  } else if (bks.status === "out") {
                    setStatus(false);
                  }
                  // console.log(selectedId);
                }}
              />
            </td>
            <td>{bks.title}</td>
            <td>{bks.publishYear}</td>
            <td>{bks.ISBN}</td>
            <td>{bks.coverPrice}</td>
            <td>{bks.status}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div>
      <ReactBootStrap.Table bordered hover responsive>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </ReactBootStrap.Table>

      <Buttons id={selectedId} status={status} />
    </div>
  );
};
export default Table;
