Stack Memory
Stack Memory is used for static memory allocation. It stores primitive values (such as numbers, strings, booleans, null, undefined, and symbol) and references to objects and functions. The stack is structured and managed as a Last-In-First-Out (LIFO) data structure.

Characteristics:

1.Fast access
2.Fixed size
3.Automatic memory management (when functions return, their stack frames are automatically cleaned up)

Example:

function sum(a, b) {
    let result = a + b;
    return result;
}

let x = 10;
let y = 20;
let z = sum(x, y);
In this example, x, y, and result are stored on the stack.

Diagram for Stack Memory:

Stack
--------
| result = 30 |
| b = 20      |
| a = 10      |
| y = 20      |
| x = 10      |
--------


Heap Memory
Heap Memory is used for dynamic memory allocation. It stores objects, arrays, and functions. Unlike the stack, the heap does not follow a specific order. Memory allocation in the heap is managed via references, and garbage collection is responsible for cleaning up unused objects.

Characteristics:

1.Slower access compared to stack
2.Dynamic size
3.Manual memory management (programmers must handle references properly to avoid memory leaks)

Example:

function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

let person1 = createPerson('Alice', 30);
let person2 = createPerson('Bob', 25);
In this example, the objects {name: 'Alice', age: 30} and {name: 'Bob', age: 25} are stored in the heap.

Diagram for Heap Memory:

Heap
-----------------------
| {name: 'Alice', age: 30} |
| {name: 'Bob', age: 25}   |
-----------------------
Combined Diagram
To illustrate how stack and heap memory work together, consider the previous example:


function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

let person1 = createPerson('Alice', 30);
let person2 = createPerson('Bob', 25);
Combined Diagram:

Stack                           Heap
-------------------------------------------------
| person2   | ref --> {name: 'Bob', age: 25}  |
| person1   | ref --> {name: 'Alice', age: 30}|
| age = 25                                    |
| name = 'Bob'                                |
| age = 30                                    |
| name = 'Alice'                              |
| createPerson (call frame)                   |
-------------------------------------------------
Explanation of Combined Diagram:
Stack:

The createPerson function is called, and its local variables (name and age) are pushed onto the stack.
The createPerson function returns an object that is stored in the heap. A reference to this object is stored in person1.
The process repeats for person2.
Heap:

The objects {name: 'Alice', age: 30} and {name: 'Bob', age: 25} are created in the heap.
References to these objects are stored in the variables person1 and person2 on the stack.
Summary
Stack Memory: Used for static memory allocation. It stores primitive values and references to objects/functions. It's fast and managed automatically.
Heap Memory: Used for dynamic memory allocation. It stores objects and functions. It's slower but allows for dynamic size and is managed by the programmer (through references) and the garbage collector.


<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<|>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

**Static Memory Allocation**
Static memory allocation refers to the allocation of memory at compile time, meaning that the size and type of the memory allocation are fixed and determined before the program runs. In JavaScript, static memory allocation is less explicit than in lower-level languages like C or C++, because JavaScript is dynamically typed and interpreted. However, the concept can still apply in certain contexts, such as:

_Global Variables_: Variables that are declared outside of any function are often allocated statically and remain in memory for the entire duration of the program.

Example:
const PI = 3.14; // A global constant, allocated statically

**Dynamic Memory Allocation**
Dynamic memory allocation refers to the allocation of memory at runtime, meaning that memory can be allocated and deallocated as needed while the program is running. This allows for more flexible and efficient use of memory, especially when dealing with data structures that can change in size.

In JavaScript, dynamic memory allocation is more prevalent due to the language's nature. Key aspects include:

_Objects and Arrays_: When objects and arrays are created, memory is dynamically allocated to accommodate their properties and elements. The size of these structures can change during execution, and memory is managed by the JavaScript engine.
Example:

let numbers = [1, 2, 3, 4, 5]; // Dynamically allocated array
numbers.push(6); // Memory allocation can grow as more elements are added

_Function Scope and Closures_: Variables declared within a function are dynamically allocated when the function is called and deallocated when the function execution is complete, unless they are captured by a closure.