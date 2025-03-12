pipeline {
    agent any

    parameters {
        string(name: 'js', defaultValue: 'cypress/integration/**/**/', description: 'Path to the JS files')
        choice(name: 'BROWSER', choices: ['chrome'], description: 'Browser to run the tests')
    }
    stages{
        stage('Testing'){
            steps{
                bat "npm i"
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