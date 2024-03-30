# S3 File Uploader

A Node.js application for uploading files to Amazon S3.

## Introduction

S3 File Uploader is a simple Node.js application that allows users to upload files to Amazon S3 cloud storage.

## Installation

To run the S3 File Uploader locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/your-username/s3-file-uploader.git
   ```
   
2. Navigate to the project directory:
```
cd s3-file-uploader
```

3. Install dependencies:
```
npm install
```

## Usage
To use the S3 File Uploader, set up your environment variables:

+ Create a .env file in the root directory.
+ Add your AWS credentials and S3 bucket name to the .env file:
```
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
AWS_S3_BUCKET_NAME=your_bucket_name
```

+ Run the project:

```
npm start
```

+ Open your web browser and navigate to http://localhost:3000.
+ Select a file to upload and click the "Upload" button.
+ Once the file is uploaded successfully, you will receive a confirmation message.
