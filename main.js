// Declare a variable called 'name'
var printName = 'Chris';

// Print out a name
var printName = function() {

	var personName = 'Jenny';

	var personNumber = '867-5309';

	// Ask the parent scope 
	// for information about a variable
	// called 'name'
	console.log('printName():', personName);

	// return {
	// 	personNumber: personNumber
	// }
};

console.log('printName:', name);

// Invoke the function, name being printed is var within the function
printName();

// Assign the function result to a variable -- returns what is defined in the return of the function. If no return defined
// assign the function to a variable will result in undefined as there is no result for the function.
var jenny = printName();

// Print name without function
console.log('printName:', name);

console.log('jenny:', jenny);