//for each

//Array.forEach(function(currentValue, ))

// let fruits = ["apple", "Mango", "Banana", "Kiwi", "orange"]
// fruits.forEach((curr, ind, arr)=>{
//     console.log(curr, "is at index", ind, "in the array", arr)
// })

// let nums = [1,2,3,4,5,6]
// nums.forEach((n)=>{
//     console.log(n*n);
// })

// let nums = [1,2,3,4,5,6]
// const newArr = nums.map((num,idx)=>{
//     return num * 2;
// })
// console.log("original array: ", nums);
// console.log("original array: ", newArr);


// let nums = [1,2,3,4,5,6,7,8,9]
// let evenNums = nums.filter((curr, idx)=>{
//     return curr % 2 === 0;
// })
// console.log("before ", nums);
// console.log(evenNums);

// const fName = ["nitish", "safalta", "sas", "ronaldo", "lulu"]
// const newFname=fName.filter((name)=>{
//     return name.length > 4;
// })
// console.log(fName);
// console.log(newFname);

// let nums = [1,2,3,4,5,6,7,8,9]
// let initialValue = 0;
// nums.reduce((acc, curr, idx)=>{
//     return acc + curr;
// }, initialValue)

//  let nums = [1,2,3,4,5,6,7,8,9]
// let initialValue = 0;
// let sum = nums.reduce((acc, curr, idx)=>{
//      return acc + curr;
//  }, initialValue)
// console.log(sum);

// let nums = [1,20,30,15,25,40,533,2,4,10]
// let initialValue = 1;
// let lowest = nums.reduce((acc,curr)=>{
//     return acc < curr?acc:curr
// }, initialValue)

// console.log(lowest);



let nums = [1,20,30,15,25,40,533,2,4,10]
let initialValue = 0;
let lowest = nums.reduce((acc,curr)=>{
    return acc < curr?acc:curr
}, initialValue)

console.log(lowest);


//assignment

