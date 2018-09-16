/* Jay Allen
    9/10/18

    Musketeers.js

    Write a program that:
    •	Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
    •	Shows each array element using a for loop.
    •	Adds the "D'Artagnan" value to the array.
    •	Shows each array element using the forEach() method.
    •	Remove poor Aramis.
    •	Shows each array element using a for-of loop.
*/

// load array

const musketeers = ["Athos", "Porthos", "Aramis"];
console.log("array length = " + musketeers.length);

// Print array using for loop

for( i = 0; i < musketeers.length; i++)
{
    console.log(musketeers[i]);
}

console.log("");

//	Adds "D'Artagnan" value to the array.

musketeers.push("D'Artagman");

// print the array again using the forEach() method.
console.log("print array using for each method");

musketeers.forEach(myElement =>
{
    console.log(` ${myElement}`);
})
;

// Remove poor Aramis.
// splicer removes from starting element, for elements;

musketeers.splice(2,1);


console.log("");
console.log("   using for of loop printing the array");

// print array using for of loop
let ofmusketeers;
for (ofmusketeer of musketeers)
    {
        console.log(ofmusketeer);
    }