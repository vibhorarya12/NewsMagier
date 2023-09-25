import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "10px",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "79px",
        marginTop: "15px",
      }}
    >
      <p style={{ fontSize: "10px" }}>
        <i>
          Disclaimer: The information provided on this website is for general
          informational purposes only. newsMagier does not guarantee the
          accuracy, completeness, or reliability of any news or information
          provided. Use the information at your own risk.
        </i>
      </p>
    </div>
  );
}
