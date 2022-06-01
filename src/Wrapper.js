import React from "react";

function Wrapper({ children }) {
  const styleForAll = {
    width: "100%",
    display: "flex"
  };
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <div style={styleForAll}>{children}</div>
    </>
  );
}
export default Wrapper;
