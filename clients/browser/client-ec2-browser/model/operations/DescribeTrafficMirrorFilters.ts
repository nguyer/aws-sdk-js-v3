import { DescribeTrafficMirrorFiltersInput } from "../shapes/DescribeTrafficMirrorFiltersInput";
import { DescribeTrafficMirrorFiltersOutput } from "../shapes/DescribeTrafficMirrorFiltersOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeTrafficMirrorFilters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTrafficMirrorFilters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTrafficMirrorFiltersInput
  },
  output: {
    shape: DescribeTrafficMirrorFiltersOutput
  },
  errors: []
};
