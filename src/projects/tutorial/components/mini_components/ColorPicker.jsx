import React, { useState } from "react";

function ColorPicker(params) {
  const [color, setColor] = useState("#FFFFFF");
  const [inputHandle, setInputHandle] = useState("");

  function handleColorChange(event) {
    setColor((c) => event.target.value);
  }

  function handleInputHexCode() {
    if (inputHandle.startsWith("#") && inputHandle.length === 7) {
      setColor((c) => (c = inputHandle));
      setInputHandle((c) => (c = ""));
    } else {
      alert("Please Provide A real Hex code :)");
    }
  }

  function copyColorToClipboard() {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        alert("Color copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  }
  return (
    <div className="card">
      <div className="container">
        <div
          className="items-center p-5 rounded-md border border-white-95"
          style={{ backgroundColor: color }}
        >
          <p onClick={copyColorToClipboard} className="font-semibold">
            Selected Color:{color}
          </p>
        </div>

        <div className=" m-4 items-center justify-center flex-wrap ">
          <label className="text-lg font-bold"> Select a Color:</label>
          <input type="color" value={color} onChange={handleColorChange} />
          <input
            className="m-2 pt-2 pb-4 border border-green-75 rounded-md overflow-hidden w-full"
            type="text"
            onChange={(e) => setInputHandle(e.target.value)}
            value={inputHandle}
            placeholder="Type in Hex Code..."
          />
          <button className="primary-btn" onClick={handleInputHexCode}>
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
