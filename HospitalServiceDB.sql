USE [master]
GO
/****** Object:  Database [HospitalService]    Script Date: 27/07/2022 4:31:35 am ******/
CREATE DATABASE [HospitalService]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'HospitalService', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\HospitalService.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'HospitalService_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\HospitalService_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [HospitalService] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [HospitalService].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [HospitalService] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [HospitalService] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [HospitalService] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [HospitalService] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [HospitalService] SET ARITHABORT OFF 
GO
ALTER DATABASE [HospitalService] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [HospitalService] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [HospitalService] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [HospitalService] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [HospitalService] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [HospitalService] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [HospitalService] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [HospitalService] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [HospitalService] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [HospitalService] SET  ENABLE_BROKER 
GO
ALTER DATABASE [HospitalService] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [HospitalService] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [HospitalService] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [HospitalService] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [HospitalService] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [HospitalService] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [HospitalService] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [HospitalService] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [HospitalService] SET  MULTI_USER 
GO
ALTER DATABASE [HospitalService] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [HospitalService] SET DB_CHAINING OFF 
GO
ALTER DATABASE [HospitalService] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [HospitalService] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [HospitalService] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [HospitalService] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [HospitalService] SET QUERY_STORE = OFF
GO
USE [HospitalService]
GO
/****** Object:  Table [dbo].[medicines]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[medicines](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[medicine_name] [varchar](50) NULL,
	[supplier_name] [varchar](50) NULL,
	[price] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[prescription]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[prescription](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[patient_id] [int] NULL,
	[medicine_id] [int] NULL,
	[recommendation] [varchar](100) NULL,
	[intake_amount] [int] NULL,
	[doctor_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Patient]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Patient](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[patient_name] [varchar](40) NOT NULL,
	[cnic] [varchar](15) NOT NULL,
	[dob] [date] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[cnic] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[cnic] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doctor]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doctor](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[doctor_name] [varchar](40) NOT NULL,
	[title] [varchar](30) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[patient_prescription]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[patient_prescription]
as
select p.cnic, p.patient_name, d.doctor_name, m.medicine_name, m.supplier_name, pr.recommendation, pr.intake_amount
from patient p, doctor d, medicines m, prescription pr
where pr.patient_id=p.id and pr.medicine_id=m.id and pr.doctor_id=d.id
GO
/****** Object:  Table [dbo].[Visit]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Visit](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[timing] [date] NOT NULL,
	[purpose] [varchar](100) NULL,
	[patient_id] [int] NULL,
	[doctor_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[visit_details]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[visit_details] 
as
select v.id, p.patient_name, d.doctor_name, v.timing, v.purpose
from patient p, doctor d, visit v
where p.id=v.patient_id and d.id=v.doctor_id
GO
/****** Object:  Table [dbo].[Diagnosis]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Diagnosis](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[doctor] [int] NULL,
	[visit] [int] NULL,
	[result] [varchar](100) NULL,
	[patient_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[patient_diagnosis]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE view [dbo].[patient_diagnosis] 
as
select p.patient_name, p.cnic, p.dob, v.timing, v.purpose, di.result, d.doctor_name
from patient p, diagnosis di, doctor d, visit v
where p.id=di.patient_id and di.doctor=d.id and v.id = di.visit
GO
/****** Object:  Table [dbo].[patient_details]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[patient_details](
	[details_id] [int] IDENTITY(1,1) NOT NULL,
	[patient_id] [int] NULL,
	[blood_type] [varchar](3) NULL,
	[bone_density] [float] NULL,
 CONSTRAINT [PK_patient_details] PRIMARY KEY CLUSTERED 
(
	[details_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[receipt]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[receipt](
	[id] [int] NULL,
	[details] [varchar](100) NULL,
	[amount] [float] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tests]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tests](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[test_name] [varchar](50) NULL,
	[test_description] [varchar](100) NULL,
	[price] [float] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Diagnosis]  WITH CHECK ADD FOREIGN KEY([doctor])
REFERENCES [dbo].[Doctor] ([id])
GO
ALTER TABLE [dbo].[Diagnosis]  WITH CHECK ADD FOREIGN KEY([visit])
REFERENCES [dbo].[Visit] ([id])
GO
ALTER TABLE [dbo].[Diagnosis]  WITH CHECK ADD  CONSTRAINT [fk_diagnosis_patient_id] FOREIGN KEY([patient_id])
REFERENCES [dbo].[Patient] ([id])
GO
ALTER TABLE [dbo].[Diagnosis] CHECK CONSTRAINT [fk_diagnosis_patient_id]
GO
ALTER TABLE [dbo].[prescription]  WITH CHECK ADD FOREIGN KEY([doctor_id])
REFERENCES [dbo].[Doctor] ([id])
GO
ALTER TABLE [dbo].[prescription]  WITH CHECK ADD  CONSTRAINT [fk_prescription_medicine] FOREIGN KEY([medicine_id])
REFERENCES [dbo].[medicines] ([id])
GO
ALTER TABLE [dbo].[prescription] CHECK CONSTRAINT [fk_prescription_medicine]
GO
ALTER TABLE [dbo].[prescription]  WITH CHECK ADD  CONSTRAINT [fk_prescription_patient] FOREIGN KEY([patient_id])
REFERENCES [dbo].[Patient] ([id])
GO
ALTER TABLE [dbo].[prescription] CHECK CONSTRAINT [fk_prescription_patient]
GO
ALTER TABLE [dbo].[receipt]  WITH CHECK ADD FOREIGN KEY([id])
REFERENCES [dbo].[Visit] ([id])
GO
ALTER TABLE [dbo].[Visit]  WITH CHECK ADD FOREIGN KEY([doctor_id])
REFERENCES [dbo].[Doctor] ([id])
GO
ALTER TABLE [dbo].[Visit]  WITH CHECK ADD FOREIGN KEY([patient_id])
REFERENCES [dbo].[Patient] ([id])
GO
/****** Object:  StoredProcedure [dbo].[DELETE_DIAGNOSIS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[DELETE_DIAGNOSIS]
@id int
as
Delete from dbo.Diagnosis where id = @id
GO
/****** Object:  StoredProcedure [dbo].[DELETE_DOCTOR]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[DELETE_DOCTOR]
@id int
as
Delete from dbo.Doctor where id = @id
GO
/****** Object:  StoredProcedure [dbo].[DELETE_PATIENT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[DELETE_PATIENT]
@id int
as
Delete from dbo.Patient where id = @id
GO
/****** Object:  StoredProcedure [dbo].[DELETE_PATIENT_DETAILS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[DELETE_PATIENT_DETAILS]
@details_id int
as
Delete from dbo.patient_details where details_id = @details_id
GO
/****** Object:  StoredProcedure [dbo].[DELETE_PRESCRIPTION]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[DELETE_PRESCRIPTION]
@id int
as
Delete from dbo.prescription where id = @id
GO
/****** Object:  StoredProcedure [dbo].[DELETE_VISIT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[DELETE_VISIT]
@id int
as
Delete from dbo.Visit where id = @id
GO
/****** Object:  StoredProcedure [dbo].[GET_FROM_DIAGNOSIS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_FROM_DIAGNOSIS]
as
Select id, doctor, visit, result, patient_id from dbo.Diagnosis
GO
/****** Object:  StoredProcedure [dbo].[GET_FROM_DOCTOR]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_FROM_DOCTOR]
as
Select id, doctor_name, title from dbo.Doctor
GO
/****** Object:  StoredProcedure [dbo].[GET_FROM_PATIENT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_FROM_PATIENT]
as
Select id, patient_name, cnic, dob from dbo.Patient
GO
/****** Object:  StoredProcedure [dbo].[GET_FROM_PATIENT_DETAILS_WITH_ID]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_FROM_PATIENT_DETAILS_WITH_ID] 
@id int 
as
Select details_id, patient_id, blood_type, bone_density from dbo.patient_details where patient_id = @id
GO
/****** Object:  StoredProcedure [dbo].[GET_FROM_PATIENT_WITH_ID]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_FROM_PATIENT_WITH_ID] 
@id int 
as
Select id, patient_name, cnic, dob from dbo.Patient
where id=@id
GO
/****** Object:  StoredProcedure [dbo].[GET_MEDICINE]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_MEDICINE]
as
Select id, medicine_name, supplier_name, price  from dbo.medicines
GO
/****** Object:  StoredProcedure [dbo].[GET_PATIENT_DIAGNOSIS_VIEW]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_PATIENT_DIAGNOSIS_VIEW]
@cnic varchar(15)
as
Select patient_name, cnic, dob, timing, purpose, result, doctor_name from dbo.patient_diagnosis where cnic = @cnic
GO
/****** Object:  StoredProcedure [dbo].[GET_PATIENT_PRESCRIPTION_VIEW]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[GET_PATIENT_PRESCRIPTION_VIEW]
@cnic varchar(15)
as
select cnic, patient_name, doctor_name, medicine_name, supplier_name, recommendation, intake_amount from dbo.patient_prescription where cnic = @cnic
GO
/****** Object:  StoredProcedure [dbo].[GET_RECEIPT_WITH_ID]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[GET_RECEIPT_WITH_ID]
@id int
as
Select id, details, amount from dbo.Receipt where id = @id
GO
/****** Object:  StoredProcedure [dbo].[GET_TEST]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[GET_TEST]
as
Select id, test_name, test_description, price  from dbo.tests
GO
/****** Object:  StoredProcedure [dbo].[GET_VISIT_DETAILS_VIEW]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

create procedure [dbo].[GET_VISIT_DETAILS_VIEW]
as
Select id, doctor_name, patient_name, timing, purpose from dbo.visit_details
GO
/****** Object:  StoredProcedure [dbo].[POST_TO_DIAGNOSIS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[POST_TO_DIAGNOSIS]
@doctor int, @visit int, @result varchar(100), @patient_id int
as
Insert into dbo.Diagnosis values
                (@doctor,@visit,@result,@patient_id)
GO
/****** Object:  StoredProcedure [dbo].[POST_TO_DOCTOR]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[POST_TO_DOCTOR]
@doctor_name varchar(40), @title varchar(30)
as
Insert into dbo.Doctor values
                (@doctor_name,@title)
GO
/****** Object:  StoredProcedure [dbo].[POST_TO_PATIENT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[POST_TO_PATIENT]
@patient_name varchar(40), @cnic varchar(15), @dob date
as
Insert into dbo.Patient values (@patient_name, @cnic, @dob)
GO
/****** Object:  StoredProcedure [dbo].[POST_TO_PATIENT_DETAILS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[POST_TO_PATIENT_DETAILS]
@patient_id int, @blood_type varchar(3), @bone_density float
as
Insert into dbo.patient_details values
                (@patient_id,@blood_type,@bone_density)
GO
/****** Object:  StoredProcedure [dbo].[POST_TO_PRESCRIPTION]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[POST_TO_PRESCRIPTION]
@patient_id int, @medicine_id int, @recommendation varchar(100), @intake_amount int, @doctor_id int
as
Insert into dbo.Prescription values
                (@patient_id,@medicine_id,@recommendation,@intake_amount,@doctor_id)
GO
/****** Object:  StoredProcedure [dbo].[POST_TO_VISIT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[POST_TO_VISIT]
@timing date, @purpose varchar(100), @patient_id int, @doctor_id int
as
Insert into dbo.Visit values
                (@timing,@purpose,@purpose,@doctor_id)
GO
/****** Object:  StoredProcedure [dbo].[UPDATE_DIAGNOSIS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[UPDATE_DIAGNOSIS]
@id int, @doctor int, @visit int, @result varchar(100), @patient_id int
as
Update dbo.Diagnosis set
				doctor = @doctor,
                visit= @visit,
                result=@result,
                patient_id=@patient_id where id = @id
GO
/****** Object:  StoredProcedure [dbo].[UPDATE_DOCTOR]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[UPDATE_DOCTOR]
@id int, @doctor_name varchar(40), @title varchar(30)
as
Update dbo.Doctor set
                doctor_name = @doctor_name,
                title=@title where id = @id;
GO
/****** Object:  StoredProcedure [dbo].[UPDATE_PATIENT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[UPDATE_PATIENT]
@id int, @patient_name varchar(40), @cnic varchar(15), @dob date
as
update dbo.Patient set
                patient_name = @patient_name,
                cnic= @cnic,
                dob= @dob where id = @id
GO
/****** Object:  StoredProcedure [dbo].[UPDATE_PATIENT_DETAILS]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[UPDATE_PATIENT_DETAILS]
@details_id int, @patient_id int, @blood_type varchar(3), @bone_density float
as
Update dbo.patient_details set
                patient_id = @patient_id,
                blood_type=@blood_type,
                bone_density=@bone_density where details_id = @details_id
GO
/****** Object:  StoredProcedure [dbo].[UPDATE_PRESCRIPTION]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[UPDATE_PRESCRIPTION]
@id int, @patient_id int, @medicine_id int, @recommendation varchar(100), @intake_amount int, @doctor_id int
as
Update dbo.prescription set
                patient_id = @patient_id,
                medicine_id=@medicine_id,
                recommendation=@recommendation,
                intake_amount=@intake_amount,
				doctor_id=@doctor_id where id = @id
GO
/****** Object:  StoredProcedure [dbo].[UPDATE_VISIT]    Script Date: 27/07/2022 4:31:36 am ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create procedure [dbo].[UPDATE_VISIT]
@id int, @timing date, @purpose varchar(100), @patient_id int, @doctor_id int
as
Update dbo.Visit set
                timing = @timing,
                purpose=@purpose,
                patient_id=@patient_id,
                doctor_id=@doctor_id where id = @id
GO
USE [master]
GO
ALTER DATABASE [HospitalService] SET  READ_WRITE 
GO
