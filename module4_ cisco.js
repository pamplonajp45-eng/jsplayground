const INSURANCE_COST = 2.99;

let shippingCost = 9.99;
let isOrderValid = true;

let userAge = 22;
let points = 400;
let cartValue = 199;
let hasPromoCode = false;
let hasParentsApproval = false;
let addInsurance = true;

if (
  userAge > 65 ||
  (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))
) {
  shippingCost = 0;
} else if (userAge < 21 && hasParentsApproval) {
  shippingCost - 5;
} else if (userAge < 21) {
  isOrderValid = false;
}

if (isOrderValid) {
  console.log(shippingCost);
} else {
  console.log("Cannot order if under 21");
}
// Exercise 1

let number = prompt("Enter a random number");
if (number > 90 && number < 110) {
  alert("Bingo! ");
} else {
  alert("Miss");
}

// Exercise 2
let number = prompt("Enter a random number");
let message = number > 90 && number < 110 ? "Bingo" : "Miss";
alert(message);

// Exercise 3
let firstNumber = Number(prompt("Enter a first number"));
let secondNumber = Number(prompt("Enter a second number"));
let operator = prompt(" enter an operator");

if (operator === "+") {
  alert(firstNumber + secondNumber);
} else if (operator === "-") {
  alert(firstNumber - secondNumber);
} else if (operator === "*") {
  alert(firstNumber * secondNumber);
} else if (operator === "/") {
  alert(firstNumber / secondNumber);
} else {
  alert("The operator was invalid");
}
// Exercise 4
let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

let choice = prompt("What do you want to do? (first / middle / last / new )");

if (choice === "first") {
  alert(
    "Name: " +
      contacts[0].name +
      "\n" +
      "Phone: " +
      contacts[0].phone +
      "\n" +
      "E-mail: " +
      contacts[0].email,
  );
} else if (choice === "middle") {
  alert(
    "Name: " +
      contacts[1].name +
      "\n" +
      "Phone: " +
      contacts[1].phone +
      "\n" +
      "E-mail: " +
      contacts[1].email,
  );
} else if (choice === "last") {
  let lastContact = contacts[contacts.length - 1];
  alert(
    "Name: " +
      lastContact.name +
      "\n" +
      "Phone: " +
      lastContact.phone +
      "\n" +
      "E-mail: " +
      lastContact.email,
  );
} else if (choice === "new") {
  let newName = prompt("Enter name:");
  let newPhone = prompt("Enter phone:");
  let newEmail = prompt("Enter email:");

  if (newName && newPhone && newEmail) {
    contacts.push({
      name: newName,
      phone: newPhone,
      email: newEmail,
    });
    alert("Contact added!");
  } else {
    alert("Not all data was entered. Contact was not added.");
  }
} else {
  alert("Unknown choice.");
}
