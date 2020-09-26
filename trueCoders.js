 
// Create 5 variables 
// plane = “plane”, 
// sevenFiftySeven = “757”, 
// Drone = “drone”
// shellPlane = null, 
// nothing = “”
var plane = "plane"
var sevenFiftySeven = '757'
var drone = 'drone'
var shellPlane = null
var nothing = ''

// and add them to an array named flyingObjects
const flyingObjects = [plane, sevenFiftySeven, drone, shellPlane, nothing]

// Create a function named takeOff that accepts an array parameter
// Use a for loop to iterate through the array



// Use a if else statement to evaluate each variable in the flyingObjects array as a boolean - this will use truthy falsy
// If the variable evaluates to true, use console.log() to print that the variable “ is preparing for takeoff!”
// Else - the variable “ cannot fly”
// Call the TakeOff function and pass in flyingObjects as a parameter
function takeoff(a)
{

for( let i = 0; i < a.length; i++)
{

    if( a[i] ) 
    {
          console.log(`the ${a[i]} is preparing for takeoff`)
    }
    else 
    {
         console.log(`The ${a[i]} can not fly`)

    }       

}
}
takeoff(flyingObjects)