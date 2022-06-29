//usefull links
//https://www.educative.io/courses/step-up-your-js-a-comprehensive-guide-to-intermediate-javascript/7nA1nGn3V6A
//


// 1. implicit and explicit binding
// var obj = {
//     name : 'Piyush',
//     display : function(){   // if we change arrow function then this keyword retuen all global window function
//        console.log(this.name)
//     },
// }
// var obj1 = {
//     name : 'ABC',
// }
// //obj.display()  -----> output will be Piyush
// //obj.display.call(obj1)      ------> output will be ABC
// obj.display.call(obj1)


//2. implement Caching / Memorize Function
// function MyMemorize(fn, context) {
//     const res = {};
//     return function (...args) {
//         var argsCache = JSON.stringify(args);
//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args)
//         }
//         return res[argsCache];
//     }
// }
// const clumsysquare = (num1, num2) => {
//     for (let i = 0; i < 1000000000; i++) {
//         return num1 * num2
//     }
// }
/// before memorize output
// 72413083
// First Call: 0.0908203125 ms
// 72413083
// Second Call: 0.02197265625 ms
// after memorize output
// 72413083
// First Call: 0.2392578125 ms
// 52 72413083
// Second Call: 0.02490234375 ms
// const Memorizeclumsysquare = MyMemorize(clumsysquare)
// console.time("First Call")
// console.log(Memorizeclumsysquare(9467, 7649))
// console.timeEnd("First Call")

// console.time("Second Call")
// console.log(Memorizeclumsysquare(9467, 7649))
// console.timeEnd("Second Call")


// 3. output based questions on Event loop

///https://www.jsv9000.app/
// console.log('a')
// setTimeout(()=> console.log("set") ,0) /// added into task queue 
// Promise.resolve(()=> console.log("pro")).then((res)=> res()) //added into micro task
// console.log('b')
////output wiil be
///a
///b
///pro  // micro task run
///set  // task queue run

/// 4. Infine curreing
// function add(a){
//     return function(b){
//         if(b) return add(a + b)
//         return a;
//     }
// }
// console.log(add(5)(10)(30)());

/// 5. Implement this code
///(const result = calc.add(10).multiple(5).subtract(30).add(10);)
// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a;
//         return this
//     },
//     multiple(a) {
//         this.total *= a
//         return this
//     },
//     subtract(a) {
//         this.total -= a
//         return this
//     },
// }
// const result = calc.add(10).multiple(5).subtract(30).add(10);
// console.log(result.total)

//<-----let , var ,const 

// obj1 = { a : 10}
// const obj2 = obj1;
// obj2.a = 20;
// console.log(obj1)
// console.log(obj2)
// let obj1;

// const f = n => n <= 1 ? 1: n * f(n-1);
// let g = f(4)

//   function func(a,b){
//       a += 1
//       b.push(1)
//   }
//   const a = 0
//   const b = []
//   func(a,b)
//   console.log(a,b)

//<--------- error Uncaught ReferenceError: Cannot access 'obj1' before initialization

//<-------------ALGORITHEM AND DATA STRUCTURE --------------------->//

// FIND THE LEAST ELEMENT IN ARRAY IN 0 INDEX
//[4,2,1,3,5]  <--- min number
//[1,2,3,4,5] -> a[0] - > 1 first approach
// step 1 : first element treated as small element
// step 2 : check second element is min like 3 < 4
// step 3 : i will be pretend min numb 3
// step 4 : repeat 2 and 3 again
//******************( EXAMPLE )**********************************
// function checkMinNum(array) {
//     if (!array.length) {
//         throw new Error("Array should not be empty")
//     } else if (array.length === 1) {
//         return array[0]
//     } else {
//         let currentMin = array[0]
//         for (let i = 1; i < array.length; i++) {
//               if(currentMin > array[i]){
//                 currentMin = array[i]
//               }
//         }
//         return currentMin
//     }
// }
// console.log("min value",checkMinNum([4,2,1,3,5]))


// SECOND APPROACH
//[4,2,1,3,5] < --- arrange all elements in accending order
// step 1 : Check IF first element is grater then second element 
// 4 > 2 ---> swap element here
// [2,4,1,3,5]
// now still compaire 0 element to 2 index element
// 2 > 1  --> swap element 
// [1,4,2,3,5]
//******************( EXAMPLE )**********************************
// Repeat this step till end
// function findMinElement(array) {
//     if (!array.length) {
//         throw new Error("Array should not be empty")
//     } else if (array.length === 1) {
//         return array[0]
//     } else {
//         for (let i = 0; i < array.length; i++) {
//             let outerElement = array[i];
//             // console.log("index",i,"outerElement",outerElement)
//             for (let j = i + 1; j < array.length; j++) {
//                 let innerElement = array[j]
//                 console.log("index",j,"innerElement",innerElement,"outerElement",outerElement)
//                 if (outerElement > innerElement) {
//                     array[j] = outerElement
//                     array[i] = innerElement
//                     innerElement = array[j]
//                     outerElement = array[i]
//                 }
//             }
//         }
//         return array[0]
//     }
// }
// console.log("min value>>>>",findMinElement([4,2,1,3,5]))

//counting frequency in both arrays
//[1,2,3,4] ===> [1,4,9,16]

