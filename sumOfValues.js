/* Jay Allen
    9/10/18


    Sum of values
    Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
    const values = [3, 11, 7, 2, 9, 10];
*/
const values = [3, 11, 7, 2, 9, 10];
let sumValues = 0;

    for(var i= 0; i < values.length; i++)
    {
        // console.log("");
        // console.log("sumOfValues = " + sumValues + " prior to addition");

        sumValues = sumValues + values[i];

        // console.log("sumOfValues = " + sumValues + " After to addition");

    }
    console.log("");

    console.log("          SUM OF VALUES");
    console.log("Sum of Values in array = " + sumValues);
    //