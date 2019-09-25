import React, { useState } from "react";
import styles from "./SampleComponent.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

const SampleComponent = ({ sample }) => {
  const [text, setText] = useState("안녕하세요.");
  return (
    <div>
      <div>{text}</div>
      <div>{sample}</div>
    </div>
  );
};

export default SampleComponent;
