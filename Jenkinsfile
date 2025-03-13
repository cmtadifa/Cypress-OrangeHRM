pipeline {
    agent any

    parameters {
        string(name: 'js', defaultValue: 'cypress/integration/test/**/*.js', description: 'Path to the JS files')
        choice(name: 'BROWSER', choices: ['chrome'], description: 'Browser to run the tests')
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