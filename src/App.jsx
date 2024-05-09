import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer, NavBar } from "./javascript";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
