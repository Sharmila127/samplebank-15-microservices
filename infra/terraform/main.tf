terraform {
  required_providers { aws = {source = "hashicorp/aws", version = ">= 4.0"} }
}
provider "aws" { region = var.region }
# Add VPC, EKS, RDS, ECR modules here
