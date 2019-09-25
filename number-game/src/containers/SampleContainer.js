import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SampleComponent from "../components/sample";
import { sampleAction, changeAction } from "../store/modules/samplemodule";
import StyledSample from "../components/StyledSample/StyledSample";

const SampleContainer = () => {
  const { sample } = useSelector(state => ({
    sample: state.samplemodule.sample
  }));

  const dispatch = useDispatch();

  const onChange = () => dispatch(changeAction("hello"));

  return (
    <div>
      <SampleComponent sample={sample} />
      <StyledSample onChange={onChange} sample={sample} />
    </div>
  );
};

export default SampleContainer;
