import React from "react";

export default function Header() {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "96px",
          fontWeight: "600",
          marginBottom: "46px",
          lineHeight: "16px",
          color: "rgb(297, 41, 180)",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        To Do List
      </h1>
    </header>
  );
}
