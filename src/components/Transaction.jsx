import Item from "./Item";
import './Transection.css'
// import DataContext from "../data/DataContext";
// import { useContext } from "react";
// uuid ເປັນການກຳນົດ key ທີ່ບໍ່ຊ້ຳກັນ
// import { v4 as uuidv4 } from 'uuid';


const Transaction = (props) => {
    // const data = [
        // {id: 1, title: 'ຄ່າອາຫານ',amount:11111},
        // {id: 2, title: 'ຄ່າສາວນ້ອຍ',amount:5555},
        // {id: 3, title: 'ຄ່າຫ້ອງນ້ຳ',amount:88888},
        // uuid ເປັນການກຳນົດ key ທີ່ບໍ່ຊ້ຳກັນ
    //     {title: 'pepsi',amount:11111},
    //     {title: 'khar saow noy',amount:5555},
    //     {title: 'khar brn phuk',amount:88888},
    // ];
    
    //Get data props
    const {items} = props

    //Get value from Provider to keep useContext
    // const name = useContext(DataContext)

    //Get value multiple 
    // const {income, expense} = useContext(DataContext)

    return (
      <div>
       <ul className="item-list">
       {/* <Item title={data[0].title} amount={data[0].amount} /> */}
       {/* <Item title={data[1].title} amount={data[1].amount} />
       <Item title={data[2].title} amount={data[2].amount} /> */}

        {/* props & array map */}
        {items.map((el) => {
            // props & spread opreator
            return <Item {...el} {...el} key = {el.id} /> // key props 
            // return <Item {...el} {...el} key = {el.id} /> // key props 
            // return <Item title={el.title} amount={el.amount} key = {uuidv4()} />; // key props 
        })}

       {/* <Item title="phongsavath" amount="11111"/>
       <Item title="phong" amount="3333"/>
       <Item title="ptt" amount="5555"/>
       <Item title="pkg" amount="77777"/> */}
       </ul>

       {/* ເປັນການຮັບເອົາຂໍ້ມູນ ຈາກ provider */}
        {/* <DataContext.Consumer>
          how to get value and show value
          {value=><p>{value}</p>}
        </DataContext.Consumer> */}
        {/* Can show value */}
        {/* {name} */}

         {/* Get value multiple is Provider */}
         {/* <p>Income : {income} Expense : {expense}</p> */}
      </div>
    );
  };

  export default Transaction