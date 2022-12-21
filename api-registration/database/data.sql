insert into "users" ("username", "hashedPassword")
values ('jeffjefferson', '$argon2i$v=19$m=4096,t=3,p=1$sRb5hJd3ChtQszxO7kmQvQ$VIX7KkCYNBYvsMd5TlTVSmlmTrLxv64fU3+iptc4QsM');

-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!
