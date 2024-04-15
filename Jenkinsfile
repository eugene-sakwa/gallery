pipeline{
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages{
        stage("Clone Code"){
            steps{
                git branch: 'master', url: 'https://github.com/eugene-sakwa/gallery.git'
            }
        }
        stage('Build Code'){
            steps{
                sh 'npm install' // Install dependencies using npm
                sh 'npm run build' // Run the build script defined in package.json
            }
        }
        stage('Test Code'){
            steps{
                sh 'npm test' // Run tests using npm
            }
        }
    }
}



