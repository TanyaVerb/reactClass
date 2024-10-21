import { useState } from "react";
import Button from "./components/Button/Button";
import { Input } from "./components/input/Input";
import "./globalStyle.css";
import { AddItemSection } from "./components/AddItemSection/AddItemSection";
import { ListItem } from "./components/ListItem/ListItem";

// const items = [<h1>"car"</h1>, <h2>"phone"</h2>, <h3>"bag"</h3>];
//const items =[<ListItem title="" />,<ListItem title="" />,<ListItem title="" />]
const items = [
  { label: "Todo1", id: 1 },
  { label: "Todo2", id: 2 },
  { label: "Todo3", id: 3 },
];

function App() {
  const [todos, setTodos] = useState([]);
  const [label, setLabel] = useState("");

  const handeleAddItem = () => {
    console.log("click Label:", label);
    setTodos((prevState) => [
      { label: label, id: new Date().getTime() },
      ...prevState,
    ]);
    setLabel("");
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setLabel(e.target.value); //
  };

  const handleRemoveItem = (id) => {
    console.log("Remove", id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const list = todos.length
    ? todos.map((item, index) => (
        <ListItem
          key={item.id}
          label={item.label}
          onClick={() => {
            handleRemoveItem(item.id);
          }}
        />
      ))
    : "Элементов нет";
  return (
    <section className="todo">
      <div className="todo-block">
        <AddItemSection
          onClick={handeleAddItem}
          onChange={handleInput}
          label={label}
        />
        {list}
      </div>
    </section>
  );
}

export default App;

/* <Button
        title="+"
        onClick={() => setInitialState((prevState) => prevState + 1)}
      />
      <h1>{initialState}</h1>
      <Button
        title="-"
        onClick={() => setInitialState((prevState) => prevState - 1)}
      /> */
