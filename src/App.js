import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [clicked, setClicked] = useState(false);

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const handleCreateRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRgbColor();
    } else {
      handleCreateHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      className="App"
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default App;
