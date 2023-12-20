import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiEndPoint } from "../enviroment";
import StateTable from "./StateTable";
import SearchableDropdown from "../common/SearchableDropdown";

export default function HomePage() {
  const [response, setResponse] = useState([]);
  const [value, setValue] = useState("Select option...");

  const data = []

  const getCountry = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiEndPoint}iso`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setResponse(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCountry();
  }, []);

    response.map((val, index) => {
      data.push({ id: index + 1, name: val.name });
    });

  return (
    <>
      <div className="container">
        <h2 className="text-center my-5">Country Detail App</h2>

        <SearchableDropdown
          options={data}
          label="name"
          id="id"
          className="mb-5"
          selectedVal={value}
          handleChange={(val) => setValue(val)}
        />

        <StateTable />
      </div>
    </>
  );
}
