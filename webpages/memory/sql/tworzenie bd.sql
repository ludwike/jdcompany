create database memory;

use memory

create table gracze(id int not null auto_increment primary key, nick text, wynik int);

insert into gracze values(NULL, 'test', 2137);

