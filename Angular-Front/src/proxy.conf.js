const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/api/Doctor",
      "/api/Patient",
      "/api/Visit",
      "/api/Diagnosis"
    ],
    target: 'https://localhost:5000',
    secure: false
  }
]

module.exports = PROXY_CONFIG;
