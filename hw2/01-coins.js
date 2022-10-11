/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  if (input > 10) {
    return "Oops, amount too heavy to handle! Please enter an amount no more than 10!\n";
  } else if (input < 0) {
    return "Negativity isn't allowed, neither in this program, nor in life. So please enter a positive value up to 10!\n";
  } else if (input >= 0 && input <= 10) {
    let final_message = "";

    let dollars = Math.trunc(input);
    if (dollars > 0) {
      final_message += dollars;
      if (dollars === 1) {
        final_message += " dollar, ";
      } else {
        final_message += " dollars, ";
      }
    }

    let decimal = input - dollars;
    decimal *= 100;
    decimal = Math.round(decimal); // Rounding any decimal digits after two places

    let quarters = decimal / 25;
    quarters = Math.trunc(quarters);
    if (quarters > 0) {
      final_message += quarters;
      if (quarters === 1) {
        final_message += " quarter, ";
      } else {
        final_message += " quarters, ";
      }
    }
    decimal = decimal % 25;

    let dimes = decimal / 10;
    dimes = Math.trunc(dimes);
    if (dimes > 0) {
      final_message += dimes;
      if (dimes === 1) {
        final_message += " dime, ";
      } else {
        final_message += " dimes, ";
      }
    }
    decimal = decimal % 10;

    let nickels = decimal / 5;
    nickels = Math.trunc(nickels);
    if (nickels > 0) {
      final_message += nickels;
      if (nickels === 1) {
        final_message += " nickel, ";
      } else {
        final_message += " nickels, ";
      }
    }
    decimal = decimal % 5;

    let pennies = decimal;
    if (pennies > 0) {
      if (pennies === 1) {
        final_message += pennies + " penny";
      } else {
        final_message += pennies + " pennies";
      }
    }

    final_message += "\n";
    return final_message;
  } else {
    return "Nice try QA engineer! Only numeric values between 0 and 10 allowed!\n";
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Oops, amount too heavy to handle! Please enter an amount no more than 10!
console.log(calculateChange("ABCD"));
// ABCD ==> Nice try QA engineer! Only numeric values between 0 and 10 allowed!
console.log(calculateChange(-4.5));
// Negativity isn't allowed, neither in this program, nor in life. So please enter a positive value up to 10!
console.log(calculateChange(3.45678));
// 2.345678 ==> 2 dollars, 1 quarter, 2 dimes, 1 penny
