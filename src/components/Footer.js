import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f5eded",
      }}
    >
      <p>© {new Date().getFullYear()} Bet Blocker. All Rights Reserved.</p>
      <p>
        <Link
          to="/privacy-policy"
          style={{ color: "#d72323", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>

        <Link
          to="/"
          style={{
            color: "#d72323",
            textDecoration: "underline",
            paddingLeft: "0.5rem",
          }}
        >
          Home
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
