import React from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import { navigate } from "@reach/router";
import { useStateValue } from "../context";

const Navegacion = () => {
  const ctx = useStateValue();

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Edificio Wayne</NavbarBrand>
        <div>
          <Button
            color="info"
            className="text-right"
            onClick={() => navigate(ctx[0].buttonNav.path)}
          >
            {ctx[0].buttonNav.text}
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
