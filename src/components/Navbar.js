import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
export default function Navbar(props) {
  const [isDark, setIsDark] = useState(true);
  const [selectedColor, setSelectedColor] = useState("#003583");
  let colorModeHandler = () => {
    return isDark ? "white" : "black";
  };
  let colorHandler = () => {
    const colorPicker = document.getElementById("colorPicker");
    setSelectedColor(colorPicker.value);
    console.log(selectedColor);
    setIsDark(isColorDark(selectedColor));
    document.body.style.color = isDark ? "#ffffff" : "#000000";
    function isColorDark(color) {
      const rgb = parseInt(color.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luminance < 128;
    }
    return selectedColor;
  };
  return (
    <nav
      className={`navbar navbar-expand-lg  `}
      style={{ backgroundColor: `${selectedColor}` }}
    >
      <div className="container">
        <a
          className="navbar-brand"
          href="/"
          style={{
            color: `${colorModeHandler()}`,
            fontSize: "30px",
            fontWeight: "900",
          }}
        >
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/"
                style={{ color: `${colorModeHandler()}` }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                style={{ color: `${colorModeHandler()}` }}
              >
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: `${colorModeHandler()}` }}
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <label
            htmlFor="exampleColorInput"
            className="form-label"
            style={{ color: `${colorModeHandler()}` }}
          >
            Color picker
          </label>
          <input
            type="color"
            className="form-control form-control-color"
            id="colorPicker"
            value={`${selectedColor}`}
            title="Choose your color"
            onChange={colorHandler}
          />
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            } m-4`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: `${colorModeHandler()}` }}
            >
              Toggle Mode
            </label>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={`btn ${
                props.mode === "light" ? "btn-outline-primary" : "btn-primary"
              }`}
              type="submit"
              style={{ color: `${colorModeHandler()}` }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  logo: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  logo: "your logo",
  home: "your home",
};
