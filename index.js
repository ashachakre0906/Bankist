"use strict";
// Bankist APP
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const deposits = movements.filter(function (mov, i) {
//     return mov > 0;
// })
console.log(movements);
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

//reduce method

const balance = movements.reduce(function (accumulator, currentElement) {
        console.log(`${accumulator}: ${currentElement}`);
    return accumulator + currentElement;
})
console.log(balance);