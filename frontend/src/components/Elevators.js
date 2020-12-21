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
  const panel = [...props.floors].reverse();
  useEffect(() => {
    if (
      props.disabledPanel &&
      props.disabledPanel.disable &&
      props.disabledPanel.elevator === props.id
    ) {
      setDisabled(props.disabledPanel.disable);
    } else {
      setDisabled(false);
    }
  }, [props.disabledPanel, props]);

  return (
    <div>
      <Card className="mb-4">
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <Row className="text-center">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Card>
                <CardHeader>Tablero</CardHeader>
                <CardBody>
                  {props.floors &&
                    panel.map((floor, index) => (
                      <Row key={index}>
                        <Col className="mb-1">
                          <Button
                            className="tablero"
                            color="primary"
                            disabled={disabled}
                            onClick={() => {
                              props.actions.handleGoTo(
                                props.floor,
                                floor.name,
                                floor.id,
                                props.id
                              );
                            }}
                          >
                            {floor.name}
                          </Button>
                        </Col>
                      </Row>
                    ))}
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
                <Label>{props.floor}</Label>
              </Col>
            </Row>
            <Row className="text-center">
              {props.floors &&
                props.floors.map((floor, index) => (
                  <Col key={index}>
                    <CardText>{floor.name}</CardText>
                    <FontAwesomeIcon
                      icon={
                        floor.name === "PB"
                          ? faCaretSquareUp
                          : faCaretSquareDown
                      }
                      size="3x"
                      color={floor.name === "PB" ? "green" : ""}
                      onClick={() => {
                        props.actions.handleCallElevator(
                          props.floor,
                          floor.name,
                          floor.id,
                          props.id
                        );
                      }}
                    />
                  </Col>
                ))}
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
