console.log("Exercise - Business Name Generator Using JavaScript.");

console.log("=======================================================");
console.log("              Business Name Generator");
console.log("=======================================================");
console.log("");
console.log("Enter the type of business:");
console.log("1. Tech");
console.log("2. Fashion");
console.log("3. Food");
console.log("4. Other");
console.log("");
console.log("Enter your business name:");
console.log("");

let businessType = prompt("Enter the type of business (1, 2, 3, 4");
let businessName = prompt("Enter your business name");

let businessNameGenerated = "";
switch (businessType) {
  case "1":
    businessNameGenerated = businessName + "Tech";
    break;
  case "2":
    businessNameGenerated = businessName + "Fashion";
    break;
  case "3":
    businessNameGenerated = businessName + "Food";
    break;
  case "4":
    businessNameGenerated = businessName + "Services";
    break;
  default:
    console.log("Invalid choice");
    break;
}
console.log("Your business name is: " + businessNameGenerated);
console.log("");
console.log("=======================================================");
