pipeline {
    agent any

    parameters {
        choice(name: 'BROWSER', choices: ['chrome', 'firefox'], description: 'Browser to run the tests')
        choice(name: 'BRANCH_NAME', choices: ['main', 'master', 'attendance'], description: 'Select Git branch')
        choice(name: 'JS_FILE', choices: ['addEmployeeScenario.js', 'AttendanceScenario.js'], description: 'Select JS test file')
    }
    stages{
        stage('Install Dependencies') {
            steps {
                bat "npm ci" 
                bat "npx cypress install" 
            }
        }
        stage('Testing'){
            steps{
                bat "npx cypress run --browser ${params.BROWSER} --spec cypress/integrations/test/${params.JS_FILE}"
            }
        }
        stage('Deploying'){
            steps{
                echo "echo Deploying the code"
            }
        }
    }
}