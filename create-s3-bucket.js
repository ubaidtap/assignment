const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'us-east-1' });

const params = {
  Bucket: 'my-test-dynamo-bucket-new'
};

s3.createBucket(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
