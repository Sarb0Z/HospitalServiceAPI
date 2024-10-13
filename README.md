

# Hospital Service API
=======================

## Overview

The Hospital Service API is a web application designed to manage hospital services, including patient information, doctor details, diagnoses, and prescriptions. The application aims to provide a user-friendly interface for hospital staff to efficiently manage patient data and provide better healthcare services.

## Technologies and Features

* Frontend:
	+ Built using Angular 14
	+ Utilizes Angular Material for UI components
	+ Bootstrap for styling
* Backend:
	+ API built using OpenAPI specification
	+ Implemented using TypeScript
	+ Utilizes NSwag for API documentation
* Data Models:
	+ Patient: stores patient information, including name, CNIC, and date of birth
	+ Doctor: stores doctor information, including name and title
	+ Diagnosis: stores diagnosis information, including doctor, visit, and result
	+ Prescription: stores prescription information, including patient and doctor details
* Features:
	+ Patient management: create, read, update, and delete patient information
	+ Doctor management: create, read, update, and delete doctor information
	+ Diagnosis management: create, read, update, and delete diagnosis information
	+ Prescription management: create, read, update, and delete prescription information

## Starting the Frontend and Backend

### Frontend

1. Clone the repository: `git clone https://github.com/your-repo/hospital-service-api.git`
2. Navigate to the frontend directory: `cd angular-front`
3. Install dependencies: `npm install`
4. Start the development server: `ng serve --ssl --ssl-cert %APPDATA%\ASP.NET\https\%npm_package_name%.pem --ssl-key %APPDATA%\ASP.NET\https\%npm_package_name%.key`
5. Open a web browser and navigate to `https://localhost:4200`

### Backend

1. Clone the repository: `git clone https://github.com/your-repo/hospital-service-api.git`
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Start the development server: `node server.js`
5. Open a web browser and navigate to `https://localhost:3000/api`


## Contributing

To contribute to the Hospital Service API, follow these steps:

1. Fork the repository: `git fork https://github.com/your-repo/hospital-service-api.git`
2. Clone the forked repository: `git clone https://github.com/your-fork/hospital-service-api.git`
3. Create a new branch: `git branch feature/your-feature`
4. Make changes and commit: `git commit -m "Your commit message"`
5. Push changes to your fork: `git push origin feature/your-feature`
6. Create a pull request: `git pull-request https://github.com/your-repo/hospital-service-api.git`

Note: Make sure to follow the project's coding standards and guidelines when contributing.