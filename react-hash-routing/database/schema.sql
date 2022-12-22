set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."products" (
  "productId"        serial,
  "name"             text    not null,
  "price"            integer not null,
  "imageUrl"         text    not null,
  "shortDescription" text    not null,
  "longDescription"  text    not null,
  primary key ("productId")
)
