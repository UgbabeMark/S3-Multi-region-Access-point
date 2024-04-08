  # S3 Multi-Region Access point
  This project showcases the setup and configuration of an S3 Multi-Region Access Point on AWS, enabling efficient and resilient data access across multiple AWS regions. 
 

  ![Enrollment](Images/s3-multi-region-access-piont.png)

# Project Overview:

The objective of this project is to establish a robust and scalable data storage solution using Amazon S3, leveraging Multi-Region Access Points for enhanced availability and disaster recovery capabilities.

# Components and steps involved in this project:

# 1. S3 Buckets in Different Regions:

![Enrollment](s3bucket.png)


Two S3 buckets were provisioned in separate AWS regions to ensure geographical redundancy and data durability.

# 2. S3 Multi-Region Access Point:

An S3 Multi-Region Access Point was created to abstract the complexity of managing cross-region data access, providing a single endpoint for applications and users.

# 3. S3 Replication:

S3 Cross-Region Replication was configured to automatically replicate objects between the designated source and destination buckets, ensuring data consistency and compliance with data governance policies.

# 4. Failover Configuration:

Failover policies were defined to enable automatic failover to the secondary bucket in case of regional outages or service disruptions, ensuring continuous availability of data and applications.

# 5. IAM Permissions:

IAM policies and roles were carefully crafted to grant least privilege access to resources involved in the S3 Multi-Region Access Point setup, adhering to the principle of least privilege and following AWS security best practices.
