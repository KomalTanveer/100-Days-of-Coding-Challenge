//Question # 18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


//Think of at least five places in the world you’d like to visit.
let countryList: string[]= ["Turkey", "Greece", "Switzerland", "Finland", "Paris"];

//Print your array in its original order
console.log("Original Order:", countryList);

//Print your array in alphabetical order
console.log("Alphabetical Order:", [...countryList].sort());

//show that your array is still in its original order by printing it.
console.log("Original Order:", countryList);

//Print your array in reverse alphabetical order
console.log("Reverse Alphabetical Order:", [...countryList].sort().reverse());

//Show that your array is still in its original order by printing it again
console.log("Original Order:", countryList);

//Reverse the order of your list
countryList.reverse();
console.log("Reversed Order:", countryList);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
countryList.reverse();
console.log("Original Order:", countryList);

//Sort your array so it’s stored in alphabetical order.
countryList.sort();
console.log("Alphabetical Order:", countryList);

//Sort to change your array so it’s stored in reverse alphabetical order.
countryList.reverse();
console.log("Reverse Alphabetical Order:", countryList);