//in object we have the key pair value. it can be anything i.e can be int, string .

let car = {
  color: "black",
  model: "2024",
  brand: "Maruti",
};
console.log(car);
console.log(car.color); //accessing the property of an object using  dot notation

//we can create a empty object too

//Modify the Object Property

car["color"] = "brown";
console.log(car.color);

delete car.model; //delete

//Function Vs Method
// Method - function declared inside object is called method
// Function as 'Value'

let person = {
  ageCalculate: function (birthyear = 2008) {
    let age = 2023 - birthyear;
    return age;
  },
};

console.log(`Current age is ${person.ageCalculate()}`);

//this Keyword
let person1 = {
  firstName: "rahul",
  lastName: "kumar",
  getSummary: function () {
    return `${this.firstName} ${this.lastName} output is from getSummary`;
  },
};

console.log(person1.getSummary());

//foreach method of Array

//its another type of loop which we used to traverse over the array

let dishes = ["biryani", "Channy", "Karahai", "Bhallay"];

dishes.forEach(function (element) {
  console.log(element);
});
