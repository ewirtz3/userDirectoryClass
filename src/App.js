import React, { useState, useEffect } from "react";
import api from "./utils/api";
import User from "./utils/User";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [birthMonth, setBirthMonth] = useState("");

  useEffect(() => {
    api.getUsers().then(({ data }) => {
      setEmployees(data.results);
    });
    console.log("hit");
    console.log(employees);
  }, []);

  return <div>Hello World</div>;
}
