pipeline {
    agent any

    stages {
        stage("Git Checkout") {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'ee5f99dd-0d70-41ce-b8aa-ddbc25711760', url: 'https://github.com/hitesh211/Project_todo.git']]])
            }
        }
        
        stage('Build'){
            steps {
        
            git branch: 'main', credentialsId: 'ee5f99dd-0d70-41ce-b8aa-ddbc25711760', url: 'https://github.com/hitesh211/Project_todo.git'
        
        }
            }
            
        stage('Test'){
            steps {
            
            echo 'the job has been Tested'
        
        }
            }
    }
    
}
    

    
    
