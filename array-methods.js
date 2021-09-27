/*
    ARRAY METHODS IS VERY IMPORTENT.
    THEREFORE TRY TO REMEMBER SLL THESE METHODS.
    FOLLOWING ARE 10 JAVASCRIPT ARRAY  METHODS
    *** forEach()
    *** includes()
    *** filter()
    *** map()
    *** reduce()
    *** some()
    *** every()
    *** sort()
    Array.from()
    Array.of()
*/

/*  1. forEach()
    Description: This method can help you to loop over array's items
*/
const arrayForEach = [1,2,3,4,5,6,7,8];
arrayForEach.forEach(items =>{
    console.log('Items of an Array Fetched using forEach(): '+ items);
});

/*  2. includes()
    Description: This method check if array includes the item in the array.
    and returns.
    true - if found
    false - if not found
*/

const arrayInclude = ['Yajindra','ukesh','Eliza'];
const arrayfound = arrayInclude.includes('Yajindra');
console.log('Item you are searching is :'+ arrayfound);

/*  3. filter() - it returns new array
    Description: The JavaScript filter array function is used to filter an array based on specified criteria. After filtering it returns an array with the values that pass the filter.
*/
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
// WRITING SAME FUNCTION USING ES6: let positive_array = numbers.filter(value => value >= 0);
let posetive_array = numbers.filter(function(valuse){{
    return valuse >= 0;
}})

console.log('List Of Posetive numbers using filter() : '+ posetive_array);

/*  4. map() - it returns new array
    Description: The map() method creates a new array with the results of calling a function for every array element.
*/
const arrayMap = [1,2,3,4,5,6,7,8];
const addOne = arrayMap.map(item => item + 1);
console.log(addOne);

/*  5. reduce() - 
    Description: The reduce() method applies a function against an accumulation and
    each element in the array(from letf to right) to reduce it to a single value.
*/
const reduceArray = [1,2,3,4,5,6,7,8];
const sum = reduceArray.reduce((total,value) => total + value);
console.log(sum);

/*  6. some() - 
    Description: This method check if at least one of array's item passed the condi tion. If passed, it return 'true' Otherwise 'flase'
*/

const someArray = [1,2,3,4,5,6,7,8];
// at least one element is greater then 4
const largeNum = someArray.some(num=> num > 4);
console.log('W'+largeNum);
// at least one element is less than or equal to  0
const smallNum = someArray.some(num=> num <= 0);
console.log(smallNum);

/*  7. every() - 
    Description: This method check if all of array's item passed the condi tion. If passed, it return 'true' Otherwise 'flase'
*/
const everyArray = [1,2,3,4,5,6,7,8];
// at least one element is greater then 4
const greaterFour = everyArray.some(num=> num > 4);
console.log('Greater Four is : '+greaterFour);
// at least one element is less than or equal to  0
const lessTen = everyArray.some(num=> num <= 0);
console.log('Less 10 is: '+ lessTen);

/*  8. sort() - 
    Description: This method used to arrange/sort array's item either ascending or descending
*/
const arrayShort = [1,2,3,4,5,6,7,8];
const alpha = ['e','d','g','k','y'];

// sort in descending order
descOrder = arrayShort.sort((a,b)=> a > b ? -1:1);
console.log('Array sort() in descending order: '+descOrder);

// sort in ascending orser
ascOrder = alpha.sort((a,b)=> a > b ? 1 : -1);
console.log('Array sort() in ascending order: '+ascOrder);

/*  9. Array.from() - 
    Description: This change all things that are array-like or iterable into true array especially when working with DOM.
*/
const fromArray = 'Yajindra';
const nameArray = fromArray.from(fromArray);
console.log(fromArray);
console.log(nameArray);