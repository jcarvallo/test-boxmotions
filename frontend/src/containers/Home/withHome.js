import React, { useState, useEffect } from "react";
import { ElevatorsService, FloorService } from "../../services";
import { times } from "../../utils/time";
import { useStateValue } from "../../context";

const withHome = (Component) => (props) => {
  const ctx = useStateValue();
  const [disabledPanel, setDisabledPanel] = useState({});
  const [data, setData] = useState([]);
  const [floors, setFloors] = useState([]);
  let getElevators = async () => {
    try {
      let elevators = await ElevatorsService.getElevators();
      setData(elevators);
    } catch (error) {}
  };
  let getFloors = async () => {
    try {
      let dataFloor = await FloorService.getFloors();
      setFloors(dataFloor);
    } catch (error) {}
  };
  useEffect(() => {
    ctx[1]({
      type: "setButtonNav",
      buttonNav: { text: "Informe", path: "/reports" },
    });
    getElevators();
    getFloors();
  }, []);
  useEffect(() => {
    const interval = setTimeout(() => {
      setDisabledPanel({ ...disabledPanel, disable: false });
    }, 5000);
    return () => clearTimeout(interval);
  }, [disabledPanel]);
  const actions = {
    data,
    floors,
    disabledPanel,
    actionsElevator: {
      handleCallElevator: async (origin, destiny, floor_id, elevator) => {
        setDisabledPanel({ ...disabledPanel, elevator, disable: true });
        let dataUpdate = {
          origin,
          floor_id,
          floor: destiny,
          times_call: times(),
        };
        let newElevators = await ElevatorsService.updateLocation(
          dataUpdate,
          elevator
        );
        setData(newElevators);
      },
      handleGoTo: async (origin, destiny, floor_id, elevator) => {
        setDisabledPanel({ ...disabledPanel, elevator, disable: true });
        let dataUpdate = {
          origin,
          floor_id,
          floor: destiny,
          times_call: times(),
        };
        let newElevators = await ElevatorsService.updateLocation(
          dataUpdate,
          elevator
        );
        setData(newElevators);
      },
    },
  };
  return <Component {...actions} />;
};

export default withHome;
