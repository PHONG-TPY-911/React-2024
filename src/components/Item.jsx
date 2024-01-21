import PropTypes from "prop-types"; // ES6
import "./Item.css";

const Item = (props) => {
  // props destructuring
  const { title, amount } = props;

  //ຄ່າທີ່ສົ່ງມາເປັນ ຄ່າລົບ || ຄ່າລົບ
  const status = amount < 0 ? "Expense" : "Income";
  //create keep (+,-)
  const symbol = amount < 0 ? "-" : "+";

   // format number
   const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <li className={status}>
        {/* ວິທີແກ້ ເມື່ອປ້ອນຄ່າເປັນລົບ --3000 to -3000 = Math.abs */}
        {title}
        <span>
          {symbol} {formatNumber(Math.abs(amount))}
        </span>
      </li>
    </div>
  );
};
// props type validation
Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
