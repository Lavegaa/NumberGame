import React from "react";
import styled, { css } from "styled-components";

const GameTile = styled.div`
  width: 110px;
  height: 110px;
  box-sizing: border-box;
  border: 1px solid;
  color: black;
  font-size: 50px;
  flex: 1 1 1;
  text-align: center;
  padding-top: 10px;

  ${props =>
    props.done &&
    css`
      border-color: black;
      color: lightgray;
    `}
`;

const Tile = ({ key, number, done, handleClick, handleToggleActive }) => {
  const handleTile = number => {
    handleClick({ clickedNumber: number });
    handleToggleActive({ clickedNumber: number });
  };
  return (
    <GameTile key={key} done={done} onClick={() => handleTile({ number })}>
      {number}
    </GameTile>
  );
};

const TileList = ({ tiles, handleClick, handleToggleActive }) => {
  return (
    <>
      {tiles.map(tile => (
        <Tile
          key={tile.key}
          number={tile.number}
          done={tile.done}
          handleClick={handleClick}
          handleToggleActive={handleToggleActive}
        />
      ))}
    </>
  );
};

export default TileList;
