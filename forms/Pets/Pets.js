/*Creates an array named pets with the names provided*/
var pets = ["Darcy", "Jack", "Jerry", "Marty", "Vito", "Vinny", "Riley", "Saddie", "Marge", "Sam"]
console.log(pets)

/*Write the command to remove "Vinny" from the array.*/
pets.splice(5,1)
console.log(pets)

/*Write the command to remove "Marty" from the array.*/
pets.splice(3,1)
console.log(pets)

/*Write the command to add "Nancy" to the front of the array.*/
pets.unshift("Nancy");
console.log(pets)

/*Write the command to add your name to the end of the array.*/
pets.push("Bailey");
console.log(pets)

/*Write the command that gives the indexOf where "Riley" is located.*/
console.log(pets.indexOf("Riley"))

/*Write the command that gives the indexOf where "Cindy" is located (this should return-1).*/
console.log(pets.indexOf("Cindy"))

/*Create a new variable called "withMarmaduke" and set it equal to the original array concatenated with the string "Marmaduke". Output this new array variable to the console.*/
var withMarmaduke = pets.concat("Marmaduke")
console.log(withMarmaduke)