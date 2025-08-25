## Cypress-OrangeHRM

This project automates testing for the OrangeHRM application using [Cypress](https://www.cypress.io/).
It covers core HR features such as Login, Employee Management, Time Tracking, and Dashboard validation.
The project is designed to demonstrate real-world automation testing skills with clean structure, reusable page objects, and data-driven testing.

### Features

- Automated end-to-end tests for OrangeHRM
- Easy-to-read test cases
- Fast execution and reporting

### Tech Stack

- **Cypress**: End-to-end testing framework
- **Node.js**: JavaScript runtime environment
- **npm**: Package manager
- **Mocha**: Test framework
- **Chai**: Assertion library

### Tools Used

- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```bash
git clone https://github.com/cmtadifa/Cypress-OrangeHRM.git
cd Cypress-OrangeHRM
npm install
```

### Running Tests

To open the Cypress Test Runner:

```bash
npx cypress open
```

To run tests in headless mode:

```bash
npx cypress run
```

### Organized Project Structure

```
Cypress-OrangeHRM/
│── cypress/
│   ├── e2e/                  # Test cases
│   │   ├── PIM/              # Employee-related scenarios
│   │   │   └── addEmployeeScenario.js
│   │   ├── Time/             # Attendance & time tracking scenarios
│   │   │   └── attendanceScenario.js
│   │   └── TCM/              # Test case modules (Login, PIM, etc.)
│   │       ├── Login/
│   │       │   ├── Invalid_Credentials.js
│   │       │   ├── Required_Fields.js
│   │       │   └── Success_Login.js
│   │       └── ...
│   ├── fixtures/             # Test data (e.g., login credentials)
│   │   └── Login.json
│   ├── pageObjects/          # Page Object Model classes
│   │   ├── DashboardPage.js
│   │   ├── LoginPage.js
│   │   ├── sideBarPage.js
│   │   └── timePage.js
│   ├── screenshots/          # Screenshots after test runs
│   ├── support/              # Reusable commands/utilities
│   │   └── commands.js
│   └── plugins/              # Cypress plugins if any
│
│── cypress.config.js         # Cypress configuration file
│── Jenkinsfile               # CI/CD pipeline config
│── package.json              # Dependencies & scripts
│── README.md                 # Project documentation

```
