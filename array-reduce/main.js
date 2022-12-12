const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const addup = (x, y) => x + y;

const sum = numbers.reduce(addup);
console.log('sum of all numbers:', sum);

const product = numbers.reduce((x, y) => x * y);
console.log('product of all numbers:', product);

const balance = account.reduce((x, y) => {
  if (y.type === 'deposit') {
    x += y.amount;
  } else {
    x -= y.amount;
  } return x;
}, 0);
console.log('total balance:', balance);

const composite = traits.reduce((initial, current) => Object.assign(initial, current));
console.log('value of composite:', composite);
