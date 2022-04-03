import "./App.css";
import { motion } from "framer-motion";

import Menu from "../Menu";
import { Fullpage } from "../Fullpage";

function App() {
  return (
    <div className="App">
      <Menu></Menu>

      <Fullpage></Fullpage>
    </div>
  );
}

export default App;
