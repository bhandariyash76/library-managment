import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigat = useNavigate();
  const handleNavigate = () => {
    navigat("/");
  };
  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={handleNavigate}>back</button>
      <button onClick={() => navigat("/register")}>Next</button>
    </>
  );
};

export default Dashboard;
