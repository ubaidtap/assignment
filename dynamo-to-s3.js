// Load the AWS SDK for Node.js
var aws_sdk_1 = require('aws-sdk');
// Set the region
aws_sdk_1.config.update({region: 'us-east-1'});

var aws_sdk_1 = require("aws-sdk");
var s3 = new aws_sdk_1.S3();
var dynamoDB = new aws_sdk_1.DynamoDB();
var exportData = function () {
    var params = {
        TableName: 'my-table'
    };
    dynamoDB.scan(params, function (err, data) {
        if (err) {
            console.error('Error scanning table:', err);
        }
        else {
            var s3Params = {
                Bucket: 'bucket-test-dynamo',
                Key: 'export.json',
                Body: JSON.stringify(data.Items)
            };
            s3.upload(s3Params, function (err, data) {
                if (err) {
                    console.error('Error uploading data to S3:', err);
                }
                else {
                    console.log('Data uploaded successfully:', data);
                }
            });
        }
    });
};
exportData();
