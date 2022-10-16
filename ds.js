let interest = parseFloat(prompt("Enter interest rate"));
let deposit = parseInt(prompt("ENter deposit amount"));
let balance = 0;
let newBalance = balance + deposit;

alert("Your balance is " + newBalance);

let choice = prompt("Press D for another deposit or w to withdraw");
let d = 'd';
let w = 'w';

if (choice == d) {
    let newBalance1 = parseInt(prompt("Enter deposit amount"));
    let balance1 = newBalance1 + newBalance;
    alert("Your new balance is:" + balance1);

    let supernew = balance1 * interest;
    let lastBalance = supernew + balance1;
    alert("New balance and interest: " + lastBalance);

}
else if (choice == w) {
    let withdraw = parseInt(prompt("Enter amount: "));
    let withdraw1 = withdraw - interest;
    alert("Your new balance: " + withdraw1);

}
else {
    alert("Nothing");
}