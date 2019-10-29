import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NumberGameMain from "../components/numberGame/NumberGameMain";
import { initialize, clickTile, toggleActive } from "../store/modules/numbergame";

const NumberGameContainer = () => {
  const { tiles, targetNumber, isActive } = useSelector(state => ({
    tiles: state.numbergame.tiles,
    targetNumber: state.numbergame.targetNumber,
    isActive: state.numbergame.isActive
  }));
  const dispatch = useDispatch();

  const onInitialize = () => dispatch(initialize());
  const onClickTile = clickedNumber => dispatch(clickTile(clickedNumber));
  const onToggleActive = clickedNumber => dispatch(toggleActive(clickedNumber));
  return (
    <div>
      <NumberGameMain
        tiles={tiles}
        targetNumber={targetNumber}
        isActive={isActive}
        handleClick={onClickTile}
        handleInit={onInitialize}
        handleToggleActive={onToggleActive}
      />
    </div>
  );
};

export default NumberGameContainer;
