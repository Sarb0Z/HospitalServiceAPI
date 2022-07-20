create database HospitalService
use HospitalService

create table Patient (
id int identity(1,1) primary key,
patient_name varchar(40) NOT NULL,
cnic varchar(15) UNIQUE NOT NULL,
dob date
)

alter table Patient add UNIQUE(cnic) 

create table Doctor (
id int identity(1,1) primary key,
doctor_name varchar(40) NOT NULL,
title varchar(30) NOT NULL
)

create table Visit (
id int identity(1,1) primary key,
timing date NOT NULL,
purpose varchar(100)
)
alter table Visit add patient_id int foreign key references Patient(id)
alter table Visit add doctor_id int foreign key references Doctor(id)

create table Diagnosis (
id int identity(1,1) primary key,
doctor int foreign key references Doctor(id),
visit int foreign key references Visit(id),
result varchar(100)
)

create table patient_details (
patient_id int foreign key references Patient(id),
doctor_id int foreign key references doctor(id),
blood_type varchar(3),
bone_density float,
no_of_visits int
)

create table receipt (
id int foreign key references Visit(id),
details varchar(100),
amount float NOT NULL,
visit int foreign key references Visit(id)
)

alter table receipt drop constraint FK__receipt__visit__44FF419A
alter table receipt drop column visit

insert into Patient values ('banker class', '12345-1234567-1', '1/1/2000')

insert into Doctor values ('banker not', 'Pediatrician')

insert into receipt values (4, 'unremarkable', 2000)

