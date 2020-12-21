import React, { useState, useEffect } from "react";
import { ElevatorsService, FloorService } from "../../services";
import { times } from "../../utils/time";
import { useStateValue } from "../../context";

const withHome = (Component) => (props) => {
  const ctx = useStateValue();
  const [disabledPanel, setDisabledPanel] = useState({});
  const [data, setData] = useState([]);
  const [floors, setFloors] = useState([]);
  const [loading, setloading] = useState(true);
  const [everyThreeMinutes, setEveryThreeMinutes] = useState(new Date());
  const [everyFourMinutes, setEveryFourMinutes] = useState(new Date());
  const [everyFiveMinutes, setEveryFiveMinutes] = useState(new Date());
  const [everySevenMinutes, setEverySevenMinutes] = useState(new Date());
  const [everyTenMinutes, setEveryTenMinutes] = useState(new Date());
  const [everyTwentyMinutes, setEveryTwentyMinutes] = useState(new Date());

  const getElevators = async () => {
    try {
      let elevators = await ElevatorsService.getElevators();
      setData(elevators);
      setloading(false);
    } catch (error) {}
  };
  const getFloors = async () => {
    try {
      let dataFloor = await FloorService.getFloors();
      setFloors(dataFloor);
    } catch (error) {}
  };
  // get services
  useEffect(() => {
    ctx[1]({
      type: "setButtonNav",
      buttonNav: { text: "Informe", path: "/reports" },
    });
    getElevators();
    getFloors();
  }, []);
  // get services

  // disabled panel
  useEffect(() => {
    const interval = setTimeout(() => {
      setDisabledPanel({ ...disabledPanel, disable: false });
    }, 5000);
    return () => clearTimeout(interval);
  }, [disabledPanel]);
  // disabled panel

  // cada 3 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setEveryThreeMinutes(new Date());
    }, 180000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let callElevatorNow = async () => {
      let hours = everyThreeMinutes.getHours();
      if (data.length > 0) {
        let calls = [];
        for (const i of data) {
          calls.push({
            origin: i.floor,
            floor_id: i.floor_id,
            floor: `${i.id}`,
            times_call: times(),
            elevator: i.id,
          });
        }
        if (hours >= 18 && hours <= 20) {
          for (const call of calls) {
            let newElevators = await ElevatorsService.updateLocation(
              call,
              call.elevator
            );
            if (newElevators.length > 0) {
              let elevatorCall = newElevators.filter(
                (i) => i.id === call.elevator
              );
              let destiny = {
                origin: elevatorCall[0].floor,
                floor_id: elevatorCall[0].floor_id,
                floor: "PB",
                times_call: times(),
                elevator: elevatorCall[0].id,
              };
              await ElevatorsService.updateLocation(destiny, destiny.elevator);
            }
          }
          getElevators();
        }
      }
    };
    callElevatorNow();
  }, [everyThreeMinutes]);
  // cada 3 minutos

  // cada 4 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setEveryFourMinutes(new Date());
    }, 240000); //240000
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let callElevatorNow = async () => {
      let hours = everyFourMinutes.getHours();
      if (data.length > 0) {
        let calls = [];
        for (const i of data) {
          calls.push({
            origin: i.floor,
            floor_id: i.floor_id,
            floor: `${i.id}`,
            times_call: times(),
            elevator: i.id,
          });
        }
        if (hours >= 14 && hours <= 15) {
          for (const call of calls) {
            let newElevators = await ElevatorsService.updateLocation(
              call,
              call.elevator
            );
            if (newElevators.length > 0) {
              let elevatorCall = newElevators.filter(
                (i) => i.id === call.elevator
              );
              let destiny = {
                origin: elevatorCall[0].floor,
                floor_id: elevatorCall[0].floor_id,
                floor: "PB",
                times_call: times(),
                elevator: elevatorCall[0].id,
              };
              await ElevatorsService.updateLocation(destiny, destiny.elevator);
            }
          }
          getElevators();
        }
      }
    };
    callElevatorNow();
  }, [everyFourMinutes]);
  // cada 4 minutos

  // cada 5 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setEveryFiveMinutes(new Date());
    }, 300000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let callElevatorNow = async () => {
      let hours = everyFiveMinutes.getHours();
      if (data.length > 0) {
        let elevators = data.filter((i) => i.id !== 3);
        let calls = [
          {
            origin: elevators[0].floor,
            floor_id: elevators[0].floor_id,
            floor: "PB",
            times_call: times(),
            elevator: elevators[0].id,
          },
          {
            origin: elevators[1].floor,
            floor_id: elevators[1].floor_id,
            floor: "PB",
            times_call: times(),
            elevator: elevators[1].id,
          },
        ];
        if (hours >= 9 && hours <= 11) {
          for (const call of calls) {
            let newElevators = await ElevatorsService.updateLocation(
              call,
              call.elevator
            );
            if (newElevators.length > 0) {
              let elevatorCall = newElevators.filter(
                (i) => i.id === call.elevator
              );
              let destiny = {
                origin: elevatorCall[0].floor,
                floor_id: elevatorCall[0].floor_id,
                floor: call.elevator === 1 ? "2" : "3",
                times_call: times(),
                elevator: elevatorCall[0].id,
              };
              await ElevatorsService.updateLocation(destiny, destiny.elevator);
            }
          }
          getElevators();
        }
      }
    };
    callElevatorNow();
  }, [everyFiveMinutes]);
  // cada 5 minutos

  // cada 7 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setEverySevenMinutes(new Date());
    }, 420000); //420000
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let callElevatorNow = async () => {
      let hours = everySevenMinutes.getHours();
      let calls = [];
      for (const i of data) {
        calls.push({
          origin: i.floor,
          floor_id: i.floor_id,
          floor: i.id === 1 ? "PB" : i.id === 2 ? "3" : "2",
          times_call: times(),
          elevator: i.id,
        });
      }

      if (hours >= 15 && hours <= 16) {
        for (const call of calls) {
          let newElevators = await ElevatorsService.updateLocation(
            call,
            call.elevator
          );
          if (newElevators.length > 0) {
            let elevatorCall = newElevators.filter(
              (i) => i.id === call.elevator
            );
            let destiny = {
              origin: elevatorCall[0].floor,
              floor_id: elevatorCall[0].floor_id,
              floor:
                elevatorCall[0].id === 1
                  ? "1"
                  : elevatorCall[0].id === 2
                  ? "3"
                  : "PB",
              times_call: times(),
              elevator: elevatorCall[0].id,
            };
            await ElevatorsService.updateLocation(destiny, destiny.elevator);
          }
        }
        getElevators();
      }
    };
    callElevatorNow();
  }, [everySevenMinutes]);
  // cada 7 minutos

  // cada 10 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setEveryTenMinutes(new Date());
    }, 600000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let callElevatorNow = async () => {
      let hours = everyTenMinutes.getHours();
      if (data.length > 0) {
        let elevators = data.filter((i) => i.id === 3);
        let call = {
          origin: elevators[0].floor,
          floor_id: elevators[0].floor_id,
          floor: "PB",
          times_call: times(),
          elevator: elevators[0].id,
        };

        if (hours >= 9 && hours <= 10) {
          let newElevators = await ElevatorsService.updateLocation(
            call,
            call.elevator
          );
          if (newElevators.length > 0) {
            let elevatorCall = newElevators.filter(
              (i) => i.id === call.elevator
            );
            let destiny = {
              origin: elevatorCall[0].floor,
              floor_id: elevatorCall[0].floor_id,
              floor: "1",
              times_call: times(),
              elevator: elevatorCall[0].id,
            };
            await ElevatorsService.updateLocation(destiny, destiny.elevator);
          }
          getElevators();
        }
      }
    };
    callElevatorNow();
  }, [everyTenMinutes]);
  // cada 10 minutos

  // cada 20 minutos
  useEffect(() => {
    const interval = setInterval(() => {
      setEveryTwentyMinutes(new Date());
    }, 1200000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let callElevatorNow = async () => {
      let hours = everyTwentyMinutes.getHours();
      let minutes = everyTwentyMinutes.getMinutes();
      let calls = [];
      for (const i of data) {
        calls.push({
          origin: i.floor,
          floor_id: i.floor_id,
          floor: "PB",
          times_call: times(),
          elevator: i.id,
        });
      }
      if (hours >= 11 && hours <= 18 && minutes >= 0 && minutes <= 20) {
        for (const call of calls) {
          let newElevators = await ElevatorsService.updateLocation(
            call,
            call.elevator
          );
          if (newElevators.length > 0) {
            let elevatorCall = newElevators.filter(
              (i) => i.id === call.elevator
            );
            let destiny = {
              origin: elevatorCall[0].floor,
              floor_id: elevatorCall[0].floor_id,
              floor:
                elevatorCall[0].id === 1
                  ? "2"
                  : elevatorCall[0].id === 2
                  ? "3"
                  : "1",
              times_call: times(),
              elevator: elevatorCall[0].id,
            };
            await ElevatorsService.updateLocation(destiny, destiny.elevator);
          }
        }
        getElevators();
      }
    };
    callElevatorNow();
  }, [everyTwentyMinutes]);
  // cada 20 minutos

  const actions = {
    data,
    floors,
    disabledPanel,
    loading,
    actionsElevator: {
      handleCallElevator: async (origin, destiny, floor_id, elevator) => {
        if (origin !== destiny) {
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
        }
      },
      handleGoTo: async (origin, destiny, floor_id, elevator) => {
        if (origin !== destiny) {
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
        }
      },
    },
  };
  return <Component {...actions} />;
};

export default withHome;