// function checkIfSquareExist(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         let isSquare = false
//         for (let j = 0; j < arr2.length; j++) {
//              if(arr1[i]*arr1[i] === arr2[j]){
//                 isSquare = true
//              }
//              if(j === arr2.length -1){
//                  if(!isSquare){
//                      return false
//                  }
//              }
//         }
//     }
//     return true
// }
// console.log("is square exist",checkIfSquareExist([1,2,3],[1,4,16]))


// counting frequency 
// [1,2,4,2] ===>>  [1,4,4,16]
// {1 : 1,2 : 2,4: 1}
// {1:1,4: 2,16: 1}
// function checkFrequency(arr1, arr2) {
//     let mapArray1 = {};
//     let mapArray2 = {};
//     for (let item of arr1) {
//         mapArray1[item] = (mapArray1[item] || 0) + 1
//     }

//     for (let item2 of arr2) {
//         mapArray2[item2] = (mapArray2[item2] || 0) + 1
//     }

//     for (let key in mapArray1) {
//         if (!mapArray2[key * key]) {
//             return false
//         }
//         if (mapArray1[key] !== mapArray2[key * key]) {
//             return false
//         }
//     }
//     return true
//    // console.log("item in array", mapArray1, ">>>>>", mapArray2)
// }
// let result =checkFrequency([1, 2, 4, 2], [1, 4, 4, 16])
// console.log(">>>",result)



//Anagrams 
//Q) 'hello' ---> 'olleh',
// step 1 : first we check frequency of word in first array
// step 2 : check every element of second array to element of fitst arrrray
//         if element match then reduce count value 
// step 3: repeat stept 2 untile count 0 
// step 4 if specifica count value less then 0 then word not a anagram 
//        else word is anagram
//
//
//   
// function isAnagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false
//     }
//     let counter = {}
//     for (let letter of string1) {
//         counter[letter] = (counter[letter] || 0) + 1
//     }
//     for (let item of string2) {
//         if (!counter[item]) {
//             return false
//         }
//         counter[item] -= 1
//     }
//     return true
// }
//
// console.log("##", isAnagram('hello', 'llloeh'))
//****** checking pair of number sun is zero ******/
// input -> [-5,-4,-3,-2,0,2,4,6,8]
// output -> [-4,4]
//
// function getSumZeroPair(array1){
//   for(let number of array1){
//       for(let i =1 ; i < array1.length ; i++){
//           if(number + array1[i] == 0){
//               return [number,array1[i]]
//           }
//       }
//   }
// }
// console.log("pair of number >>",getSumZeroPair([-5,-4,-3,-2,0,2,4,6,8]))
//
//----------optimum solution for find pair of number
// function getSumZeroPair(arry) {
//     let left = 0
//     let right = arry.length - 1
//     while (left < right) {
//         let sum = arry[left] + arry[right]
//         if (sum === 0) {
//             return [arry[left], arry[right]]
//         } else if (sum > 0) {
//             right--
//         } else {
//             left++
//         }
//     }
// }
// console.log("pair of number >>", getSumZeroPair([-5, -4, -3, -2, 0, 2, 3, 6, 8]))

//counting unique numbers
//Q)  [1,1,2,2,3,4,4,5,6,7,8,8]
// i j
// algo
// step 1 ) assign i to 0 index and j to 1 index
// step2 ) compair i and j if both are same increment j
//           else increse i then replace value with j

// step 3) repeate step 2 until j equal to array length 
// step 4) unique value is starting from 0 to cuurent index of i

// function sortArray(array) {
//     let i = 0;
//     let j = 1;
//     while (j < array.length) {
//         if (array[i] === array[j]) {
//             j += 1
//         } else {
//             i += 1
//             array[i] = array[j]
//         }
//     }
//     return i + 1
// }

// console.log("pair of number >>", sortArray([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]))


// count largest sum of consecutive digits
// [1,2,3,4,3,5,4,6,7,8] 4
// array length 10 and total pair 7
// forrmula 10 -4 + 1 = 7
// function findLargSun(array, sum) {
//     if (sum > array.length) {
//         throw new Error("Num cannot be larger than array")
//     } else {
//         let maxSum = 0
//         for (let i = 0; i < array.length - sum + 1; i++) {
//             let tempSum = 0
//             for (let j = 0; j < sum; j++) {
//                 // console.log(">>",i,j)
//                 tempSum += array[j + i]
//             }
//             if (tempSum > maxSum) {
//                 maxSum = tempSum
//             }
//         }
//         return maxSum
//     }
// }
// let result = findLargSun([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4)
// console.log("result >", result)
// complexity =  (On^2)
//-------------lenear complexity logic
// function findLargSum(array, sum) {
//     let maxSum = 0;
//     let tempSum = 0;
//     if (sum > array.length) {
//         throw new Error("Num cannot be larger than array")
//     } else {
//         for (let i = 0; i < sum; i++) {
//             maxSum += array[i]
//         }
//         tempSum = maxSum
//         for(let j = sum ;j< array.length ; j++){
//             tempSum = tempSum - array[j-sum] + array[j]
//             maxSum = Math.max(maxSum,tempSum)
//         }
//         return maxSum
//     }
// }
// const result = findLargSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8],4)
// console.log("result", result)







