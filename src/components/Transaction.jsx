import Item from "./Item";
import "./Transection.css";

const Transaction = (props) => {

  //Get data props
  const { items } = props;
  return (
    <div>
      <ul className="item-list">
        {/* props & array map */}
        {items.map((el) => {
          // props & spread opreator
          return <Item {...el} {...el} key={el.id} />; // key props
        })}
      </ul>
    </div>
  );
};

export default Transaction;
