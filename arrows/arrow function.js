const square = (n) => n * n;
console.log(square(2));

const add = (a, b) => {
    return a + b;
};
console.log(add(2, 3)); // 5

const add_ = (a, b) => a + b;
console.log(add_(2, 3)); // 5

const eight = () => 3 + 5;
console.log(eight()); // 8

const eight_ = _ => 3 + 5;
console.log(eight_()); // 8

const person = {
    firstName: "Ryan",
    sayName: () => {
        // this will be bound lexically, 
        // and in this case it will be the window object, 
        // on which there is no firstName property.
        return this.firstName;  
    }
}
console.log(person.sayName()); // undefined

const person2 = {
    firstName: 'Ryan',
    hobbies: ['Robots', 'Games', 'Internet'],
    showHobbies: function () {
        this.hobbies.forEach(hobby => {
            //this inside of our forEach will be bound to the person object!
            console.log(`${this.firstName} likes ${hobby}`);
        });
    }
};
person2.showHobbies();