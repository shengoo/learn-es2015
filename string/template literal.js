let name = `Ryan`;
let job = `Instructor`;
let sentence = `${name} works at HackerYou as an ${job}`;
console.log(sentence); // "Ryan works at HackerYou as an Instructor"


const price = 9.99;
const shipping = 3.99;

const message = `Your total with shipping will be ${price + shipping}.`;

console.log(message); // Your total with shipping will be 13.98.

const multi = "This is a \n multiline string";
console.log(multi);

const multi2 = `This is a 
multiline string`;
console.log(multi2);

const person = {
  name: 'Ryan',
  job: 'Developer/Instructor'
};

const markup = `
  <div>
    <h2>${person.name}</h2>
    <h3>${person.job}</h3>
  </div>
`;
console.log(markup)