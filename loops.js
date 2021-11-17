// =========== LOOPS =============

// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
// for(statement 1; statement 2; statement 3) {
  // code block to be executed
//}

// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed


// task: Loop that iterates from 0 to 9
//statement 1: declare our iterator
//Why 0? In programming we like to start count at 0
for(let i = 1; i <10; i+=2) {
    console.log(`odd ${i}`);
}

for(let i = 0; i <10; i+=2) {
    console.log(`even ${i}`);
}
