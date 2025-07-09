let day = prompt("Enter a day of the week:").toLowerCase();

switch (day) {
  case "monday":
    console.log("Your task for Monday is: Finish your assignments.");
    break;
  case "tuesday":
    console.log("Your task for Tuesday is: Attend group meeting.");
    break;
  case "wednesday":
    console.log("Your task for Wednesday is: Study for the quiz.");
    break;
  case "thursday":
    console.log("Your task for Thursday is: Work on your project.");
    break;
  case "friday":
    console.log("Your task for Friday is: Submit your reports.");
    break;
  case "saturday":
    console.log("Your task for Saturday is: Help with chores.");
    break;
  case "sunday":
    console.log("Your task for Sunday is: Take a rest.");
    break;
  default:
    console.log("Invalid day. Please enter a valid day of the week.");
}
