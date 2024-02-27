import React from "react";

import "./Navbar.css";
import rocket from "/img/rocket.png";
import star from "/img/glowing-star.png";
import idButton from "/img/id-button.png";
import memo from "/img/memo.png";
import order from "/img/package.png";
import lock from "/img/locked.png";
import LinkWithIcon from "./LinkWithIcon";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">Velocity Vibe</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="navbar_links align_center">
        <LinkWithIcon title="Home" link="/" emoji={rocket} />
        <LinkWithIcon title="Products" link="/products" emoji={star} />
        <LinkWithIcon title="Login" link="/login" emoji={idButton} />
        <LinkWithIcon title="Signup" link="/signup" emoji={memo} />
        <LinkWithIcon title="My Orders" link="/orders" emoji={order} />
        <LinkWithIcon title="Logout" link="/logout" emoji={lock} />
        <a href="/cart" className="align_center">
            Cart <p className="align_center cart_counts">0</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
