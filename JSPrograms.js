//CASE STUDY-1     submitted by Anaswara M B 


//Question no:1
// Write a JavaScript function to get an array and to read the first element of an array.Check whether it is prime or not.
function isfirstelementprime(arr){
    if(arr.length ===0){                                    //check if the array is not empty
        return "Array is empty";
    }
    const firstelement=arr[0];                              //Get first element of the array

    if(isprime(firstelement)){                              //check if 1st element is a prime no.
        return `${firstelement} is a prime number`;
    } else {
        return `${firstelement} is not a prime number`;
    }
}
function isprime(num){                                      //function to check if a no. is prime
    if(num<= 1){
        return false;
    }
    for (let i = 2; i<=Math.sqrt(num); i++) {
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
const MyArray=[7,14,23,10];
const output= isfirstelementprime(MyArray);
console.log(output);






//Question no:2
//Write a JavaScript program to find the most frequent item of an array.
function findmostfrequentitem(arr){
    if (arr.length ===0){
        return "Array is empty";
    }
    const frequencytemp ={};                   //create an object to store the frequency of each item.
    
    arr.forEach(item => {                      //iterate through the array and count the frequency of each item
        frequencytemp[item]=(frequencytemp[item] || 0) + 1;
    });

    let mostfrequentitem;                     //find item with the highest frequency
    let highestfrequency =0;
    for (const item in frequencytemp) {
        if (frequencytemp[item] > highestfrequency){
            mostfrequentitem = item;
            highestfrequency = frequencytemp[item];
        }
    }
return `The most frequent item is: ${mostfrequentitem} (appears ${highestfrequency} times)`;
}
const MYarray =[1,2,3,4,2,2,5,6,4,2];
const result1 = findmostfrequentitem(MYarray);
console.log(result1);





//Question no:3
//Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.
for (let i = 0; i <=15; i++) {
  if (i % 2 === 0){
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}





//Question no:4
//Write a JavaScript program to find the sum of squares of the elements of an array.

function sumofsquares(arr){
    let sum =0;
    for (let i = 0; i< arr.length; i++) {         //iterate through array
     sum += arr[i] ** 2;                          //add the square of each element to the sum
    }
    return sum;
}
const myArray =[1,2,3,4,5];
const result =sumofsquares(myArray);
console.log(`The sum of squares is: ${result}`);