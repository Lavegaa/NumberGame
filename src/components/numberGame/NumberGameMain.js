import React from "react";
import styled from "styled-components";
import TileList from "./TileList";
import Timer from "./Timer";

const Title = styled.div`
  font-size: 50px;
  font-weight: 1000;
  margin: 10px 0 30px 600px;
`;

const GameFrame = styled.div`
  width: 440px;
  height: 440px;
  float: left;
  display: flex;
  flex-flow: wrap;
  margin-left: 350px;
  margin-bottom: 30px;
  border: 2px solid;
`;

const NumberGameMain = ({
  tiles,
  targetNumber,
  isActive,
  handleClick,
  handleInit,
  handleToggleActive
}) => {
  return (
    <>
      <Title>숫자게임</Title>
      <GameFrame>
        <TileList
          tiles={tiles}
          targetNumber={targetNumber}
          handleClick={handleClick}
          handleToggleActive={handleToggleActive}
        />
      </GameFrame>
      <Timer isActive={isActive} handleInit={handleInit} handleToggleActive={handleToggleActive} />
    </>
  );
};

export default NumberGameMain;
