// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// console.log(fruits);
//accessing

// console.log(fruits[2]);

// fruits[1] = "pinapple";
// console.log(fruits);

// fruits[4] = "pinapple";
// console.log(fruits);


// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// for(let i = 0; i<fruits.length; i++){
//     // console.log("Element at index", i, "is", fruits[i]);
//     console.log(`Element at index ${i} is ${fruits[i]}`);
    
// }

//for of loop

// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// for(let fruit of fruits){ //fruit = iterable variable ....receive values fgrom array(iterable)
//     console.log(fruit.toUpperCase());
    
// }

//using for of loop on string
// let text = "Something"
// for(let texts of text){ 
//      console.log(texts);
// }

// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// fruits.push("Grapes");
// console.log(fruits);

// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// // fruits.pop();
// // console.log(fruits);

// let remItem = fruits.pop()
// console.log(remItem);

// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// fruits.unshift("banana");
// console.log(fruits);

// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// fruits.shift();
// console.log(fruits);

//
// let fruits = ["apple", "banana", "kiwi", "watermelon"]
// let a = fruits.toString();



let fruits = ["apple", "banana", "kiwi", "watermelon"]
// fruits.splice(1, 1, "lichi");
// fruits.splice(2, 2);
fruits.splice(2, 0, "lichi");
console.log(fruits);
