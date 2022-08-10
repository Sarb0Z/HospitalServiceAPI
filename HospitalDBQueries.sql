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

alter table receipt drop constraint FK__receipt__visit__44FF419A
alter table receipt drop column visit

create table tests (
id int primary key identity(1,1),
test_name varchar(50),
test_description varchar(100),
price float
)

create table medicines (
id int primary key identity(1,1),
medicine_name varchar(50),
supplier_name varchar(50),
price float,
)

create table prescription (
id int primary key identity(1,1),
patient_id int,
medicine_id int,
recommendation varchar(100),
intake_amount int
)

alter table prescription
add doctor_id int foreign key references doctor(id)

alter table prescription
add constraint fk_prescription_patient 
foreign key(patient_id) references patient(id)

alter table prescription
add constraint fk_prescription_medicine
foreign key(medicine_id) references medicines(id)

create table _user (
id int primary key identity(1,1),
username varchar(40) NOT NULL unique,
--email_id varchar(40) NOT NULL unique,
date_created datetime not null default(GETDATE()),
cnic varchar(15) unique,
--rowguid uniqueidentifier ROWGUIDCOL NOT NULL
)

create table _logs(
id int primary key identity(1,1),
log_text text NOT NULL,
log_datetime datetime not null default(GETDATE())
)

create table _login(
id int primary key foreign key references _user(id),
email_id varchar(40) NOT NULL unique,
_password varbinary(160) not null,
password_Encrypted varbinary(160)
)


--MAKE IT ONE--

select * into _user_backup from _user

select * into _passwords_backup from _passwords

drop table _passwords

drop table _user


INSERT INTO _user ( username, email_id, date_created, cnic, _password)
SELECT username, email_id, date_created, cnic, _password
FROM _user_backup u
INNER JOIN _passwords_backup p ON u.id = p.id


insert into Patient values ('banker class', '12345-1234567-1', '1/1/2000')

insert into Doctor values ('banker not', 'Pediatrician')

insert into receipt values (4, 'unremarkable', 2000)

insert into tests values ('covid test', 'checks for covid antibodies', 1500), ('blood test', 'basic', 800)
insert into tests values ('hvac', 'checks for hep-a antibodies', 3000), ('ckan', 'monitors enzyme concentration', 12000)

insert into patient_details values (1, 4005, 'B+', NULL , 2)

insert into Diagnosis values (4005, null, 'patient is fine', 1)

insert into medicines values ('panadol', 'xggg', 100), ('brufen', 'blfx', 80), ('ryzek', 'pf-pharmaceuticals', 200), ('protein supplemnent', 'nestle', 2000), ('morphine', 'cia', 7), ('benzo', 'j-association', 1400)

create view [visit_details] 
as
select v.id, p.patient_name, d.doctor_name, v.timing, v.purpose
from patient p, doctor d, visit v
where p.id=v.patient_id and d.id=v.doctor_id

create view [patient_diagnosis] 
as
select p.patient_name, p.cnic, p.dob, di.visit, di.result, d.doctor_name
from patient p, diagnosis di, doctor d
where p.id=di.patient_id and di.doctor=d.id

create view [patient_prescription]
as
select pr.id, p.cnic, p.patient_name, d.doctor_name, m.medicine_name, m.supplier_name, pr.recommendation, pr.intake_amount
from patient p, doctor d, medicines m, prescription pr
where pr.patient_id=p.id and pr.medicine_id=m.id and pr.doctor_id=d.id


--ENCRYPTION

CREATE MASTER KEY ENCRYPTION BY   
PASSWORD = '328bcadkJKD9899*&*()(*hdw29i12';  

CREATE CERTIFICATE password_encrypt  
   WITH SUBJECT = 'Login User Password';  
GO  

CREATE SYMMETRIC KEY passwords_key1  
    WITH ALGORITHM = AES_256  
    ENCRYPTION BY CERTIFICATE password_encrypt;  
GO  


--PROCEDURES


--patient

create procedure GET_FROM_PATIENT
as
Select id, patient_name, cnic, dob from dbo.Patient

create procedure GET_FROM_PATIENT_WITH_ID 
@id int 
as
Select id, patient_name, cnic, dob from dbo.Patient
where id=@id

create procedure POST_TO_PATIENT
@patient_name varchar(40), @cnic varchar(15), @dob date
as
Insert into dbo.Patient values (@patient_name, @cnic, @dob)

create procedure UPDATE_PATIENT
@id int, @patient_name varchar(40), @cnic varchar(15), @dob date
as
update dbo.Patient set
                patient_name = @patient_name,
                cnic= @cnic,
                dob= @dob where id = @id

create procedure DELETE_PATIENT
@id int
as
Delete from dbo.Patient where id = @id

--doctor

create procedure GET_FROM_DOCTOR
as
Select id, doctor_name, title from dbo.Doctor

create procedure POST_TO_DOCTOR
@doctor_name varchar(40), @title varchar(30)
as
Insert into dbo.Doctor values
                (@doctor_name,@title)

create procedure UPDATE_DOCTOR
@id int, @doctor_name varchar(40), @title varchar(30)
as
Update dbo.Doctor set
                doctor_name = @doctor_name,
                title=@title where id = @id;

create procedure DELETE_DOCTOR
@id int
as
Delete from dbo.Doctor where id = @id

--visit

create procedure GET_FROM_VISIT
as
Select id, timing, purpose, patient_id, doctor_id from dbo.Visit

