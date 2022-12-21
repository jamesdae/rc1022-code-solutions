insert into "users" ("username", "hashedPassword")
values ('admin', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA');

-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!
