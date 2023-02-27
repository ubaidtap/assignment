const aws_sdk_1 = require('aws-sdk')
const tableName = 'my-table4';                // Name of the bucket where we need to copy table
const bucketName = 'my-test-dynamo-bucket-new';     // Name of the table we need to copy
const fileName = `table-export-${Date.now()}.json`; // Name of the file which will be created under S3 bucket


aws_sdk_1.config.update({region: 'us-east-1'});    // Set the region

var s3 = new aws_sdk_1.S3();
var dynamoDB = new aws_sdk_1.DynamoDB();
var exportData = function () {     // Function to copy the dynamo table to S3
    var params = {
        TableName: tableName
    };
   var dynamo =  dynamoDB.scan(params, function (err, data) { 
        if (err) {
            console.error('Error scanning table:', err);
        }
        else {
            var s3Params = {
                Bucket: bucketName,
                Key: fileName,
                Body: JSON.stringify(data.Items)
            };
            logs = s3.upload(s3Params, function (err, data) {
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
