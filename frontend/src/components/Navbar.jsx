import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          📅 Habit Tracker
        </a>

        <div className="ms-auto">
          <button className="btn btn-light btn-sm">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;