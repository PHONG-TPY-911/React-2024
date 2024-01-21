import PropTypes from "prop-types"; // ES6
// import DataContext from "../data/DataContext";
// import { useContext } from "react";
import "./Item.css";

const Item = (props) => {
  // props destructuring
  const { title, amount } = props;

  //ຄ່າທີ່ສົ່ງມາເປັນ ຄ່າລົບ || ຄ່າລົບ
  const status = amount < 0 ? "Expense" : "Income";
  // const status = amount < 0 ? "ລາຍຈ່າຍ" : "ລາຍຮັບ"
  //create keep (+,-)
  const symbol = amount < 0 ? "-" : "+";

   //Get value from Provider to keep useContext
  //  const name = useContext(DataContext)
  return (
    <div>
      <li className={status}>
        {/* ວິທີແກ້ ເມື່ອປ້ອນຄ່າເປັນລົບ --3000 to -3000 = Math.abs */}
        {title}
        <span>
          {symbol} {Math.abs(amount)}
        </span>
        {/* {props.title} <span>-{props.amount}</span> */}

        {/* ເປັນການຮັບເອົາຂໍ້ມູນ ຈາກ provider */}
        {/* <DataContext.Consumer>
          how to get value and show value
          {(value) => <p>{value}</p>}
        </DataContext.Consumer> */}

         {/* Can show value */}
      </li>
      {/* {name} */}
    </div>
  );
};
// props type validation
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
