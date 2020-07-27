// import React from "react";
// import ReactDOM from "react-dom";

// const element = <h1> Hello Wold </h1>;

// ReactDOM.render(element, document.getElementById("root"));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

console.log(jobs);

// const activeJob = jobs.filter(function (job) {
//   return job.isActive;
// });

const activeJob = jobs.filter((job) => job.isActive === false);

console.log(activeJob);

// const person = {
//   name: "Sahad",
//   talk() {
//     console.log("Hello Wold");
//   },
// };

// person.talk();

const person = {
  name: "Mohamed",
  talk() {
    setTimeout(() => {
      console.log(this);
    });
  },
};

person.talk();

// # Map && Template Literel

const colors = ["red", "blue", "green"];
const formattedColors = colors.map((color) => `<li>${color}</li>`);

console.log(formattedColors);

// Object Destructuring

const address = {
  street: "Malappuram",
  city: "Malappuram City",
  country: "India",
};

const { street: st, city } = address;
console.log(city);
console.log(st);

// Spread Operator

// Append two array
const first = [1, 2, 3];
const sencond = [4, 5, 6];

const combined = first.concat(sencond);
console.log(combined);

const combined2 = [...first, 100, ...sencond, "a"];
console.log(combined2);

// Object

const addressFirst = {
  name: "Sahad",
  place: "Malappuram",
};

const addressSecond = {
  job: "Software Engineer",
};

const fullAddress = { ...addressFirst, ...addressSecond, age: 29 };
console.log(fullAddress);

// Class & Inheritance
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("Sahad", "MSc");
teacher.walk();

// Named Export
// Default Export

export class Car {}

export default class Road {}

// Default          -> import ... from '';
// Named            -> import { ... } from '';
// Default & Named - > import ... , { ... } from '',
