import React, { useState, useEffect } from "react";

const withHome = (Component) => (props) => {
  const data = [
    {
      id: 1,
      name: "1",
      origin:'3'
    },
    {
      id: 2,
      name: "2",
      origin:'1'
    },
    {
      id: 3,
      name: "3",
      origin:'2'
    },
  ];
  const [disabledPanel, setDisabledPanel] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      setDisabledPanel({ ...disabledPanel, disable: false });
    }, 5000);
    return () => clearInterval(interval);
  }, [disabledPanel]);
  const actions = {
    data,
    disabledPanel,
    actionsElevator: {
      handleCallElevator: (origin, destiny, elevator) => {
        setDisabledPanel({ ...disabledPanel, elevator, disable: true });
        alert(`origen: ${origin} destino: ${destiny}`);
      },
      handleGoTo: (origin, destiny, elevator) => {
        //   setDisabledPanel({ ...disabledPanel, elevator, disable: true });
          alert(`origen: ${origin} destino: ${destiny}`);
      },
    },
  };
  return <Component {...actions} />;
};

export default withHome;
