// import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3"; // ES Modules import
import AWS from "@aws-sdk/client-s3"; // ES Modules import

// const config = { region: "us-west-2" };
// const input = { Bucket: "hrsea16blueocean" };


const listObjects = async () => {
  try {
    const client = new AWS.S3Client({ region: "us-west-2" });
    const command = new AWS.ListObjectsCommand({ Bucket: "hrseablueocean" });
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
      Key: key
    };
    const client = new AWS.S3Client({ region: "us-west-2" });
    const command = new AWS.GetObjectAclCommand(input);
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

// console.log(listObjects())
console.log(getObject('download.jpeg'))


// https://hrsea16blueocean.s3-us-west-2.amazonaws.com/download.jpeg