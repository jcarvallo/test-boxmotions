import React from "react";
import withHome from "./withHome";
import { Elevators, LocalTime, Loading } from "../../components";
import { Row, Col } from "reactstrap";
// import { Button } from "reactstrap";

const Home = ({ ...props }) => {
  return (
    <div>
      {props.loading && (
        <Row>
          <Col className="text-center">
            <Loading />
          </Col>
        </Row>
      )}
      {!props.loading && (
        <>
          <Row className="mt-4 mb-4">
            <Col>
              <h1>Ascensores</h1>
            </Col>
            {/* <Col className="mt-2 text-right">
              <Button>Agregar Ascensor</Button>
            </Col> */}
          </Row>
          <Row className="mt-4 mb-4 text-right">
            <Col>
              <LocalTime />
            </Col>
          </Row>

          <Row>
            {props.data.length > 0 &&
              props.data.map((acensor, index) => (
                <Col xs="6" key={index}>
                  <Elevators
                    {...acensor}
                    disabledPanel={props.disabledPanel}
                    actions={props.actionsElevator}
                    floors={props.floors}
                  />
                </Col>
              ))}
          </Row>
        </>
      )}
    </div>
  );
};

export default withHome(Home);
