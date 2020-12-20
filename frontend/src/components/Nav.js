import React from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { navigate } from "@reach/router";

const Navegacion = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Edificio Wayne</NavbarBrand>
        <div>
          <Button
            color="info"
            className="text-right"
            onClick={() => navigate("/reports")}
          >
            Informe
          </Button>
        </div>
      </Navbar>
      <style jsx="true">
        {`
          .navbar-expand-md {
            justify-content: space-between !important;
          }
        `}
      </style>
    </div>
  );
};

export default Navegacion;
