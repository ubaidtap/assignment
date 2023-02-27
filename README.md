# Part A
## Install and configure the AWS SDK:
Install the AWS SDK for your preferred programming language.
Configure your AWS credentials and region.
## Create a DynamoDB table:
Use the createTable() method of the DynamoDB client to create the table.
Provide the required parameters such as the table name, primary key, and any additional settings.
## Create an S3 bucket:
Use the createBucket() method of the S3 client to create the bucket.
Provide the required parameters such as the bucket name, region, and any additional settings.

## Create backup strategy for dynamodb table into S3
Export the DynamoDB table data to the S3 bucket every day at 2:00 AM UTC time:
Use the scan() method of the DynamoDB client to scan the entire DynamoDB table and retrieve all items.
Use the putObject() method of the S3 client to upload the data to the S3 bucket.
Schedule the export process to run every day at 2:00 AM UTC time using a cron job or a similar scheduling mechanism.

# Part B
Create a pipeline so that changes are in effect as soon as these are merged into main branch
## Install and configure Jenkins:
Install Jenkins on a server or a cloud platform of your choice.
Configure Jenkins with the necessary plugins and credentials to interact with AWS services.
## Create a new Jenkins pipeline:
In the Jenkins dashboard, create a new pipeline job and give it a descriptive name.
Configure the pipeline to use the "Pipeline script from SCM" option and point it to your Git repository that contains the JavaScript code. Once configured enable the webhook from github repository to start the build once the code is added to main branch.

## Define the pipeline stages:
Define the pipeline stages to execute the JavaScript code to create the DynamoDB table, S3 bucket, and export the table data to the bucket.
Use the AWS SDK for JavaScript and the steps outlined earlier in this conversation to define the pipeline stages.
Add the necessary Jenkins plugins to interact with AWS services.

## Schedule the backup procss:
Create a cron stage for the JS script to run every day at 2:00 AM UTC time to take the backup of created table.
