const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('James');

myPromise.then(message => {
  console.log(message);
}).catch(message => {
  console.error(message);
});
