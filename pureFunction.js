/*
A pure function in JavaScript is a function that, given the same input, will always return the same output and has no side effects, meaning it does not modify any external state or variables outside its scope. Here's an example.
*/

// Pure function example
function add(a, b) {
    return a + b;
  }
  
  // Impure function example
  let result = 0;
  function impureAdd(a, b) {
    result = a + b; // Modifies external state
    return result;
  }
  
  console.log(add(2, 3)); // Output: 5
  console.log(add(2, 3)); // Output: 5 (Always the same for the same inputs)
  
  console.log(impureAdd(2, 3)); // Output: 5
  console.log(result); // Output: 5 (External state modified)
  
/*
In the above example, add() is a pure function because it always returns the same result for the same inputs, and it doesn't modify any external state. On the other hand, impureAdd() is impure because it modifies the external state by updating the result variable.
*/




