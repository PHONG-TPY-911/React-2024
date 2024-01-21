import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import "./App.css";
import { useState, useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponrnt";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

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
      .reduce((total, el) => total + el, 0).toFixed(2);
    const expemse =
      ((amounts.filter((el) => el < 0).reduce((total, el) => total + el, 0)) * -1).toFixed(2);
    // keep value to State
    setReportIncome(income);
    setReportExpense(expemse);
  }, [items]);
  return (
    <DataContext.Provider
      value={{ income: reportIncome, expense: reportExpense }}
    >
      <div className="container">
        <h1 style={{ color: "red", textAlign: "center" }}>
          ໂປຣແກຣມ ລາຍຮັບ - ລາຍຈ່າຍ
        </h1>

        <Router>
          <div>
            <ul className="horizantai-menu">
              <li>
                <Link to="/">ຂໍ້ມູູນບັນຊີ</Link>
              </li>
              <li>
                <Link to="/insert">ບັນທຶກຂໍ້ມູນ</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<ReportComponent />} />
              <Route
                exact
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                    <Transaction items={items} />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
