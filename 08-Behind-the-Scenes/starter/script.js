'use strict';

/*
#About Javascript

High-level = don't have to ascribe resources like memory/ram
Can clean the memory
Can only interpreted
multi-paradigm:
1) procedural
2) OOP, functional programming
prototype has all the array methods
JS have first class functions where functions are treated as variables
Cocurrency model = how js handles multiple taska at the same time
- it can only run one thing at a time (single thread)
uses "event loop" to run things in the background and then run them in main when done

Call stack = where code is executed and is called execution context
Heap = where objects live

modern JS is mixed of compilation and interpretation called "just in time" compilation
interpretation: interpreter runs through source code and executes it line by line (slow)
compilation is entire code is converted to machine code at one, then written in binary so executed by computer (fast)

#"just in time" compilation
1) Parsing - parses code to AST
2) Compilation - compiles 
3) Execution - executes code
4) Optimization - during execution it recompiles

Functions can only be executed when called (for top level code)
Execution Context: Environment in which a piece of JS is executed
There is only one Executioin Context
There is one execution context per function. Each new function is a new execution context

# What is inside the Execution Context
1) Variable Environment - let/const/var/ functions/ arguments objects
2) Scope chain - consists of refernces to variables outside the EC
3) this keyword - generated during creation phase - right before execution
Arrow functions do not have arguments object or this keyword

# The Call Stack
- Has stacks of Execution Contexts
*/
