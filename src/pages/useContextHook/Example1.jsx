import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export default function Example1() {
  const [style, setStyle] = useState("light");
  const [visible, setVisible] = useState(true);
  const [userName, setuserName] = useState("Rao");

  const toggleStyle = () => {
    setStyle((style) => (style === "light" ? "dark" : "light"));
  };

  const toggleVisible = () => {
    setVisible((Visible) => !Visible);
  };
  return (
    <div>
      <h2>Example1</h2>
      <ThemeContext.Provider
        value={{
          style,
          toggleStyle,
          visible,
          toggleVisible,
          userName,
          setuserName,
        }}
      >
        <p>USER : {userName}</p>
        <hr />
        <FirstChild></FirstChild>
      </ThemeContext.Provider>
    </div>
  );
}

function FirstChild() {
  const { style, toggleStyle, visible, toggleVisible, userName } =
    useContext(ThemeContext);
  return (
    <div className="bg-green-300">
      <p>Hello !!! {userName}</p>
      <p>
        The theme is <em>{style}</em> and state of visibility is
        <em> {visible.toString()}</em>
      </p>
      <button onClick={toggleStyle}>Change Theme</button>
      <button onClick={toggleVisible}>Change Visibility</button>
      <hr />
      <GrandChild></GrandChild>
    </div>
  );
}

function GrandChild(params) {
  const { style, toggleStyle, userName, setuserName } =
    useContext(ThemeContext);
  return (
    <div className="bg-yellow-200">
      <p>
        Theme : {style} :<button onClick={toggleStyle}>Change Theme</button>{" "}
      </p>
      <p>
        Change User Name :{" "}
        <input
          type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </p>
    </div>
  );
}
