import React, { useState } from 'react';
import { S3 } from 'aws-sdk';

// Configure AWS SDK
const s3 = new S3({
  accessKeyId: process.env.REACT_APP_ACCESS_ID,
  secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

const Upload = () => {
  const [file, setFile] = useState(null);

  const bucketName = "nerf-2"; // Replace this with your actual S3 bucket name

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const params = {
      Bucket: bucketName,
      Key: file.name,
      Body: file,
      // ACL: 'public-read', // If you want the file to be readable by everyone
    };

    try {
      const response = await s3.upload(params).promise();
      console.log(response); // Success
    } catch (error) {
      console.error(error); // There was an error
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;