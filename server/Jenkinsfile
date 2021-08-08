pipeline {
    
    agent any

    stages {
        stage('checkout') {
            
          steps {
              checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'ee5f99dd-0d70-41ce-b8aa-ddbc25711760', url: 'https://github.com/hitesh211/Project_todo.git']]])
            
        }
    }
    
        
        stage('Deploy') {
            steps {
                echo 'Deployment'
            }
        }
}
    
}
