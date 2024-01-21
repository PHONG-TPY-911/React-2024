import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./FormComponent.css";
import Swal from "sweetalert2";

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

    // Show SweetAlert
    Swal.fire({
      title: "ເພີ່ມຂໍ້ມູນ",
      text: "ເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ",
      icon: "success",
      confirmButtonText: "ໂອເຄ",
    });
    // clear data in the Use state
    setTitle("");
    setAmount(0);
  };

  //create useEffect to check state ແລະ ຈະຖຶກເອີ້ນໃຊ້ງານ ເມື່ອ state ມີການປ່ຽນແປງຄ່າ
  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0;
    setFormValid(checkData);
  }, [title, amount]);

  return (
    <div>
      <form onSubmit={saveItem}>
        <div className="form-control">
          <label htmlFor="">ຊື່ ລາຍການ</label>
          <input
            type="text"
            placeholder="ກາລຸນາປ້ອນຊື່"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">ຈຳນວນເງີນ</label>
          <input
            type="number"
            placeholder="(+income, - Expense)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            ເພີ່ມຂໍ້ມູນ
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
