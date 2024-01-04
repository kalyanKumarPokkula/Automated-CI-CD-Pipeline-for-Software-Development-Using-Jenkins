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
                sh 'docker build -t my-node-app:2.0 .'
            }
        }

        stage("Docker Push"){
            steps{
                sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWD'
                sh 'docker tag my-node-app:2.0 kalyankumar21/my-node-app:2.0'
                sh 'docker push kalyankumar21/my-node-app:2.0'
                sh 'docker logout'
                }
            }

        stage("Deploy"){
            steps{
                sh 'docker pull kalyankumar21/my-node-app:2.0'
                sh 'docker run -d -p 3000:3000 kalyankumar21/my-node-app:2.0'
            }
        }
        }

       

    
    }
