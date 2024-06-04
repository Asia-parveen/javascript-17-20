// chapters 17-20
// ARRAYS AND LOOP
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let array = [[],[],[],[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let intArr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];

// 3. Write a program to print numeric counting from 1 to 10.

// for(let i =1; i <= 10; i++){
//     console.log(i);
// };
//  

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// console.log(`Multiplication of 2 length 15 \n`)
// let userNum = +prompt("Enter any number");
// for(let i = 1; i <=15; i++){
//     let res = userNum*i
//     console.log(`${userNum} * ${i} = ${res}`);
// };

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange","strawberry"];
// fruits.forEach((items) => {
//     console.log(items);

// }); 
// console.log(`\n Element at 0 index is ${fruits[0]}`);
// console.log(`\n Element at 1 index is ${fruits[1]}`);
// console.log(`\n Element at 2 index is ${fruits[2]}`);
// console.log(`\n Element at 3 index is ${fruits[3]}`);
// console.log(`\n Element at 4 index is ${fruits[4]}`);

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("counting<br>");

// for(let i = 1; i <= 15; i++){
//     document.write(`${i} ,`);
// };

// revers counting with loop
// for(let i = 10; i >= 1; i--){
    
//     document.write(`${i} <br>`);
// };

// document.write("even numbers <br>");
// for(let i=1; i <= 20; i++){
//     if(i % 2 == 0){
//        document.write(i + " <br>")
      
//     }
// }

// odd number
// document.write("odd numbers <br>");
// for(let i=1; i <= 20; i++){
//     if(i % 2 == 1){
//        document.write(i + " <br>")
      
//     }
// }

// let series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
// let newSeries = series.join(" ,");
// console.log(newSeries);
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let userInput = prompt("Welcome to ABC bakery! what do you want to order sir/maim?");
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// for(let i = 0; i <= A.length; i++){
//     if( userInput === A[i]){
//         console.log(`${userInput } is available`);
//     }else if ( userInput !== A[i]){
//         console.log(`${ userInput} is not aviaable`)
//     }
// }

// i have to do it again have a problem in it
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// function maximum () {
//     let array = [24, 53, 78, 91, 12];
//     let max = array[0]
//     for(let i=0; i < array.length; i++){
//         if(array[i] > max){
//             max= array[i]
//         }
//     }
//     document.write(`<b>Array items:<b> ${array}<br>`)
// document.write(`<b>The largest number in an array is<b> ${max}`);
    
// }
// maximum();


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// function minimum () {
//     let array = [24, 53, 78, 91, 12];
//     let max = array[0]
//     for(let i=0; i < array.length; i++){
//         if(array[i] < max){
//             max= array[i]
//         }
//     }
//          document.write(`<b>Array items:<b> ${array}<br>`)
//  document.write(`<b>The smallest number in an array is<b> ${max}`);
// }
// minimum();
    
// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for(let i = 1; i <= 20; i++){
//     let num = 5;
//      let res = num*i;
     
//      document.write(`\t \t ${res},` );
    
// }












