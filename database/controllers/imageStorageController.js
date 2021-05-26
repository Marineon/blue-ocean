// import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
import aws from "@aws-sdk/client-s3"; // ES Modules import
import config from './config.js';

// const config = { region: "us-west-2" };
// const input = { Bucket: "hrseablueocean" };


const listObjects = async () => {
  try {
    const client = new aws.S3Client({ region: "us-west-2" });
    const command = new aws.ListObjectsCommand({ Bucket: "hrseablueocean" });
    const data = await client.send(command);
    console.log('data');
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    const { requestId, cfId, extendedRequestId } = error.$metadata;
    console.log({ requestId, cfId, extendedRequestId });
  }
}

const getObject = async (key) => {
  try {
    const input = {
      Bucket: 'hrseablueocean',
      Key: key,
    };
    const client = new aws.S3Client({ region: "us-west-2" });
    const command = new aws.GetObjectAclCommand(input);
    const data = await client.send(command);
    console.log('data');
    console.log(JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    const { requestId, cfId, extendedRequestId } = error.$metadata;
    console.log({ requestId, cfId, extendedRequestId });
  }
}

(async function() {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: config.accessKey,
      secretAccessKey: config.secretKey,
      region: 'us-west-2'
    });

    const s3 = new aws.S3();
    const response = await s3.listObjectsV2({
      Bucket: 'hrseablueocean'
    });

    console.log(response);

  } catch (e) {
    console.error('error', e)
  }

})();

console.log(listObjects())
console.log(getObject('download.jpeg'))


// https://hrsea16blueocean.s3-us-west-2.amazonaws.com/download.jpeg