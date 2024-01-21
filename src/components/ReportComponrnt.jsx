import DataContext from "../data/DataContext";
import './ReportComponent.css'
import { useContext } from "react";

const ReportComponent = () => {
     {/* Get value multiple */}
    const {income, expense} = useContext(DataContext)
    return (
        <div>
            <h4>ຍອດຄົງເຫຼືອ (ກີບ)</h4>
            <h1>{income-expense} (kip)</h1>
            <div className="report-container">
                <div>
                    <h4>ລາຍຮັບທັງໝົດ</h4>
                    <p className="report plus">{income} (kip)</p>
                </div>
                <div>
                    <h4>ລາຍຈ່າຍທັງໝົດ</h4>
                    <p className="report minus">{expense} (kip)</p>
                </div>
            </div>
            {/* Get value multiple is Comsumer */}
            {/* <DataContext.Consumer>
                {context=><p>Income : {context.income} Expense : {context.expense}</p>}
            </DataContext.Consumer> */}

            {/* Get value multiple is Provider */}
            {/* <p>Income : {income} <br /> Expense : {expense}</p> */}
            {/* Kh huk ph der : {name} */}
        </div>
    );
}

export default ReportComponent;