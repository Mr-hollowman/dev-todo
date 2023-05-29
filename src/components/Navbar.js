import React from "react";

export default function Navbar({activebar, changeMenu}) {
  return (
    <nav>
      <span
        className={activebar === "All" ? "active" : ""}
        onClick={changeMenu}
      >
        All
      </span>
      <span
        className={activebar === "Active" ? "active" : ""}
        onClick={changeMenu}
      >
        Active
      </span>
      <span
        className={activebar === "Completed" ? "active" : ""}
        onClick={changeMenu}
      >
        Completed
      </span>
    </nav>
  );
}
