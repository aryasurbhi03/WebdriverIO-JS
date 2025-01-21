# WebdriverIO Project

This project showcases my knowledge of **WebdriverIO** using the **JavaScript** programming language, 
along with the integration of **Allure Reporting**, **BrowserStack**, and **Jenkins** for a complete test automation solution.

---

# 🚀 Features

- Automated UI testing using WebdriverIO.
- Cross-browser testing support (e.g., Chrome, Firefox).
- Integration with **Allure Reporting** for detailed and interactive test results.
- Cloud-based cross-browser testing via **BrowserStack**.
- Continuous Integration/Continuous Deployment (CI/CD) integration using **Jenkins**.
- Modular and scalable test architecture.

---

# 🛠️ Installation

# Prerequisites

1. **Node.js** (version 16 or higher recommended)
2. **BrowserStack** account credentials
3. **Jenkins** setup for CI/CD (optional)

---

# 📋 Usage

1. Running Tests Locally
Execute the tests locally using WebdriverIO's CLI:
 ## npx wdio run wdio.conf.js
 
2. Running Tests on BrowserStack
Ensure your BrowserStack credentials are correctly set up in the .env file, and then execute:

 ## npx wdio run wdio.conf.js

---

# 🖥️ Reporting

This project integrates Allure Reporting for test results. To generate and view the Allure report:

Run the following command after your test execution:
  ## allure generate allure-results --clean -o allure-report
Open the report:
  ## allure open allure-report

---

# 📦 CI/CD with Jenkins

To integrate this project with Jenkins:

1. Add the repository to your Jenkins pipeline.
2. Configure the necessary environment variables and dependencies in your Jenkins job.
3. Trigger builds to execute tests in the CI/CD pipeline.

---

# 🤝 Contributing

You can fork this repository, create a new branch, and submit a pull request for enhancements or fixes.

---

# 🙌 Acknowledgments

I would like to thank @dilpreetj
Completed the **'WebdriverIO - Complete Beginner Course 2024'** course on Udemy, which greatly contributed to this project.
 

