function exampleFunction(firstName,lastName){
    return firstName+ ' ' + lastName;
}

// Easy way to make function- ES6
const example = () => 'HELLO WORLD';

const getFullName = (firstName,lastName) => firstName.toLowerCase()+ ' ' + lastName.toLowerCase();

console.log(exampleFunction('Yajindra','Gautam'));
console.log(getFullName('ELIZABETH','OLSEN'))

// Creating OBJECT containing function inside
let person = {
    name:'John',
    lastName: 'Doe',
    age: 30,
    address: 'Kathmandu',
    getFullName : function(){
        return this.name +' '+ this.lastName;
    },
    getAddress: function(){
        return this.address;
    },
    getAge: function(){
         return this.age;
    }
}

//PRINTING function inside OBJ
console.log(person.getAddress());
console.log(person.getFullName());
console.log(person.getAge());