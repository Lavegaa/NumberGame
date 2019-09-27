import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Time = styled.div`
  font-size: 150px;
`;
const Button = styled.div`
  width: 400px;
  border: 10px solid;
  border-radius: 15px;
  margin-left: 800px;
  padding: 60px;
  text-align: center;
  font-size: 50px;
  font-weight: 900;
`;

const Timer = ({ isActive, handleInit }) => {
  const [seconds, setSeconds] = useState(0);

  function reset() {
    handleInit();
    setSeconds(0);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 0.017);
      }, 10);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <Time>{seconds.toFixed(1)}s</Time>
      <Button onClick={reset}>다 시 하 기</Button>
    </div>
  );
};
export default Timer;
