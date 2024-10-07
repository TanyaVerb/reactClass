import "./style.css";

function Button(props) {
  const { title, type } = props;
  let style = "";

  switch (type) {
    case "isDanger":
      style = "danger btn";
      break;

    case "isPrimary":
      style = "primary btn";

    default:
      style = "btn";
      break;
  }

  return (
    <button className={style} onClick={() => console.log(title)}>
      {title}
    </button>
  );
}

export default Button;

//rfc

// className("btn", { primary: isPrimary });
