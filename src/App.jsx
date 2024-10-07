import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button title="Кнопка1" />
      <Button title="Кнопка2" type="isDanger" />
      <Button title="Кнопка3" type="isPrimary" />
    </>
  );
}

export default App;
