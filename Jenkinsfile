pipeline {
    agent any

    parameters {
        string(name: 'js', defaultValue: 'cypress/integrations/test/**/*.js', description: 'Path to the JS files')
        choice(name: 'BROWSER', choices: ['chrome'], description: 'Browser to run the tests')
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
                bat "npx cypress run --browser ${BROWSER} --spec ${js}"
            }
        }
        stage('Deploying'){
            steps{
                echo "echo Deploying the code"
            }
        }
    }
}