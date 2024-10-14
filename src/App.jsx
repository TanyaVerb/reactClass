import { useState } from "react";
import Button from "./components/Button/Button";

function App() {
  const [initialState, setInitialState] = useState(0);
  console.log(initialState);

  console.log("render App");
  return (
    <>
      <Button
        title="+"
        onClick={() => setInitialState((prevState) => prevState + 1)}
      />
      <h1>{initialState}</h1>
      <Button
        title="-"
        onClick={() => setInitialState((prevState) => prevState - 1)}
      />
    </>
  );
}

export default App;
