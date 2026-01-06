import React from "react";

function Child({ data }) {
  return (
    <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            width: "150px",
            textAlign: "center",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h4>ID: {item.id}</h4>
          <p>Name: {item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Child;
