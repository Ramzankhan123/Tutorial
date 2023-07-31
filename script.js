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

//Q1) FIND THE LEAST ELEMENT IN ARRAY IN 0 INDEX
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


// SECOND APPROACH PART 2
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
//**************************************************************** */
//Q2) counting frequency in both arrays
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

// PART 2
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
//**************************************************************** */

//Anagrams 
//Q 3) 'hello' ---> 'olleh',
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

//**************************************************************** */
// Q4V****** checking pair of number sun is zero ******/
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
//----------optimum solution for find pair of number PART 2
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
//**************************************************************** */
//counting unique numbers
//Q 5)  [1,1,2,2,3,4,4,5,6,7,8,8]
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

//**************************************************************** */
//Q6) count largest sum of consecutive digits
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
// PART 2
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

//**************************************************************** */
//Q7) [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// find index number in sorted array 
// find index of 5
// aanswer should be 4

//##### Part 1######
//if i use for loop and compaire nuber to giver number
//then i am using for loop
// then complexity of -> liner O(n)
//###### Part 2#####
// devide and conquerer technique (binary seach)
// time complexity -> binary O(log(n))
// note -> jitna time ek element ka liya lgega utna complete algo ko legega that'y better than linear time complexity 

//step 1) find middle Element [1,2,3,4,5,6,7,8,9,10,11,12,13,14] ===>  8
//step 2) devide array if element samll [1,2,3,4,5,6,7]
//step 3) again step 1 fine middle elememt of [1,2,3,4,5,6,7] --> 4
// step4 ) repeat step 1 & 2
// function searchNumber(array,num){
//     let min = 0;
//     let max = array.length -1
//     while(min <= max){
//         let middleIndex = Math.floor((min + max)/2)
//         if(array[middleIndex]<num){
//             min = middleIndex + 1
//         }else if(array[middleIndex]>num){
//             max = middleIndex - 1
//         }else{
//             return middleIndex
//         }
//     }
//     return -1
// }
// console.log(">>>>>>>>>>",searchNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14],11))


//**************************************************************** */
// %%%%%%%%%%%%% New Topic Recursion %%%%%%%%%%

// case-a. N = 9
//    1001 => output will be 2 because binary gap 2 between 1
// case-b. N = 529
//    100001002 => output will be 4 because maximum binary gap 4
// case-c. if [1,1,1,1] => output will be 0
//       [0,0,0,0] => output will be 0     

// function PairOfSumZero(a){
//     let binary = (a>>>0).toString(2)
//     let i = 0;
//     let j = 1;
//     let d=0
//     while(j<binary.length){
//         if(binary[i]===binary[j]){
//             let sum = j-i-1 
//             if(sum > 0 && sum > d ){
//                 d=sum 
//             }
//             i = j
//             sum =0
//         }
//         j+=1
        
//     }
//     return d
// }
// console.log(">>>",PairOfSumZero(529))

//**************************************************************** */
// Question => Rotate an array to the right by a given number of steps in javascript 
// 
// function rotateArrayRight(arr, steps) {
//     if (!Array.isArray(arr) || arr.length === 0 || steps <= 0) {
//       return arr; // No need to rotate an empty array or with 0 steps
//     }
//     steps = steps % arr.length; // Ensure steps is within the array lengt
//     // Reverse the entire array
//     reverseArray(arr, 0, arr.length - 1);
//     // Reverse the first 'steps' elements
//     reverseArray(arr, 0, steps - 1);
//     // Reverse the remaining elements after 'steps'
//     reverseArray(arr, steps, arr.length - 1);
//     return arr;
//   }
  
//   function reverseArray(arr, start, end) {
//     while (start < end) {
//       const temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
//       start++;
//       end--;
//     }
//   }
  
//   // Test the function
//   const array = [1, 2, 3, 4, 5];
//   const stepsToRotate = 2;
//   const rotatedArray = rotateArrayRight(array, stepsToRotate);
//   console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
/// ***************************************************************************
/*
 [1,2,1,2,3] => A[0] : A[2] , A[1] : A[3]
             => A[4] unpair
Step 1 : Itterare array from there length 
step 2 : find pair and store t,
step3  : return unpaired element

*/

// function findPair(A){
//     let par = new Map()
    
//     for(let i of A){
//       // console.log("i",i)
//        if(par.has(i)){
//            par.set(i,par.get(i)+1)
//        }else{
//          par.set(i,1)
//        }
//     }
    
//    let unpairedElement;
//    for (const [key, value] of par.entries()) {
//      if (value === 1) {
//         unpairedElement = key;
//         break;
//       }
//     }
   
//    return unpairedElement
    
// }
// console.log("=>>>",findPair([1,2,1,2,3]))
/// **************************************************************************************************************************************************************************************************
/*
--------------------Task description---------------------------------------
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D
Count the minimal number of jumps that the small frog must perform to reach its target.Write a 
function:
function solution(X, Y, D);
that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
For example, given:
  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:
after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:
X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y. 
*/
// Solution 1
// function findPair(A,B,C){
//     let count = 0
//     let sum=A
//     while(sum < B){
//         sum = sum + C
//         count+=1
//     }
//     return count
// }
// console.log("=>>>",findPair(10,85,30))
// Solutin 2
// function findPair(X,Y,D){
//     let jump = parseInt((Y-X)/D) 
//     if((Y-X)%D!== 0 && (Y-X) > D) jump++
//     return jump
// }
// console.log("parir",findPair(10,85,30))

/*
****************************Task description*******************************
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:
function solution(A);
that, given an array A, returns the value of the missing element.
For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element
Write an efficient algorithm for the following assumptions:
N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
*/

/*. 

[1,2,3,4] = sum is 10
n * (n+1)/2
n= array length 
4*(4+1)/2 => 20/2 = 10

step 1 : expected array length 
step 2 : expected sum of element
step 3 : actual sum 
step 4 : expected - actual => element that missing

*/

// function FindMissEle(arr){
//     let n = arr.length + 1
//     let expectedsum = (n * (n + 1)/2)
//     let realSum = arr.reduce((acc,val,i)=> acc + val,0)
//     let missingval = expectedsum - realSum
//     return missingval
// }


// console.log("result=>",FindMissEle([2,3,1,5]))

/*
Scenario 2 :  if min value and max value given then find missing value
*/
// Test the function
// const array = [1, 3, 5, 9];
// const minNum = 1;
// const maxNum = 10;
// const missing = findMissingElements(array, minNum, maxNum);

// function findMissingElements(arr,min,max){
//      const missingElements = [];
//   const elementSet = new Set(arr);

//   for (let i = min; i <= max; i++) {
//     if (!elementSet.has(i)) {
//       missingElements.push(i);
//     }
//   }

//   return missingElements;
// }

// console.log("result=>",findMissingElements([1, 3, 5, 9],1,10))

/* 
********************************Task Description:
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
Any integer P, such that 0 is less than P and P is less than N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])
In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
For example, consider array A such that
  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
We can split this tape in four places:

P = 1, difference = |3 − 10| = 7
P = 2, difference = |4 − 9| = 5
P = 3, difference = |6 − 7| = 1
P = 4, difference = |10 − 3| = 7
Write a function:

class Solution { public int solution(int[] A); }
that, given a non-empty array A of N integers, returns the minimal difference that can be achieved
For example, given
  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above
Write an efficient algorithm for the following assumptions:
N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
*/