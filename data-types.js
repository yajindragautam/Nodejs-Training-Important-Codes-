// DATA TYPES IN NODE - JS
/* 
 1. OBJECT
 2. ARRAY
 3. NUMBER
 4. BOOLEAN
 5. FLOAT
 6. DATETIME
 7. NULL
 9. UNDEFINED
*/

// EXAMPLE OF DATATYPES
let a = 1; // --- Number
let b = 'Hello World' // --- String
let c  = true; // --- Boolen
let d = 1.5; //--- Float
let e = null; //--- Null

// CHECK DATA TYPES OF VALIABLE USING typeOf() Method
console.log(typeof a);
console.log( typeof b);
console.log(typeof c);
console.log(typeof c);
console.log(typeof d);

// Creating an OBJECT
let person ={
    name: 'Yajindra',
    lastName : 'Gautam',
    post : 'Programmer',
    age : 20,
    location: {
        lat: 27.7172453,
        lng: 85.3239605
    },
    phone: 9860840623,
    social: ['facebook/yajindra','instagram/codewithyaji']
}

// Accessing OBJECTS keys
console.log(person.name);
console.log(person.post);
console.log(person.age);
console.log('His Location Latitude is: '+ person.location.lat);
console.log('His Location Langitudde is: ' +person.location.lng);

// Creating ARRAY
let exampleArray = Array(1,2,3,4,5,6,7,8,9);
let exampleArray2 = [1,2,3,4,5,6,7,8,9];

// Priniting Array to console
console.log(exampleArray);
console.log(exampleArray2);

let studentNames = ['Yajindra','Gaurav','Ram','Shyam'];
console.log(studentNames[0]);

// Join two STRING and get it's LENGTH
let firstLetter = 'Hello';
let secondLetter = 'World';
let thirdLetter =  firstLetter + secondLetter;
console.log('Length of third Letter is: '+ thirdLetter.length);

// SLICE required(start index, endindex)
let exampleSlice = 'Hello World IIMS';
console.log(exampleSlice.slice(-5,-1))

// CONCAT two words
let firstWord = 'Hello';
let lastWord = 'World';
let replaceWord = 'IIMS';
let concatWord = firstWord.concat(lastWord);

// REPLACE word in STRING
console.log(concatWord.replace('World',replaceWord));

// Change STRING to Lower Case
let wordToLower = 'HELLO YAJINDRA';
console.log(wordToLower.toLowerCase());

//Change STRING to UPPER CASE
let wordToUpper = 'learning node is fun';
console.log(wordToUpper.toUpperCase());

// TRIN a STRING and get LENGTH
let wordToTrim = '  Programming is fun  ';
console.log(wordToTrim.length);
console.log(wordToTrim.trim());
console.log(wordToTrim.length);

// get SUNSTRING
let wordToSub = 'Hello Yajindra';
let result = wordToSub.substr(0);
console.log(result);

// get INDEXOF
let checkIndex = 'Hello yaji';
console.log(checkIndex.indexOf('yaji'));

// INCLUDES used to check
let checkInclude = 'Hello World';
console.log('Check if the checkInclude includes word '+ checkInclude.includes('World'));
console.log('Check if the checkInclude includes word '+ checkInclude.includes('yaji'));


// check char at
let checkCharAt = "I am from Kathmandu";
console.log(checkCharAt.length);
console.log("checkCharAt: ", checkCharAt.charAt(2));

