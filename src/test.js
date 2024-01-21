// block scope
// var x = 10
// let y = 50

//      if (x === 10) {
//       let y = 500
//       console.log("y = ", y);
//      }
//      console.log("yd = ", y);
//      let r = 50
// r = 300
// console.log("r", r);

// Arrow function
// ແບບເດີມ

// function fullname(name,lname) {
//     return name + lname;
// }

// console.log(fullname("phong","ptt"));

// Object work
// const username = "phongsvath";
// const age = 24;
// const lname = "pppp"
// const phong= {
//     username,
//     age,
//     lname,
// };
// console.log(phong);

// const color = ["22","434","65656"];
// const colors = ["00","99", ...color];
// const Newcolor = ["phong","ppt"];

// colors.push(...Newcolor);
// console.log(colors);

// rest Parameter

// function summation(x,y) {
//     return x+y
// }

// function summation(...numberArray) {
//     let total = 0
//     for( let number of numberArray) total += number
//     return total;
//     // return x+y+z+w
// }


// // console.log(summation(50,100));
// console.log(summation(500,100));
// console.log(summation(500,100));
// console.log(summation(500,100));
// console.log(summation(500,100));
// console.log(summation(500,100));

// Array
// const color = ["pp","oo","ii"]
// const phong = color[0]
// const red = color[1]
// const  yellow = color[2]
// console.log(phong);
// console.log(red);
// console.log(yellow);


// Destructuring ການສະຫຼາຍໂຄງສ້າງ
// const [pp,,ii] = color
// console.log(pp);
// console.log(ii);
// console.log(pp);
// console.log(oo);
// console.log(ii);

// Object
// const product = {
//     productname: "computer",
//     price: 300000,
//     stock: 45
// }
// keep name product
// const names = product.productname;
// console.log(names);

//ວິທີການຫຼຸດຮູບເພື່ອບໍ່ໃຫ້ ເຂົ້າເຖິງ ຕົວປ່ຽນຫຼາຍຄັ້ງ

// const {productname,price,stock} = product
// const {productname:productname,price:price,stock:stock} = product
// console.log(productname);
// console.log(price);
// console.log(stock);


// Defualt prameter
// function getDataCustomers(customerName,customerAddress="phongsavath")  {
//     const address  = `phong : ${customerName}
//     oo : ${customerAddress}`
//     return address
// }
// console.log(getDataCustomers("sdsdsds"));
// console.log(getDataCustomers("wewwewewe","klklklk"));

//join
// const data = [100,200,300]
// const result = data.join()
// console.log(data);
// console.log(result);

// concat
// const data1 = [100,200,300]
// const data2 = [100,200]
// const AllData = data1.concat(data2)
// console.log(AllData);

// push ເພີ່ມທາງດ້ານຫລັງ
// const data = [100,200,300]
// data.push(4545)
// data.push(...[100,200])
// console.log(data);

//pop ລົບທາງດ້ານ ຫລັງ 
// const data = [100,200,300]
// data.pop()
// console.log(data);


// shift ລົບດ້ານໜ້າ
// const data = [100,200,300]
// data.shift()
// console.log(data);

// unshift ເພີ່ມຂໍ້ມູນທາງດ້ານໜ້າ
// const data = [100,200,300]
// data.shift()
// data.unshift(909090909)
// console.log(data);

// splice (ຕຳແໜ່ງທີ່ຈະລົບ,ຈຳນວນທີ່ຈະລົບ,ຕ້ອງການເພິ່ມຈຳນວນເຂົ້າໄປໃນ Array) 
// const data = [111,2222,3333,444,55555,6666]
// console.log(data);
// data.splice(1,2,2332)
// console.log(data);

// slice(ຕຳແໜ່ງເລິ່ມຕົ້ນ,ຕຳແໜ່ງສຸດທ້າຍ -1)
// const data = [111,2222,3333,444,55555,6666]
// console.log(data);
// const ldata = data.slice(1,3 -1)
// console.log(ldata);

// loop Array
// for loop
// const data = [1,2,3,4,5,6,7,8,9]
// for(let i = 0 ; i < data.length; i++){
//     if(data[i] >= 5) break;
//     console.log(`No ${i} = ${data[i]}`);
//     // console.log(data[i]);
// }


// forEach
// const data = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// data.forEach(el=> {
//       sum += el
//     // if (el>=5){
//     //     console.log("phong");
//     // } 
//     console.log(sum);
// })

// forOf
// const data = [1,2,3,4,5,6,7,8,9]
// for(const index of data) {
//     if (index >=5) break;
//     console.log(index);
// }

// ຄົ້ນຫາຂໍ້ມູນພາຍໃນ Array

// indexOf(ຂໍ້ມູນ)=>ຜົນການຄົ້ນຫາຕຳແໜ່ງ index ທີ່ຄົ້ນເຫັນ ຖ້າຄົ້ນບໍ່ເຫັນຈະໄດ້ -1
// const colors = ["ooo","ppp","ffff","sssss","rrrrr","wwwwww"]
// const index = colors.indexOf("ffff")
// console.log(index);

// find(ຂໍ້ມູນ)=> ຜົນການຄົ້ນຫາຈະໄດ່ຂໍ້ມູນ ທີ່ຄົ້ນເຫັນ ຖ້າຄົ້ນບໍ່ເຫັນຈະໄດ້ unfefined
// const colors = ["ooo","ppp","ffff","sssss","rrrrr","wwwwww"]
// const index = colors.find(el=>el === "rrrrr")
// console.log(index);

// findIndex(ຂໍ້ມູນ)=>ຜົນການຄົ້ນຫາຕຳແໜ່ງ index ທີ່ຄົ້ນເຫັນ ຖ້າຄົ້ນບໍ່ເຫັນຈະໄດ້ -1
// const colors = ["ooo","ppp","ffff","sssss","rrrrr","wwwwww"]
// const index = colors.findIndex(el=>el === "rrrrr")
// console.log(index);

//Array map
// const colors = ["phong","phongsvath","temple","company","school","map"]
// const number = [23,34,23,656,34,67,34,878,34]
// const dataArray = colors.map((el,i) => {
    // const string = `123${el}`
    // return string
    // return  i
    // return `Date ${i+1} , phong = ${el}`
    // const s = el*2
    // return s
// })
// console.log(`Array Map = ${dataArray}`);

// Array filter
// const dataArray = [23,45,56,67,89,890,23,245,47676,5452343]
// const result = dataArray.filter((e=> {
//     return e<67
// }))
// const data = [
//     {name:"phong",salary:888888,department:"coding"},
//     {name:"phongsavath",salary:666666,department:"design"},
//     {name:"phongptt",salary:9999999,department:"programming"}
// ]

// const arrayData = data.filter((el => {
//     // check salary employee
//     return el.salary > 666666
// }))
// const arrayData = data.filter(e =>e.salary = 666666).filter(e=>e.department === "design")
// console.log(arrayData);

// Array reduce
const dataArray = [23,45,56,67,89,890,23,245,47676,5452343]
// const data = dataArray.map(e=>100)
// const filterData = dataArray.filter(e=>e>45)
// console.log(data);
// console.log(filterData);

// array.reduce((ຄ່າທີ່ຖືກປະມວນຜົນ,e)=>{}, defualt value) value = 0

const ppp = dataArray.reduce((value,e)=> {
    const total = e+value 
    return total
},0)
// value = 0
// total = 23+0
console.log(ppp);