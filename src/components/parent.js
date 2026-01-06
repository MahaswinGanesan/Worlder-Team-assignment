import React from "react";
import Child from "./child";

function Parent() {
  const users = [
    { id: 1, name: "Arulraj" },
    { id: 2, name: "Sandeep" },
    { id: 3, name: "Mahaswin" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parent Component</h2>
      <Child data={users} />
    </div>
  );
}

export default Parent;
