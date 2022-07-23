const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/api/Doctor",
      "/api/Patient",
      "/api/Visit",
      "/api/Diagnosis",
      "/api/Receipt",
      "/api/VisitPage",
      "/api/PatientDetails",
      "/api/PatientDiagnosis",
      "/api/Prescription",
      "/api/Medicine",
      "/api/Test",
      "/api/PatientPrescription"
    ],
    target: 'https://localhost:5000',
    secure: false
  }
]

module.exports = PROXY_CONFIG;
