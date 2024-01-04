pipeline {
    agent any
    stages{
        stage("checkout"){
            steps{
                checkout scm
            }
        }

        stage("Build Image"){
            steps{
                sh 'docker build -t my-node-app:1.0 .'
                sh 'docker run -d -p 3000:3000 my-node-app:1.0'
            }
        }

    
    }
}