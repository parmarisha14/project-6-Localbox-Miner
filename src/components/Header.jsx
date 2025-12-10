import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ handleSearch}) => {
  return (
    <nav className="navbar custom-nav">
      <div className="container d-flex justify-content-between align-items-center">
        <h2 className="nav-title">Employee Management</h2>

        <div className="d-flex align-items-center">
          <Link to="/" className="nav-text">Home</Link>
          <Link to="/viewdata" className="nav-text">View Data</Link>

          <input
            type="text"
            className="form-control"
            placeholder="Search Name or Department"
            
            onChange={handleSearch}
            style={{ width: "250px", marginLeft: "20px" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
