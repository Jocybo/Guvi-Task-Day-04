let person1 = {name : "Gilbert",age : "23"};
let person2 = {age : "23", name : "Gilbert"};
let res =JSON.stringify(person1)===JSON.stringify(person2);
console.log(res);