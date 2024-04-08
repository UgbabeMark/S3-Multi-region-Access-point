{
    "Version": "2012-10-17",
    "Statement" : [
    {
        "Effect": "Allow",
        "Principal" : { "AWS": "*" },
        "Action": "*",
        "Resource" : [ 
            "<BucketARN>", 
            "<BucketARN>/*"
        ],
        "Condition": {
            "StringEquals" : { "s3:DataAccessPointArn" : "<MultiRegionAccessPoint_ARN>"}
        }
    }]
}
