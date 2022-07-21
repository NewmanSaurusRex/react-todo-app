import React from "react";

export default function Footer() {
  const footerStyle = {
    padding: "20px 0",
    lineHeight: "1.5",
  };

  return (
    <footer style={footerStyle}>
      <p
        style={{
          fontSize: "14px",
          fontWeight: "400",
          marginBottom: "24px",
          lineHeight: "1.5",
          color: "darkcyan",
          textTransform: "lowercase",
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        this app was coded by <a href="https://mnewman.io">MNewman</a>, is{" "}
        <a href="https://github.com/NewmanSaurusRex/react-todo-app/tree/master">
          open-sourced
        </a>{" "}
        and is hosted on <a href="/">Netlify</a>.
      </p>
    </footer>
  );
}
