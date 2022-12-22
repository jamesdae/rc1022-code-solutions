insert into "users" ("username", "hashedPassword")
values ('autodidact', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA');

-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!

insert into "flashcards" ("userId", "question", "answer")
values (1, 'What is a closure?', 'A closure is formed when a function retains access to variables in its lexical scope.'),
       (1, 'When is the value of `this` determined in JavaScript?', 'In JavaScript, the value of `this` is determined when a function is called; not when it is defined.'),
       (1, 'What is prototypal inheritance?', 'Prototypal inheritance is how objects delegate behavior to other objects.'),
       (1, 'What is the JavaScript event loop?', 'The event loop is what pushes asynchronous callbacks back onto the call stack when it is clear.');
