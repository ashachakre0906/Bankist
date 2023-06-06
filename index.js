"use strict";
// Bankist APP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];/////////////////////////////////////////////
const account1 = {
  owner: "Jonas Schemadtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, -340, -300, -20, -50, 400, -460],
  interestRate: 0.7, // %
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];
const containerMovements = document.querySelector('.movements');
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
//Display movements on the page

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    console.log(mov, i);
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
        <div class="movements__row">
                <div class="movements__type movements__type--deposit">${type} ${i + 1}
                </div>
                <div class="movements__value">${mov}</div>
        </div>
        `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
//Computing usernames
// const user = 'Steven Thomas Williams'//stw
const creatingUserNames = (accs) => {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0]).join("");
    });
};
console.log(creatingUserNames(accounts));
console.log(accounts);
//Filter method used to filter the elements used to specify the certain conditions

// const deposits = movements.filter(function (mov, i) {
//     return mov > 0;
// })
// console.log(movements);
// same use case using for of loop
const deposits = [];
for (const mov of movements) {
    if (mov > 0) {
        deposits.push(mov);
    }
}
//Filter method for the withdrawals 
const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawals);

//reduce method without arrow function
/* const balance = movements.reduce(function (accumulator, currentElement) {
        console.log(`${accumulator}: ${currentElement}`);
    return accumulator + currentElement;
}, 0) */
// console.log(balance);
//reduce method with arrow function
const balance = movements.reduce((accumulator, currentElement) => accumulator + currentElement, 0)
console.log(balance);

//using for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//function to print balance
//purpose of the accumulator is to keep track of current sum.

const callDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} EUR`;
}
callDisplayBalance(account1.movements);
// Get the maximum value of the movements array
//purpose of the accumulator is to keep track of current maximum value
//mov is keepin g track of the current value.
const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);
console.log(max);
//Magic of chaining methods
const euroToUsd = 1.1
const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

const calcDisplaySummary = function (movements) {
    const incomes = movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    console.log(incomes);
    labelSumIn.textContent = `${incomes}€`;

      const out = movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
      console.log(out);
    labelSumOut.textContent = `${Math.abs(out)}€`;
    
    const interest = movements.filter(mov => mov > 0).map(deposit =>
        (deposit * 1.2) / 100).filter((int, i, arr) => {
            console.log(arr);
            return int >= 1 //filtered out the interst greater than 1
        }).reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`
   console.log(interest);
}
calcDisplaySummary(account1.movements);


