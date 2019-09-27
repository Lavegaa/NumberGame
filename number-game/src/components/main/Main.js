import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TiSortNumericallyOutline } from "react-icons/ti";

const StyledMain = styled.div`
  * {
    color: black;
  }
  margin: 0 auto;
  width: 80%;
`;

const Title = styled.div`
  font-size: 50px;
  text-align: center;
  font-weight: 1000;
  margin: 30px 0 70px 0;
`;

const GameImg = styled.div`
  * {
    width: 300px;
    height: 300px;
  }
  padding: 20px 30px 20px 30px;
  border: 5px solid;
  border-radius: 16px;
  float: left;
`;

const Main = () => {
  return (
    <>
      <StyledMain>
        <Title>Game</Title>
        <Link to={"/numberGame"}>
          <GameImg>
            <TiSortNumericallyOutline />
          </GameImg>
        </Link>
      </StyledMain>
    </>
  );
};

export default Main;
