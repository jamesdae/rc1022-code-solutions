const argon2 = require('argon2');

const providedPassword = process.argv[2];

const hashedPassword = '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA';

argon2
  .verify(hashedPassword, providedPassword)
  .then(isMatching => {
    console.log('Does your password match?', isMatching);
  })
  .catch(err => {
    console.error(err);
  });
