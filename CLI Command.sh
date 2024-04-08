CLI Command :

This creates a file on your CLI.
dd if=/dev/urandom  of=multi1.file bs=1M count=10

To copy the created file to your Closet S3 bucket region.
Replace MRAP ARN with Yours.
aws s3 cp multi1.file s3://Multi-region access point ARN
