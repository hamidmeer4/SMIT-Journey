// CHAPTER-15: ARRAYS

// Problem:
// for multiple values we would have to create multiple variables/containers
// var fruit0 = 'mango'
// var fruit1 = 'banana'
// var fruit2 = 'strawberry'

// Solution:
// to solve the above problem, we introduced the concept of arrays
// so, array is a container that can store multiple values

// create array
// var fruits = [];
// console.log(fruits);

// using emojis
// var fruits = ["🍌", "🥭", "🍏", "🍊", "🍓", "🍐"];
// var animals = ["🐱", "🐶", "🐄", "🐀", "🐅"];
// console.log(fruits);
// console.log(animals);
// document.write(animals);

// putting elements in an array
// var fruits = ["Banana", "Mango", "Apple", "Orange", "Strawberry"];

// accessing array elements, whole array
// console.log(fruits);

// accessing specific array elements
// concept of indices (singular: index)
// var hotelRooms = ["Ali", "Bilal", "Choudhry", "Danyal", "Faisal"];
// console.log(hotelRooms[4]);

// var animals = ["🐱", "🐶", "🐄", "🐀", "🐅"];
// console.log(animals[0]);

// mix different types
// heterogeneous data vs homogeneous data
// homogeneous: same type
// heterogeneous: different types
// var mixedData = [1, "hello", true, 3.5, "BYE"];
// console.log(mixedData);
// console.log(mixedData[1]);

// arrays in js are dynamic









// My own practice 

// accessing the specific array items 

// const fruit = ['banana','orange','strawberry','peach'];
// console.log(fruit[3])

// // whole array is accessing 
// console.log(fruit)


// index start will be zero


// different type of data = heterogenous 

// same type of data = homogenous 


// Problem of chapter 15 is remaining  > https://www.asmarterwaytolearn.com/js/15.html
// 


// 16 >  Adding and Removing Element and array 

// single Element add 

// const book = ['chemistry'];
// book.push("Maths")
// console.log(book)





// add element on empty arra7y 

// const book = [];
// book.push("physics")
// console.log(book)


// add Element at a specific position 

// var fruits = ["🍌", "🥭", "🍏", "🍊", "🍓", "🍐"];

// fruits[2] = "🍑"

// console.log(fruits)



// pop > remove last Element of the array 

// var fruits = ["🍌", "🥭", "🍏", "🍊", "🍓", "🍐"];
// fruits.pop()
// console.log(fruits)


// Problem 16 >  https://www.asmarterwaytolearn.com/js/16.html




// 17 Removing ,Inserting and Extracting 


// add and remove from the start position 

var fruits = ["🍌", "🥭", "🍏", "🍊", "🍓", "🍐"];
// fruits.shift()
// console.log(fruits)


// fruits.unshift("Hey hehe ")
// console.log(fruits)


// Splice > change the orignal array  and Slice > and slice not changing the original array  

// fruits.splice(2,0,"he i am hamid and im here replated ")
// console.log(fruits)
// const sliced = fruits.splice(2,0,"he i am hamid and im here replated ")
// console.log(fruits)
// console.log(sliced)


// slice > not changing the original array 
 
const spliced = fruits.splice(2,0,"hey Youuuu...")
// console.log(fruits)
console.log(spliced)


// pop ve splice > splice retur array 


// Problem 17 here > https://www.asmarterwaytolearn.com/js/17.html