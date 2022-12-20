set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."grades" (
  "gradeId"   serial,
  "name"      text           not null,
  "course"    text           not null,
  "score"     integer        not null,
  "createdAt" timestamptz(6) not null default now(),
  primary key ("gradeId")
);
