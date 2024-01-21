import { createContext } from "react";

// Provider (Parent) ດູແລ ແລະ ຈັດການຂໍ້ມູນ ແລ້ວນຳໄປສົ່ງໃຫ້ Component
// Consumer (Children) ນຳຂໍ້ມູນທີ່ໄດ້ຈາກ Provider ໄປສ້າງ ຫຼຶ ສະແດງຜົນໃນ Component
const DataContext = createContext();

export default DataContext