import { ListBulkDeploymentDetailedReportsInput } from "../shapes/ListBulkDeploymentDetailedReportsInput";
import { ListBulkDeploymentDetailedReportsOutput } from "../shapes/ListBulkDeploymentDetailedReportsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListBulkDeploymentDetailedReports: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListBulkDeploymentDetailedReports",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/bulk/deployments/{BulkDeploymentId}/detailed-reports"
  },
  input: {
    shape: ListBulkDeploymentDetailedReportsInput
  },
  output: {
    shape: ListBulkDeploymentDetailedReportsOutput
  },
  errors: [
    {
      shape: BadRequestException
    }
  ]
};
