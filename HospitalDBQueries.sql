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

alter table Diagnosis
add patient_id int not null

alter table Diagnosis
add constraint fk_diagnosis_patient_id
foreign key(patient_id) references Patient(id)

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

create table tests (
id int primary key identity(1,1),
test_name varchar(50),
test_description varchar(100),
price float
)

alter table receipt drop constraint FK__receipt__visit__44FF419A
alter table receipt drop column visit

insert into Patient values ('banker class', '12345-1234567-1', '1/1/2000')

insert into Doctor values ('banker not', 'Pediatrician')

insert into receipt values (4, 'unremarkable', 2000)

insert into tests values ('covid test', 'checks for covid antibodies', 1500), ('blood test', 'basic', 800)

insert into patient_details values (1, 4005, 'B+', NULL , 2)

insert into Diagnosis values (4005, null, 'patient is fine', 1)

create view [visit_details] 
as
select v.id, p.patient_name, d.doctor_name, v.timing, v.purpose
from patient p, doctor d, visit v
where p.id=v.patient_id and d.id=v.doctor_id

create view [patient_diagnosis] 
as
select p.patient_name, p.cnic, p.dob, di.visit, di.result, d.doctor_name
from patient p, diagnosis di, doctor d
where p.id=di.id and di.doctor=d.id