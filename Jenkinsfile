pipeline {
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Test"){
            steps{
                sh 'sudo -S apt install npm'
                sh 'npm test'
            }
        }

        stage('dev'){
            steps{
                sh "npm run dev"
            }
        }
    }
}