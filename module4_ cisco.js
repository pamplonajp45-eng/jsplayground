// const INSURANCE_COST = 2.99;

// let shippingCost = 9.99;
// let isOrderValid = true;

// let userAge = 22;
// let points = 400;
// let cartValue = 199;
// let hasPromoCode = false;
// let hasParentsApproval = false;
// let addInsurance = true;

// if (
//   userAge > 65 ||
//   (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))
// ) {
//   shippingCost = 0;
// } else if (userAge < 21 && hasParentsApproval) {
//   shippingCost - 5;
// } else if (userAge < 21) {
//   isOrderValid = false;
// }

// if (isOrderValid) {
//   console.log(shippingCost);
// } else {
//   console.log("Cannot order if under 21");
// }
// // Exercise 1

// let number = prompt("Enter a random number");
// if (number > 90 && number < 110) {
//   alert("Bingo! ");
// } else {
//   alert("Miss");
// }

// // Exercise 2
// let number = prompt("Enter a random number");
// let message = number > 90 && number < 110 ? "Bingo" : "Miss";
// alert(message);

// // Exercise 3
// let firstNumber = Number(prompt("Enter a first number"));
// let secondNumber = Number(prompt("Enter a second number"));
// let operator = prompt(" enter an operator");

// if (operator === "+") {
//   alert(firstNumber + secondNumber);
// } else if (operator === "-") {
//   alert(firstNumber - secondNumber);
// } else if (operator === "*") {
//   alert(firstNumber * secondNumber);
// } else if (operator === "/") {
//   alert(firstNumber / secondNumber);
// } else {
//   alert("The operator was invalid");
// }
// // Exercise 4
// let contacts = [
//   {
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk",
//   },
//   {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com",
//   },
//   {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu",
//   },
// ];

// let choice = prompt("What do you want to do? (first / middle / last / new )");

// if (choice === "first") {
//   alert(
//     "Name: " +
//       contacts[0].name +
//       "\n" +
//       "Phone: " +
//       contacts[0].phone +
//       "\n" +
//       "E-mail: " +
//       contacts[0].email,
//   );
// } else if (choice === "middle") {
//   alert(
//     "Name: " +
//       contacts[1].name +
//       "\n" +
//       "Phone: " +
//       contacts[1].phone +
//       "\n" +
//       "E-mail: " +
//       contacts[1].email,
//   );
// } else if (choice === "last") {
//   let lastContact = contacts[contacts.length - 1];
//   alert(
//     "Name: " +
//       lastContact.name +
//       "\n" +
//       "Phone: " +
//       lastContact.phone +
//       "\n" +
//       "E-mail: " +
//       lastContact.email,
//   );
// } else if (choice === "new") {
//   let newName = prompt("Enter name:");
//   let newPhone = prompt("Enter phone:");
//   let newEmail = prompt("Enter email:");

//   if (newName && newPhone && newEmail) {
//     contacts.push({
//       name: newName,
//       phone: newPhone,
//       email: newEmail,
//     });
//     alert("Contact added!");
//   } else {
//     alert("Not all data was entered. Contact was not added.");
//   }
// } else {
//   alert("Unknown choice.");
// }
// // WHile loop patternn
// while (condition) {
//   // block of code
// }
// // analyze this
// let isOver = false;
// let counter = 1;
// while (isOver) {
//   isOver = !confirm(`[${counter++}] Continue the loop ?`);
// }
// let condition = false;
// while (condition) {
//   console.log("A while loop iteration");
// }
// do {
//   console.log("A do while loop iteration");
// } while (condition);
// // a do while loop will always iterates atleast once;

// The for loop pattern
for (initialization; condition; increament) {
  // block of code
}
// for ( let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Loops and arrays
let names = []; //empty array
let isOver = false; // loop control variable
while (!isOver) {
  // loop condition
  let name = prompt("Enter another name or press cancel."); // prompt for user input
  if (name != null) {
    // check if user pressed cancel
    names.push(name); // add the name to the array
  } else {
    // user pressed cancel, exit the loop
    isOver = true; // set loop control variable to true to exit the loop
  }
}

for (let i = 0; i < names.length; i++) {
  // loop through the array
  console.log(names[i]); // print each name to the console
}
