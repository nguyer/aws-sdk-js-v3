import { DescribeStackResourceDriftsInput } from "../shapes/DescribeStackResourceDriftsInput";
import { DescribeStackResourceDriftsOutput } from "../shapes/DescribeStackResourceDriftsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeStackResourceDrifts: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeStackResourceDrifts",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeStackResourceDriftsInput
  },
  output: {
    shape: DescribeStackResourceDriftsOutput,
    resultWrapper: "DescribeStackResourceDriftsResult"
  },
  errors: []
};
