/**
 * makeGreeting()
 * ------------------------------------------------------
 * Write a function called makeGreeting() that accepts a string username
 * returns a string value that greets the user.
 *
 *
 **/

function makeGreeting(nombreUsuario) {
	return "Hello " + nombreUsuario	
	}
const printEx05 = makeGreeting("Nico")
console.log(printEx05)



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*

var funcOutput1 = makeGreeting("Atushi")
console.assert( funcOutput1  === "Hello Atushi" );

var funcOutput2 = makeGreeting("Mira")
console.assert( funcOutput2 === "Hello Mira");

var funcOutput3 = makeGreeting("Nico")
console.assert(funcOutput3 === "Hello Nico");
