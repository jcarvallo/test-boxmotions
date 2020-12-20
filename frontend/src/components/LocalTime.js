import React, { useState, useEffect } from "react";

const LocalTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h4>Hora: {date.toLocaleTimeString()}</h4>;
};

export default LocalTime;
