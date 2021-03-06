import { DescribeRefreshSchemasStatusInput } from "../shapes/DescribeRefreshSchemasStatusInput";
import { DescribeRefreshSchemasStatusOutput } from "../shapes/DescribeRefreshSchemasStatusOutput";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRefreshSchemasStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRefreshSchemasStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeRefreshSchemasStatusInput
  },
  output: {
    shape: DescribeRefreshSchemasStatusOutput
  },
  errors: [
    {
      shape: InvalidResourceStateFault
    },
    {
      shape: ResourceNotFoundFault
    }
  ]
};
