import "./style.css";

import Button from "../Button/Button";

export function ListItem(props) {
  const { label, onClick } = props;
  return (
    <li className="task" data-id="${taskId}">
      <div className="container-task">
        <p>{label}</p>

        {/* <button class="btn delete-btn">&#10060;</button> */}
        <Button title="&#10060;" onClick={onClick} />
      </div>
    </li>
  );
}
