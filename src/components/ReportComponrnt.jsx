import DataContext from "../data/DataContext";
import "./ReportComponent.css";
import { useContext } from "react";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  // format number
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h4>ຍອດຄົງເຫຼືອ (ກີບ)</h4>
      <h1>{formatNumber((income - expense).toFixed(2))} (ກີບ)</h1>
      <div className="report-container">
        <div>
          <h4>ລາຍຮັບທັງໝົດ</h4>
          <p className="report plus">{formatNumber(income)} (ກີບ)</p>
        </div>
        <div>
          <h4>ລາຍຈ່າຍທັງໝົດ</h4>
          <p className="report minus">{formatNumber(expense)} (ກີບ)</p>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
