let count = 3;

const id = setInterval(countDown, 1000);

function countDown() {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(id);
  }
}
