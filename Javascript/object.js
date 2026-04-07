//syntax

//let objectName = {
// key1:val1,
// key2:val2,
// key3:val3,
//}

// let student={
//     name:"nitish",
//     isRegistered: true,
//     class: "bs85",
// }

// console.log(student);
// console.log(typeof student);

// console.log(student["name"])

// let abc = "name"
// console.log(student[abc]); evaluates the expression\

// console.log(student.abc); doesnt evaluate expression

// let student={
//     name:"Nitish",
//     isRegistered: true,
//     age: 25,
//     class: "bs85",
// }

//Adding a property
// student.id = "21354"

// console.log(student);

//updating existing property

// student.age = 20;
// console.log(student);

//delete the property
// delete student.id;
// console.log(student);

//nested objects
// let student={
//     name:"Nitish",
//     isRegistered: true,
//     age: 25,
//     greet:function(){
//         console.log("Hello", this.name, "how are you");
        
//     },
//     class: "bs85",
//     course: "FSD",
//     address:{
//         country: "USA",
//         zip:12345,
//         state: "NY",
//     }
// }

// console.log(student.address.zip);
// student.greet();
// let student={
//     name:"Nitish",
//     isRegistered: true,
//     age: 25,
//     greet(){
//         console.log("Hello", this.name, "how are you");
        
//     },
//     class: "bs85",
//     course: "FSD",
//     address:{
//         country: "USA",
//         zip:12345,
//         state: "NY",
//     }
// }

// console.log(student.address.zip);
// student.greet();

// let student={
//     name:"Nitish",
//     isRegistered: true,
//     age: 25,
//     course: "FSD",
//     Country: "Nepal",
// }
// let arr = Object.keys(student);
// console.log(arr);

// Object.keys(student).forEach((key)=>{
//     console.log(key, ":", student[key])
// })

// let value = Object.values(student);
// console.log(value);

// let arr = Object.entries(student);
// console.log(arr);

// Object.freeze(student);
// student.id = 3333;
// console.log(student); 


// Object.seal(student);
// student.id = 3333;
// console.log(student);

//for in loop
// for(let k in student){
//     console.log(k, ": " , student[k]);
// }


// let arr = ["abc", "iik", "llm", "jkl"]
// for(let idx in arr){
//     console.log(idx, ":", arr[idx]);
    
// }

///assignment 

const marks = {
    maths: 90,
    science: 78,
    java: 90,
    social: 80,
}

let newMarks = Object.values(marks)
console.log(newMarks);

// for(let k in marks){
//     console.log(k , ":", marks[k])
// }

