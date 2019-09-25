import React, { useEffect } from "react";
import styled from "styled-components";

const StyledSample = ({ onChange, sample }) => {
  useEffect(() => {});
  return (
    <>
      <div>{sample}</div>
      <button onClick={onChange}>hi</button>
    </>
  );
};

export default StyledSample;
