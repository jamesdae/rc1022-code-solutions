/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var money = new Transaction('deposit', amount);
    this.transactions.push(money);
    return (amount > 0 && Number.isInteger(amount));
  } return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var money = new Transaction('withdrawal', amount);
    this.transactions.push(money);
    return (amount > 0 && Number.isInteger(amount));
  } return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  } return balance;
};
