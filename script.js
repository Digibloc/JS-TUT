// variables (let, cont, var) --Used to store something

var price = 5000; // a statement so we use a semi-colon at the end
const price = 5000; // Cannot be re-assigned
let price = 5000; // can be re-assigned


// Data types & structures (string, numbers, booleans,arrays, objects)

const description = 'New Apartment'; // String
const price = 5000; // Numbers
const newFloor = true; //Booleans
const options = ['hardwood', 'carpet', 'stone', 250, []];   //Arrays

const apartment = {
    price: 300000,
    sqmeters: 500,
    furnished: true,
};

// Functions (Traditional functions, Arrow Functions ()=> {})
function calculatePrice (){
    const sqMeters = 5000;
    const bedrooms = 3;
    const price = sqMeters * bedrooms;
    console.log(price);
}
calculatePrice();

// OR

function calculatePrice (sqMeters, bedrooms) {
    const price = sqMeters * bedrooms;
    return price;                         /*You can use*/ return sqMeters * bedrooms;
}
const result = console.log (5000, 3);
console.log(result);

// Arrow functions
const calculatePrice = (sqMeters, bedrooms) => {
    return sqMeters * bedrooms;                    /*You dont have to use function and return keys*/ const calculatePrice = (sqMeters, bedrooms) => sqMeters * bedrooms;
};
const result = console.log (5000, 3);
console.log(result);


// Scoping and Hoisting

function calculatePrice = () {
    console.log (5000);
}
calculatePrice();                                             // Both up and down give same output
                                                            //Don't use variables before you create them (var, cont, let)
// OR
calculatePrice ();
function calculatePrice (){
    console.log (5000);
}

//   OR ARROW FUNCTION
const calculatePrice = () =>{
    console.log(5000)
};
calculatePrice();

// String concatenation vs Template literals
const price = 5000;
const description = 'Your total cost is &{price}';
console.log ( description);

// control flow   (if else vs ternary ? :)
const price = 5000;
if (price > 200){
    console.log (true);                             /*Shorter conditions*/ const price = 5000;
} else {                                                                    price > 10000 ? console.log (true) : console.log (false); 
    console.log(false);
}

// Operators (+, -, >, *, <, >=, <=, ==, ===, +=, !, &&, ||)
const price = 10000;
const sqMeters = 500;

console.log(price + 50);                            // = Assignment
                                                    // == Equal to
//                                                  // === Checks for type too either string or number
if (price > 200 && /* */ || sqMeters < 1000) {
    console.log (true);
} else {
    console.log (false);
}


//Truthy vs Falsy values
const price = 5000;

if (price) {
    console.log (true);
} else {
    console.log(false);
}

// Loops (forEach vs for)
const options = ["hardwood", "carpet", "stone"];
options.forEach (function(floorOption) {
    console.log(floorOption + '-option');
});


// For loop
const options = ["hardwood", "carpet", "stone"];
for (let i = 0, i <2, i++) {
    console.log (options[i] + '-option');
}


// Interacting with HTML & CSS (DOM Manipulation)

