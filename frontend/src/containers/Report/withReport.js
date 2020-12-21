import React from "react";
import { useStateValue } from "../../context";
import { ReportService } from "../../services/index";

const withReport = (Component) => (props) => {
  const ctx = useStateValue();
  const [report, setReports] = React.useState([]);
  const getReport = async () => {
    try {
      let report = await ReportService.getReport();
      setReports(report);
    } catch (error) {}
  };
  React.useEffect(() => {
    ctx[1]({ type: "setButtonNav", buttonNav: { text: "Inicio", path: "/" } });
    getReport()
  }, []);
  const actions = { report };
  return <Component {...actions} />;
};

export default withReport;
