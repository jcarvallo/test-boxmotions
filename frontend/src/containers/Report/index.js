import React from "react";
import { Table, Row, Col } from "reactstrap";
import withReport from "./withReport";

const Report = ({ ...props }) => {
  return (
    <>
      <Row className="mt-4 mb-4">
        <Col>
          <h1>Informe</h1>
        </Col>
      </Row>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Ascensor</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {props.report.length > 0 ? (
            props.report.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.elevator}</td>
                <td>{item.origin}</td>
                <td>{item.destiny}</td>
                <td>{item.times_call}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colspan={5} className="text-center">No hay movimientos registrados</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default withReport(Report);
