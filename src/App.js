import React, { useState, useEffect } from "react";
import api from "./utils/api";
import Employee from "./utils/User";
import User from "./utils/User";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [birthMonth, setBirthMonth] = useState("");

  useEffect(() => {
    api.getUsers().then(({ data }) => {
      console.log(data.results);
      setEmployees(data.results);
    });
    console.log("hit");
    console.log(employees);
  }, []);

  return (
    <>
      {employees.map((employee, i) => {
        const worker = new Employee(employee);
        console.log("employee", worker.results);
        const info = worker.getResults();
        console.log("hit", info);
        return <div key={i}>hello</div>;
      })}
    </>
  );
}
