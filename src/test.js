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
const username = "phongsvath";
const age = 24;
const lname = "pppp"
// const phong= {
//     username,
//     age,
//     lname,
// };

const phong= {
    username,
    age,
    lname,
    show(){
        console.log("object"+phong);
    }
};
phong.show();
// console.log(phong);