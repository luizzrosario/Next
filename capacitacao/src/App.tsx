import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  function soma() {
    setContador((prev) => {
      return prev + 1
    })
  }

  return (
    <>
      <div id="conta a dor">
        <h1>Aqui o segredo:</h1>
        <p>{contador}</p>
        <button onClick={soma}>+</button>
      </div>
    </>
  );
}

export default App;
