create table users (
"id" serial primary key,
"name" varchar(20) not null,
"email" varchar(100) unique not null,
"admin" boolean not null default false,
"active" boolean not null default true);
