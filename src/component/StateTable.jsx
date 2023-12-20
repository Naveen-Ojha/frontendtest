import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiEndPoint } from "../enviroment";

export default function StateTable() {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);

  const getState = () => {
    setLoading(true);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiEndPoint}states`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setResponse(response.data.data[0].states);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">State Name</th>
              <th scope="col">Code</th>
            </tr>
          </thead>
          <tbody>
            {response.map((value, index) => {
              const { name, state_code } = value;
              return (
                <tr key={index + 1}>
                  <th scope="row">{index + 1}</th>
                  <td>{name}</td>
                  <td>{state_code}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
