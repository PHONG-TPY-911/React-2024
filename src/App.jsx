import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
// import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponrnt";

function App() {
  // const initState = [
  //   { id: 1, title: "pepsi", amount: 5000 },
  //   { id: 2, title: "khar saow noy", amount: 7000 },
  //   { id: 3, title: "khar brn phuk", amount: 10000 },
  //   { id: 4, title: "khar nam mun lod", amount: -10000 },
  //   { id: 5, title: "kar khao", amount: -10000 },
  // ];

  //create state to keep defualt initData
  const [items, setItems] = useState([]);
  // const [items, setItems] = useState(initState);

  // create calculator
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      // ຂໍ້ມູນທີ່ຖຶກສົ່ງມາຈະຢູ່ເທີງສຸດ newItem
      return [newItem, ...prevItem];
    });
    console.log("ຂໍ້ມູນທີ່ສົ່ງມາຈາກ Form Component", newItem);
  };

  // create calculator
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    console.log(amounts);
    // filter amounts get value income
    // .reduce((result)) calculator
    const income = amounts
      .filter((el) => el > 0)
      .reduce((total, el) => total + el, 0);
    // ບໍ່ຕ້ອງການໃຫ້ລາຍຈ່າຍຕິດຄ່າລົບ (value)*-1 = (amounts.filter(el=>el < 0).reduce((total, el) => total + el,0))*-1
    const expemse =
      amounts.filter((el) => el < 0).reduce((total, el) => total + el, 0) * -1;
    // console.log("ລາຍຮັບ = ", income);
    // console.log("ລາຍຈ່າຍ = ", expemse);

    // keep value to State
    setReportIncome(income);
    setReportExpense(expemse);
  }, [items]);

  // Reducer state
  const [showReport, setShowReport] = useState(false);
  // const [count, setCount] = useState(0);
  const reducer = (state, action) => {
    // ຈຳແນກປະເພດ
    switch (action.type) {
      case "SHOW":
      // case "ADD":
        return setShowReport(true);
        // return state + action.payload;
      // return state + 1
      case "HIDE":
      // case "SUB":
      return setShowReport(false);
        // return state - action.payload;
      // return state - 1
      // case "CLEAR":
      //   return 0;
    }
  };
  // how to use reducer and [result,dispatch] is value to show
  const [result, dispatch] = useReducer(reducer, showReport);
  // const [result, dispatch] = useReducer(reducer, count);
  return (
    // ເປັນການຈາຍຂໍ້ມູນໃຫ້ແຕ່ລະ component ໄດ້
    // <DataContext.Provider value={"Hello React JS"}>
    // send data multiple value
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={{ color: "red", textAlign: "center" }}>
          Program Accounting - Expense
        </h1>
        {/* use Reducer */}
        {showReport && <ReportComponent />}

        <FormComponent onAddItem={onAddNewItem} />

        {/* Send data props */}
        <Transaction items={items} />

        <p>{result}</p>
        {/* dispatch ເປັນຕົວກຳນົດ Action */}
        <button onClick={() => dispatch({ type: "SHOW"})}>
        {/* <button onClick={() => dispatch({ type: "ADD", payload: 10 })}> */}
          Show
        </button>
        <button onClick={() => dispatch({ type: "HIDE"})}>
        {/* <button onClick={() => dispatch({ type: "SUB", payload: 5 })}> */}
          hide
        </button>
        {/* <button onClick={() => dispatch({ type: "CLEAR" })}>ລ້າງ</button> */}
      </div>
    </DataContext.Provider>
  );
}

export default App;
