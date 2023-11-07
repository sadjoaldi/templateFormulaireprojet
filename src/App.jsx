import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TemplateForme from "./components/TemplateForme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TemplateForme />
      </div>
    </>
  );
}

export default App;
