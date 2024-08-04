# module

./file.js ==> file in same folder(current directory)

../file.js ==> file out of the folder

./file1.js/file2.js ==> file in other folder out of the folder (folder se baher dusre folder me file)

---

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain the code-base.

ES Modules rely on the import and export statements.

---

**Export**
You can export a function or variable from any file.

Let us create a file named person.js, and fill it with the things we want to export.

There are two types of exports: Named and Default.

**Import**
You can import modules into a file in two ways, based on if they are named exports or default exports.

Named exports must be destructured using curly braces. Default exports do not.

_Named Exports_
You can create named exports two ways. In-line individually, or all at once at the bottom.

In-line individually:

person.js(fileName)

export const name = "Jesse"
export const age = 40

All at once at the bottom:
person.js(fileName)

const name = "Jesse"
const age = 40

export { name, age }

_named import_
import { name, age } from "./person.js";

_Default Exports_
Let us create another file, named message.js, and use it for demonstrating default export.

You can only have one default export in a file.

Example
message.js(fileName)

const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;

_default import_

import message from "./message.js";
