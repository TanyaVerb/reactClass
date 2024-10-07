import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/dog.jpg";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function AppTemp() {
//   return (
//     <>
//       <Title />
//       {/* <Img /> */}
//     </>
//   );
// }

// function Title() {
//   return <h1>Hello world</h1>;
// }

// function Img() {
//   return (
//     <>
//       <img src={logo} alt="" />
//     </>
//   );
// }
root.render(<App />);
