/* Jay Allen
    9/10/18

    Array Max
    Write a program that creates the following array, then calculates and shows the array's maximum value.
    const values = [3, 11, 7, 2, 9, 10];
*/
    let maxValue = 0;
    const values = [3, 11, 7, 2, 9, 10];

    for(var i= 0; i < values.length - 1; i++)
    {
        if (values[i] > maxValue)
            maxValue = values[i];
    }
    console.log("");

    console.log("          MAXIMUM VALUES");
    console.log("Maximum Value in array = " + maxValue);
//
var max = Math.max.apply(null, values);
console.log("Largest number in array = " + max);

// I just want to know the min value using the above 
var min = Math.min.apply(null, values);
console.log("Smallest number in array = " + min);