//Question - 18, Seeing the world
let places = ['Makkah','Turkey','Madina','USA','Europe'];   // storing the locations in an array.
console.log(places);                                        // printing array in its original order.
console.log('\n', [...places].sort());                      // printing array in alphabatic order without changing the original list.
console.log('\n', places);                                  // check the array is in original order. 
console.log('\n', [...places].sort().reverse());            // reverse alphabatic order without changing original order of array
console.log('\n', places);                                  // check the array is in original order. 
console.log('\n', places.reverse());                        // Reverse the order of your list. 
console.log('\n', places);                                  // Print the array to show that its order has changed.
console.log('\n', places.reverse());                        // Reverse the order of your list again.
console.log('\n', places);                                  // Print the array to show that its back in its original order.
console.log('\n', places.sort());                           // Sort your array so it’s stored in alphabetical order.
console.log('\n', places);                                  // Print the array to show that its order has been changed.
console.log('\n', places.reverse());                        // Sort to change your array so it’s stored in reverse alphabetical order.
console.log('\n', places);                                  // Print the list to show that its order has changed.