create procedure POST_TO_VISIT
@timing date, @purpose varchar(100), @patient_id int, @doctor_id int
as
Insert into dbo.Visit values
                (@timing,@purpose,@purpose,@doctor_id)

create procedure UPDATE_VISIT
@id int, @timing date, @purpose varchar(100), @patient_id int, @doctor_id int
as
Update dbo.Visit set
                timing = @timing,
                purpose=@purpose,
                patient_id=@patient_id,
                doctor_id=@doctor_id where id = @id

create procedure DELETE_VISIT
@id int
as
Delete from dbo.Visit where id = @id

--diagnosis

create procedure GET_FROM_DIAGNOSIS
as
Select id, doctor, visit, result, patient_id from dbo.Diagnosis

create procedure POST_TO_DIAGNOSIS
@doctor int, @visit int, @result varchar(100), @patient_id int
as
Insert into dbo.Diagnosis values
                (@doctor,@visit,@result,@patient_id)

create procedure UPDATE_DIAGNOSIS
@id int, @doctor int, @visit int, @result varchar(100), @patient_id int
as
Update dbo.Diagnosis set
				doctor = @doctor,
                visit= @visit,
                result=@result,
                patient_id=@patient_id where id = @id

create procedure DELETE_DIAGNOSIS
@id int
as
Delete from dbo.Diagnosis where id = @id


--patient details
create procedure GET_FROM_PATIENT_DETAILS_WITH_ID 
@id int 
as
Select details_id, patient_id, blood_type, bone_density from dbo.patient_details where patient_id = @id

create procedure POST_TO_PATIENT_DETAILS
@patient_id int, @blood_type varchar(3), @bone_density float
as
Insert into dbo.patient_details values
                (@patient_id,@blood_type,@bone_density)

create procedure UPDATE_PATIENT_DETAILS
@details_id int, @patient_id int, @blood_type varchar(3), @bone_density float
as
Update dbo.patient_details set
                patient_id = @patient_id,
                blood_type=@blood_type,
                bone_density=@bone_density where details_id = @details_id

create procedure DELETE_PATIENT_DETAILS
@details_id int
as
Delete from dbo.patient_details where details_id = @details_id

--prescription

create procedure POST_TO_PRESCRIPTION
@patient_id int, @medicine_id int, @recommendation varchar(100), @intake_amount int, @doctor_id int
as
Insert into dbo.Prescription values
                (@patient_id,@medicine_id,@recommendation,@intake_amount,@doctor_id)

create procedure UPDATE_PRESCRIPTION
@id int, @patient_id int, @medicine_id int, @recommendation varchar(100), @intake_amount int, @doctor_id int
as
Update dbo.prescription set
                patient_id = @patient_id,
                medicine_id=@medicine_id,
                recommendation=@recommendation,
                intake_amount=@intake_amount,
				doctor_id=@doctor_id where id = @id

create procedure DELETE_PRESCRIPTION
@id int
as
Delete from dbo.prescription where id = @id


-- medicines

create procedure GET_MEDICINE
as
Select id, medicine_name, supplier_name, price  from dbo.medicines

--tests

create procedure GET_TEST
as
Select id, test_name, test_description, price  from dbo.tests

--receipt

create procedure GET_RECEIPT_WITH_ID
@id int
as
Select id, details, amount from dbo.Receipt where id = @id

--PATIENT DIAGNOSIS

create procedure GET_PATIENT_DIAGNOSIS_VIEW
@cnic varchar(15)
as
Select patient_name, cnic, dob, timing, purpose, result, doctor_name from dbo.patient_diagnosis where cnic = @cnic

--PATIENT PRESCRIPTION

create procedure GET_PATIENT_PRESCRIPTION_VIEW
@cnic varchar(15)
as
select cnic, patient_name, doctor_name, medicine_name, supplier_name, recommendation, intake_amount from dbo.patient_prescription where cnic = @cnic


--VISIT_DETAILS

create procedure GET_VISIT_DETAILS_VIEW
as
Select id, doctor_name, patient_name, timing, purpose from dbo.visit_details

--PASSWORD

create procedure POST_TO_PASSWORD
@id int, @password varchar(40)
as
insert into _passwords values (@id, CONVERT(varbinary, @password), null)

--LOGS

create procedure GET_FROM_LOGS
as
Select id, log_text, log_datetime from _logs

--PASSWORD ENCRYPTION

alter procedure ADD_ENCRYPTION
as
begin
	begin
	OPEN SYMMETRIC KEY passwords_key1  
	   DECRYPTION BY CERTIFICATE password_encrypt;  

	UPDATE _passwords
	SET password_Encrypted = EncryptByKey(Key_GUID('passwords_key1')  
		, _password, 1, HASHBYTES('SHA2_256', CONVERT( varbinary  
		, id)));  
	end
	begin
	OPEN SYMMETRIC KEY passwords_key1  
	   DECRYPTION BY CERTIFICATE password_encrypt;  
	end 
	begin
	SELECT _password, password_Encrypted   
		AS 'Encrypted password', CONVERT(varchar,  
		DecryptByKey(password_Encrypted, 1 ,   
		HASHBYTES('SHA2_256', CONVERT(varbinary, id))))  
		AS 'Decrypted password' FROM _passwords;  
	end
	begin
		UPDATE _passwords
		SET _password =CONVERT(varbinary, 'encrypted')
	end
end




select * from doctor
select * from patient 
select * from visit
select * from patient_details
select * from patient_diagnosis
select * from medicines
select * from tests
select * from prescription
select * from patient_prescription
