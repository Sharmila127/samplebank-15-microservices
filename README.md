# SampleBank — 15+ Microservices Demo Scaffold

This scaffold contains 15 microservices (demo Node/Express), 4 frontends, an API Gateway,
Dockerfiles, docker-compose to run locally, Helm chart skeletons and Terraform skeletons.
All services are mock/dummy implementations for learning and testing only (no real banking logic).

Services list (15):
- auth-service
- accounts-service
- transactions-service
- notifications-service
- statements-service
- ledger-service
- cards-service
- loans-service
- kyc-service
- fraud-service
- analytics-service
- billing-service
- customer-profile-service
- email-service
- sms-service

Plus:
- api-gateway
- 4 frontends: customer-frontend, admin-frontend, partner-frontend, mobile-frontend

Quick start:
1. unzip and `cd samplebank-15-microservices`
2. `docker compose up --build`
3. Open frontends at ports 3000..3003, API gateway at 8080. See README for endpoints.
