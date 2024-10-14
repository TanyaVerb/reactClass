import { classNames } from "../../utils/index.tsx";
import { useState } from "react";
import "./style.css";

function Button(props) {
  const { title, isDanger, isPrimary, isM, isL, onClick } = props;
  const [counter, setCounter] = useState(0);

  const [style, setStyle] = useState(false);

  console.log("render btn");
  return (
    <button
      className={classNames(
        "btn",
        {
          danger: isDanger,
          primary: isPrimary,
          btn_m: isM,
          btn_l: isL,
          onClick,
          temp: style,
        },
        ["color-red"]
      )}
      onClick={() => {
        onClick();
        setCounter((prevState) => prevState + 1);
        setStyle((prevState) => !prevState);
      }}
    >
      {`${title} - кликнули ${counter} раз`}
    </button>
  );
}

export default Button;

//rfc

// className("btn", { primary: isPrimary });
