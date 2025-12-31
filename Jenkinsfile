pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing NPM packages...'
                // Installs packages from package.json
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo 'Building React App...'
                // This command creates the "build" folder
                sh 'npm run build'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                echo 'Deploying to Web Server...'
                // Runs the playbook using the inventory file
                sh 'ansible-playbook -i inventory.ini deploy.yml'
            }
        }
    }
}