pipeline {
  agent  { label 'default' }  
  environment {
      ConfigRepo="https://github.com/Tap-Payments/devstack.git"
      BranchName="dynamo-test"
    }

  stages {
    stage('create-bucket-dynamodb') {

      steps {
        script{
          ansiColor('xterm') {                 
            echo "\u001B[32mInfo : Pulling the source code from ${params.BranchName} \u001B[0m"                        
            checkout([$class: 'GitSCM', branches: [[name: "remotes/origin/${params.BranchName}"]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'Jenkins-github-connection',url: "${env.ConfigRepo}"]]])
          withAWS(credentials: 'awsdev', region: 'us-east-1') {
        sh '''#!/bin/bash
          set +x 
          echo "\u001B[32mInfo : Working Directory\u001B[0m" && 
          set -x
          cd ${WORKSPACE}
          npm install aws-sdk
          node create-s3-bucket.js
          node create-dynamodb-table.js
          '''

          }
        }
        }
      }
    }

    stage('dynamo-s3-backup') {

      steps {
        script{
          ansiColor('xterm') {                 
            echo "\u001B[32mInfo : Pulling the source code from ${params.BranchName} \u001B[0m"
          withAWS(credentials: 'awsdev', region: 'us-east-1') {
        sh '''#!/bin/bash
          set +x 
          echo "\u001B[32mInfo : Working Directory\u001B[0m" && 
          set -x
          #cd ${WORKSPACE}
          cd /var/lib/jenkins/workspace/DEV/test-dynamo
          sudo mkdir -p /home/jenkins/scripts/backup
          cp -rf  dynamo-to-s3.js node_modules /home/jenkins/scripts/backup
          crontab -l | { cat; echo "0 2 * * * node /home/jenkins/scripts/backup/dynamo-to-s3.js"; } | crontab -
          crontab -l
          '''

          }
        }
        }
      }
    }
    }
}
