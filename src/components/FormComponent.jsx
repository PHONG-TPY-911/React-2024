import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FormComponent.css";

const FormComponent = (props) => {
  //create State
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  // event
  const inputTitle = (event) => {
    // How to set value to State
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    //keep data of State title, amount
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };

    // children to parent (buttom-up)
    props.onAddItem(itemData);
    // console.log("Record Data Successfully!", itemData);

    // clear data in the Use state
    setTitle("");
    setAmount(0);
  };

  //create useEffect to check state ແລະ ຈະຖຶກເອີ້ນໃຊ້ງານ ເມື່ອ state ມີການປ່ຽນແປງຄ່າ
  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0
    setFormValid(checkData)
    // if (checkData) {
    //     setFormValid(true)
    // }
  }, [title,amount]);
  
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label htmlFor="">Name List</label>
          <input
            type="text"
            placeholder="Enter name list"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">Quantity Money</label>
          <input
            type="number"
            placeholder="(+income, - Expense)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            Add Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
