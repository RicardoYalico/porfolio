pipeline {
    agent any

    stages {
        stage('Clonar y Actualizar Código') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/RicardoYalico/porfolio.git'
                    ]]
                ])
                sh 'pwd'
            }
        }

        stage('Construir y Desplegar Docker') {
            steps {
                script {
                    sh '''
                        docker build -t portfolio-web .
                        docker stop portfolio-web-container || true
                        docker rm portfolio-web-container || true
                        docker run -d -p 3002:80 --name portfolio-web-container --restart unless-stopped portfolio-web
                        docker image prune -a -f
                    '''
                }
            }
        }
    }
}
