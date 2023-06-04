# NeRF Studio React Node

# React AWS S3 File Upload

This is a simple React application that allows users to upload a file to an Amazon S3 bucket.

## Features

- File selection via an input field
- Upload of selected file to a specified S3 bucket
- Console logs for successful uploads and error handling

## Prerequisites

- Node.js
- AWS Account
- S3 Bucket

## Setup and Running

1. Clone the repository to your local machine.
   
2. Install the necessary dependencies by running `npm install` in the project root.

3. This application uses environment variables to handle sensitive AWS credentials. 
   Create a `.env` file in the root of the project and fill it with your own credentials:

```env
REACT_APP_ACCESS_ID=your_access_key_id
REACT_APP_ACCESS_KEY=your_secret_access_key
REACT_APP_REGION=your_aws_region
