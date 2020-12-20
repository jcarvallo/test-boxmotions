import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Label,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareDown,
  faCaretSquareUp,
} from "@fortawesome/free-solid-svg-icons";

const Elevators = ({ ...props }) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    if (
      props.disabledPanel &&
      props.disabledPanel.disable &&
      props.disabledPanel.elevator === props.name
    ) {
      setDisabled(props.disabledPanel.disable);
    } else {
      setDisabled(false);
    }
  }, [props.disabledPanel, props]);

  return (
    <div>
      <Card className="mb-4">
        <CardHeader>Ascensor {props.name}</CardHeader>
        <CardBody>
          <Row className="text-center">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>Tablero</CardHeader>
                <CardBody>
                  <Row>
                    <Col className="mb-1">
                      <Button
                        className="tablero"
                        color="primary"
                        disabled={disabled}
                        onClick={() => {
                          props.actions.handleGoTo(
                            props.origin,
                            "3",
                            props.name
                          );
                        }}
                      >
                        3
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-1">
                      <Button
                        className="tablero"
                        color="primary"
                        disabled={disabled}
                        onClick={() => {
                          props.actions.handleGoTo(
                            props.origin,
                            "2",
                            props.name
                          );
                        }}
                      >
                        2
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-1">
                      <Button
                        className="tablero"
                        color="primary"
                        disabled={disabled}
                        onClick={() => {
                          props.actions.handleGoTo(
                            props.origin,
                            "1",
                            props.name
                          );
                        }}
                      >
                        1
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mb-1">
                      <Button
                        className="tablero"
                        color="primary"
                        disabled={disabled}
                        onClick={() => {
                          props.actions.handleGoTo(
                            props.origin,
                            "PB",
                            props.name
                          );
                        }}
                      >
                        PB
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CardBody>
        <Card>
          <CardHeader>Pisos</CardHeader>
          <CardBody>
            <Row className="text-center">
              <Col className="mt-2 mb-4" xs="12" md={{ size: 6, offset: 3 }}>
                <Label>{props.origin}</Label>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <CardText title="Plata baja">PB</CardText>
                <FontAwesomeIcon
                  icon={faCaretSquareUp}
                  size="3x"
                  color="green"
                  onClick={() => {
                    props.actions.handleCallElevator(props.origin, "PB", props.name);
                  }}
                />
              </Col>
              <Col>
                <CardText title="Piso 1">1</CardText>
                <FontAwesomeIcon
                  icon={faCaretSquareDown}
                  size="3x"
                  onClick={() => {
                    props.actions.handleCallElevator(props.origin, "1", props.name);
                  }}
                />
              </Col>
              <Col>
                <CardText title="Piso 2">2</CardText>
                <FontAwesomeIcon
                  icon={faCaretSquareDown}
                  size="3x"
                  onClick={() => {
                    props.actions.handleCallElevator(props.origin, "1", props.name);
                  }}
                />
              </Col>
              <Col>
                <CardText title="Piso 3">3</CardText>
                <FontAwesomeIcon
                  icon={faCaretSquareDown}
                  size="3x"
                  onClick={() => {
                    props.actions.handleCallElevator(props.origin, "1", props.name);
                  }}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Card>
      <style jsx="true">{`
        label {
          font-family: ‘ds-digi’;
          width: 68px;
          height: 68px;
          font-size: 42px;
          border-radius: 6px;
          color: green;
          background-color: #212529;
          border: 1px solid green;
        }
        .tablero {
          width: 43px;
          height: 41px;
          border-radius: 50%;
          font-size: 12px;
        }
        .svg-inline--fa.fa-w-14 {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Elevators;
