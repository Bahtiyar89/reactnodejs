import React, { useState } from "react";

function App() {
  const [count, setCount] = useState("naber");
  return <div className="App">{count}</div>;
}

export default App;
