import React from "react";
import backgroundImage from "./restaurant-background.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <div className="card">
        <h3 className="card-header">
          React Restaurant{" "}
          <HeaderCartButton onClick={props.onShowCart} />
        </h3>
      </div>
      <div>
        <img
          src={backgroundImage}
          className="img-fluid image-size"
          alt="React restaurant image"
          style={{ minWidth: 100 + "%", maxHeight: 50 + "vh" }}
        />
      </div>
    </>
  );
};

export default Header;
