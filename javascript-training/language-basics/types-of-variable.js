// How to store data in JavaScript?

//Syntax : Declaration  Variable = Data ;

// Variable : A variable is nothing but the name of the memory location where we are going to store the data. At a later point in time, this is going

// In JavaScript, variables are divided into two different categories.

//1. Local variables => The variable declared inside the block  => Can be accessed only inside the block.
//2. Global variables => The variables declared outside of the block  => Can be accessed everywhere

let empName = "Bharath"; //global

{
    let empAge = 35; // local
    // console.log(empName); //able to access
    // console.log(empAge); //able to access
}

console.log(empName);
console.log(empAge);
