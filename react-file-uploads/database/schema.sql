set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.

drop schema "public" cascade;

create schema "public";

create table "public"."images" (
  "imageId"        serial,
  "url"            text           not null,
  "caption"        text           not null,
  "createdAt"      timestamptz(6) not null default now(),
  primary key ("imageId")
);
